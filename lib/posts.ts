import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface PostMeta {
  slug: string
  title: string
  date: string
  meta_description: string
  tags: string[]
  category: string
  affiliate_links_used?: string[]
}

export interface Post extends PostMeta {
  contentHtml: string
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return []
  const fileNames = fs.readdirSync(postsDirectory).filter(f => f.endsWith('.md'))
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)
    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      meta_description: data.meta_description || '',
      tags: data.tags || [],
      category: data.category || '',
      affiliate_links_used: data.affiliate_links_used || [],
    }
  })
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostsByCategory(category: string): PostMeta[] {
  return getAllPosts().filter(p => p.category === category)
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  if (!fs.existsSync(fullPath)) return null
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const processedContent = await remark().use(remarkGfm).use(html, { sanitize: false }).process(content)
  const contentHtml = processedContent.toString()
  return {
    slug,
    title: data.title || '',
    date: data.date || '',
    meta_description: data.meta_description || '',
    tags: data.tags || [],
    category: data.category || '',
    affiliate_links_used: data.affiliate_links_used || [],
    contentHtml,
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return []
  return fs.readdirSync(postsDirectory)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace(/\.md$/, ''))
}
