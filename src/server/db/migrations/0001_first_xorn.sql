CREATE TABLE `adso_agencies` (
	`id` text(255) PRIMARY KEY NOT NULL,
	`website` text(255),
	`should_avoid` integer DEFAULT false
);
--> statement-breakpoint
CREATE TABLE `adso_agents` (
	`id` text(255) PRIMARY KEY NOT NULL,
	`name` text(255),
	`email` text(255) NOT NULL,
	FOREIGN KEY (`name`) REFERENCES `adso_agencies`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `adso_authors` (
	`id` text(255) PRIMARY KEY NOT NULL,
	`name` text(255) NOT NULL,
	`email` text(255) NOT NULL,
	`image` text(255),
	`have_worked_with` integer DEFAULT false NOT NULL,
	`pronouns` text(255),
	`background` text(255),
	`agentId` text(255),
	`advance` integer,
	FOREIGN KEY (`agentId`) REFERENCES `adso_agents`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `adso_editors` (
	`id` text(255) PRIMARY KEY NOT NULL,
	`email` text(255) NOT NULL,
	`name` text(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `adso_illos` (
	`id` text(255) PRIMARY KEY NOT NULL,
	`name` text(255) NOT NULL,
	`email` text(255) NOT NULL,
	`image` text(255),
	`have_worked_with` integer DEFAULT false NOT NULL,
	`pronouns` text(255),
	`background` text(255),
	`agentId` text(255),
	`advance` integer,
	FOREIGN KEY (`agentId`) REFERENCES `adso_agents`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `adso_titles` (
	`id` text(255) PRIMARY KEY NOT NULL,
	`text` text(255),
	`illoId` text(255),
	`authorId` text(255),
	`editorId` text(255),
	FOREIGN KEY (`illoId`) REFERENCES `adso_illos`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`authorId`) REFERENCES `adso_authors`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`editorId`) REFERENCES `adso_editors`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `adso_agents_email_unique` ON `adso_agents` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `adso_authors_email_unique` ON `adso_authors` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `adso_editors_email_unique` ON `adso_editors` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `adso_illos_email_unique` ON `adso_illos` (`email`);