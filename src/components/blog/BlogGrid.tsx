import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BlogPost from './BlogPost';
import { Filter } from 'lucide-react';
import postsData from '../../data/posts.json';

const categories = ['All', 'Design', 'Inspiration', 'Trends', 'Sustainability', 'Craftsmanship'];

const BlogGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const loadPosts = () => {
      setIsLoading(true);
      try {
        const loadedPosts = Object.entries(postsData).map(([slug, entry]: [string, any]) => ({
          ...entry.data,
          content: entry.content,
          slug,
        }));
        
        // Sort by date (newest first)
        loadedPosts.sort((a, b) => {
          const dateA = a.date ? new Date(a.date).getTime() : 0;
          const dateB = b.date ? new Date(b.date).getTime() : 0;
          return dateB - dateA;
        });
        
        setPosts(loadedPosts);
      } catch (error) {
        console.error('Error loading posts:', error);
      } finally {
        setIsLoading(false);
      }
    };
  
    loadPosts();
  }, []);

  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <section className="py-12 md:py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-serif">Latest Articles</h2>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 text-gray-600"
            >
              <Filter className="w-5 h-5" />
              Filter
            </button>
          </div>
          
          <div className={`flex flex-wrap gap-3 ${showFilters ? 'block' : 'hidden md:flex'}`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-[#C5A267] text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Posts Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#C5A267]"></div>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredPosts.map((post, index) => (
              <BlogPost key={post.title} post={post} index={index} />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;