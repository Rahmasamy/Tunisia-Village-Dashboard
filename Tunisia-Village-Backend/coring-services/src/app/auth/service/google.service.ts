import { OAuth2Client } from "google-auth-library";
import { env } from "../../../common/config/env.config.js";
import { AppError } from "../../../common/error/AppError.js";

export class GoogleService {
  private client: OAuth2Client;

  constructor() {
    this.client = new OAuth2Client(
      env.auth.googleClientId,
      env.auth.googleClientSecret,
      env.auth.googleRedirectUri
    );
  }

  async verifyAuthorizationCode(code: string) {
    try {
      // Exchange authorization code for tokens
      const { tokens } = await this.client.getToken(code);
      
      const idToken = tokens.id_token;
      if (!idToken) {
        throw new AppError("No ID Token returned from Google token exchange", 400);
      }

      // Verify the ID Token
      const ticket = await this.client.verifyIdToken({
        idToken,
        audience: env.auth.googleClientId,
      });

      const payload = ticket.getPayload();
      if (!payload) {
        throw new AppError("Invalid Google ID Token payload", 400);
      }

      return {
        email: payload.email!,
        name: payload.name!,
        picture: payload.picture,
        sub: payload.sub,
      };
    } catch (error: any) {
      throw new AppError(`Google verification failed: ${error.message || error}`, 400);
    }
  }
}

export const googleService = new GoogleService();
