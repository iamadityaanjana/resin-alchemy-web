
import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageBanner } from "@/components/ui/image-banner";
import { ArrowLeft, Calendar, User, Clock, Tag, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { getPostBySlug, getRecentPosts, getFeaturedPosts } from "@/data/blogPosts";
import Markdown from "react-markdown";
import { Helmet } from "react-helmet";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = getPostBySlug(slug || "");
  
  // Scroll to top when post changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    // If post not found, redirect to blog page
    React.useEffect(() => {
      navigate('/blog', { replace: true });
    }, [navigate]);
    return null;
  }

  const recentPosts = getRecentPosts(3).filter(p => p.slug !== slug);
  const relatedPosts = getFeaturedPosts(3).filter(p => p.slug !== slug && p.category === post.category);

  // Format content for better readability
  const formattedContent = post.content.replace(/\n\n/g, '\n\n');

  // Calculate estimated read time
  const estimatedReadTime = post.readTime || Math.ceil(post.content.split(' ').length / 200);

  return (
    <Layout>
      <Helmet>
        <title>{post.title} - Resin Furniture Blog</title>
        <meta name="description" content={post.metaDescription || post.excerpt} />
        <meta name="keywords" content={post.keywords?.join(', ') || `resin furniture, ${post.category}, ${post.tags?.join(', ')}`} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
      </Helmet>

      <ImageBanner 
        imageSrc={post.image} 
        alt={post.title}
        height="25vh"
        objectPosition="center 40%"
      />

      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <Button variant="ghost" className="mb-4 pl-0 flex items-center" asChild>
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Articles
          </Link>
        </Button>

        <article className="mb-12">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-playfair">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                <span>{estimatedReadTime} min read</span>
              </div>
              <Badge className="bg-resin-blue hover:bg-resin-blue">{post.category}</Badge>
            </div>
            
            {/* Social sharing */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-sm text-gray-500 flex items-center">
                <Share2 className="h-4 w-4 mr-1" /> Share: 
              </span>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-full">
                <Facebook className="h-4 w-4 text-blue-600" />
                <span className="sr-only">Share on Facebook</span>
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-full">
                <Twitter className="h-4 w-4 text-blue-400" />
                <span className="sr-only">Share on Twitter</span>
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 p-0 rounded-full">
                <Linkedin className="h-4 w-4 text-blue-700" />
                <span className="sr-only">Share on LinkedIn</span>
              </Button>
            </div>
          </header>
          
          <div className="prose prose-lg max-w-none">
            <Markdown>{formattedContent}</Markdown>
          </div>
        </article>

        {post.tags && (
          <div className="my-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <Tag className="h-4 w-4 mr-2" /> Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="bg-gray-100 hover:bg-gray-200 text-gray-800">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-12 border-t border-gray-200 pt-8">
            <h2 className="text-2xl font-semibold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <div key={relatedPost.id} className="bg-white rounded-lg overflow-hidden shadow border border-gray-100 hover:shadow-md transition-shadow">
                  <OptimizedImage 
                    src={relatedPost.image} 
                    alt={relatedPost.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-2">{relatedPost.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{relatedPost.excerpt}</p>
                    <Button variant="link" className="text-resin-blue p-0 h-auto font-medium" asChild>
                      <Link to={`/blog/${relatedPost.slug}`}>
                        Read More
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recent Articles */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-semibold mb-6">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map((recentPost) => (
              <div key={recentPost.id} className="bg-white rounded-lg overflow-hidden shadow border border-gray-100 hover:shadow-md transition-shadow">
                <OptimizedImage 
                  src={recentPost.image} 
                  alt={recentPost.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2">{recentPost.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{recentPost.excerpt}</p>
                  <Button variant="link" className="text-resin-blue p-0 h-auto font-medium" asChild>
                    <Link to={`/blog/${recentPost.slug}`}>
                      Read More
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
