import mongoose from "mongoose";

const BlogPostSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  locale: { type: String, default: "en" },
  title: { type: String, required: true },
  excerpt: String,
  content: String,
  coverImage: String,
  author: String,
  tags: [String],
  published: { type: Boolean, default: false },
  publishedAt: Date,
  createdAt: { type: Date, default: Date.now },
});

export const BlogPost =
  mongoose.models.BlogPost || mongoose.model("BlogPost", BlogPostSchema);
