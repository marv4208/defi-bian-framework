import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  category: string;
  readingTime: string;
  coverImage: string;
}

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || '',
        date: data.date || '',
        excerpt: data.excerpt || '',
        author: data.author || 'Marlena DeHart',
        category: data.category || 'Integration',
        readingTime: data.readingTime || '8 min read',
        coverImage: data.coverImage || '/images/blog/default.jpg',
      };
    });

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getLatestPosts(count: number = 6): BlogPost[] {
  const allPosts = getAllPosts();
  return allPosts.slice(0, count);
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || '',
    date: data.date || '',
    excerpt: data.excerpt || '',
    author: data.author || 'Marlena DeHart',
    category: data.category || 'Integration',
    readingTime: data.readingTime || '8 min read',
    coverImage: data.coverImage || '/images/blog/default.jpg',
    content,
  };
}
