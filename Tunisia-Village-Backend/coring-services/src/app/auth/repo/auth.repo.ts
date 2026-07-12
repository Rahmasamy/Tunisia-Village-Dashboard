import { db } from "../../../common/db/index.js";
import { passwordResets, users } from "../../../common/db/schema/index.js";
import { PasswordReset } from "../entity/password-reset.entity.js";
import { generateOTP, hashOTP } from "../utils.js";
import { eq, and, isNull, desc } from "drizzle-orm";

export function toPasswordResetEntity(raw: any): PasswordReset {
  return new PasswordReset({
    id: raw.id,
    user_id: raw.user_id,
    otp_hash: raw.otp_hash,
    expires_at: raw.expires_at,
    created_at: raw.created_at,
    consumed_at: raw.consumed_at,
  });
}

export async function createPasswordReset(userId: bigint) {
  // Generate OTP
  const otp = generateOTP();
  
  // Hash OTP
  const hashedOtp = await hashOTP(otp);
  
  // Calculate expiration (15 minutes from now)
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000);
  
  // Insert password reset record
  const [inserted] = await db.insert(passwordResets).values({
    userId: userId,
    otpHash: hashedOtp,
    expiresAt: expiresAt,
    createdAt: new Date(),
  }).returning();

  if (!inserted) {
    throw new Error("Failed to insert password reset");
  }
  
  const result = [
    {
      id: inserted.id,
      user_id: inserted.userId,
      otp_hash: inserted.otpHash,
      expires_at: inserted.expiresAt,
      created_at: inserted.createdAt,
      consumed_at: inserted.consumedAt,
    }
  ];
  
  // Return OTP to send to user (not the hash)
  return { otp, expiresAt, result };
}

export async function findPasswordResetByUserId(userId: bigint): Promise<PasswordReset | undefined> {
  const [result] = await db
    .select()
    .from(passwordResets)
    .where(
      and(
        eq(passwordResets.userId, userId),
        isNull(passwordResets.consumedAt)
      )
    )
    .orderBy(desc(passwordResets.id))
    .limit(1);

  if (!result) return undefined;
  return toPasswordResetEntity({
    id: result.id,
    user_id: result.userId,
    otp_hash: result.otpHash,
    expires_at: result.expiresAt,
    created_at: result.createdAt,
    consumed_at: result.consumedAt,
  });
}

export async function consumePasswordReset(id: bigint): Promise<void> {
  await db
    .update(passwordResets)
    .set({ consumedAt: new Date() })
    .where(eq(passwordResets.id, id));
}

export async function updatePassword(userId: bigint, newPasswordHash: string): Promise<void> {
  await db
    .update(users)
    .set({ passwordHash: newPasswordHash })
    .where(eq(users.id, userId));
}