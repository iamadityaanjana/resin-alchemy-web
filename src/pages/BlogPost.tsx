
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageBanner } from "@/components/ui/image-banner";
import { ArrowLeft, Calendar, User, Clock, Tag } from "lucide-react";
import { getPostBySlug, getRecentPosts } from "@/data/blogPosts";
import Markdown from "react-markdown";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = getPostBySlug(slug || "");
  const recentPosts = getRecentPosts(3).filter(p => p.slug !== slug);

  if (!post) {
    // If post not found, redirect to blog page
    React.useEffect(() => {
      navigate('/blog', { replace: true });
    }, [navigate]);
    return null;
  }

  return (
    <Layout>
      <ImageBanner 
        imageSrc={post.image} 
        alt={post.title}
        height="30vh"
        objectPosition="center 40%"
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button variant="ghost" className="mb-6 pl-0 flex items-center" asChild>
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Articles
          </Link>
        </Button>

        <div className="mb-8">
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
              <span>{post.readTime} min read</span>
            </div>
            <Badge className="bg-resin-blue hover:bg-resin-blue">{post.category}</Badge>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <Markdown>{post.content}</Markdown>
          </div>
        </div>

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

        {/* Recent Articles */}
        <div className="mt-16 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-semibold mb-6">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentPosts.map((recentPost) => (
              <div key={recentPost.id} className="bg-white rounded-lg overflow-hidden shadow border border-gray-100">
                <img 
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
