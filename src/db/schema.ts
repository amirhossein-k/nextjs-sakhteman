import { pgTable, text, timestamp, uuid, integer, jsonb } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  category: text("category").notNull(), // e.g., 'بازسازی', 'سفت‌کاری'
  description: text("description").notNull(),
  beforeImageUrl: text("before_image_url"),
  afterImageUrl: text("after_image_url").notNull(),
  location: text("location"),
  completionYear: integer("completion_year"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const inquiries = pgTable("inquiries", {
  id: uuid("id").primaryKey().defaultRandom(),
  customerName: text("customer_name").notNull(),
  customerPhone: text("customer_phone").notNull(),
  projectType: text("project_type").notNull(),
  area: text("area"), // متراژ
  description: text("description"),
  attachmentUrls: jsonb("attachment_urls"), // ذخیره آرایه لینک فایل‌ها
  status: text("status").default("pending"), // pending, reviewed, archived
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const companyServices = pgTable("company_services", {
  id: uuid("id").primaryKey().defaultRandom(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  icon: text("icon"), // نام آیکون یا ایموجی
  features: jsonb("features"), // لیست ویژگی‌ها
});
