CREATE TYPE "public"."system_role" AS ENUM('user', 'ambassedor', 'service_provider', 'system_admin');--> statement-breakpoint
CREATE TABLE "services" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"description" text,
	"user_id" bigint NOT NULL
);
--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "system_role" SET DATA TYPE "public"."system_role" USING "system_role"::"public"."system_role";--> statement-breakpoint
ALTER TABLE "services" ADD CONSTRAINT "services_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "idx_services_user_id" ON "services" USING btree ("user_id");