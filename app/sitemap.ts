import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://chronostrail.com";
  const posts = getAllPosts();

  const postEntries = posts.map((post) => {
    const d = new Date(post.date);
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: isNaN(d.getTime()) ? new Date() : d,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    };
  });

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/tools`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/newsletter`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    ...postEntries,
  ];
}
