
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: number;
  tags?: string[];
  featured?: boolean;
  metaDescription?: string;
  keywords?: string[];
}
