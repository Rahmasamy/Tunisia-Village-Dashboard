ALTER TABLE "users" ADD COLUMN "membership_number" varchar(20);--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_membership_number_unique" UNIQUE("membership_number");