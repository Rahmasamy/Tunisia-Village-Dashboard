import { SystemRole } from "./enum.js";

type UserInput = {
  id: bigint;
  email: string;
  phone?: string | null;
  name: string;
  password_hash?: string | null;
  system_role?: SystemRole;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date | null;
  membership_number?: string | null;
  certificate_pdf_url?: string | null;
  certificate_image_url?: string | null;
};

export class User {
  id: bigint;
  email: string;
  phone: string | null;
  name: string;
  password_hash: string | null;
  system_role: SystemRole;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date | null;
  membership_number?: string | null;
  certificate_pdf_url?: string | null;
  certificate_image_url?: string | null;

  constructor(data: Partial<UserInput>) {
    this.id = data.id!;
    this.email = data.email!;
    this.phone = data.phone ?? null;
    this.name = data.name!;
    this.password_hash = data.password_hash ?? null;
    this.system_role = data.system_role ?? SystemRole.USER;
    this.created_at = data.created_at ?? new Date();
    this.updated_at = data.updated_at ?? new Date();
    this.deleted_at = data.deleted_at ?? null;
    this.membership_number = data.membership_number ?? null;
    this.certificate_pdf_url = data.certificate_pdf_url ?? null;
    this.certificate_image_url = data.certificate_image_url ?? null;
  }
}
