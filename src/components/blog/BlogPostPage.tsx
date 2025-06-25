import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { Calendar, Clock, Tag, Share2, Heart } from "lucide-react";
import BlogCTA from "./BlogCTA";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import { Helmet } from "react-helmet";
import postsData from '../../data/posts.json';
import React, { useEffect, useRef, useState } from "react";

// Add a type for the posts object
interface BlogPost {
  data: any;
  content: string;
}
const posts: Record<string, BlogPost> = postsData;

const fallback =
  "Luxury interiors and custom furniture insights from D&D Design Center.";

const Divider = () => (
  <div className="flex items-center my-20">
    <div className="flex-grow h-px bg-gradient-to-r from-transparent via-[#C5A267]/30 to-transparent" />
    <div className="mx-8 flex items-center space-x-3">
      <div className="w-2 h-2 bg-[#C5A267] rounded-full"></div>
      <div className="w-3 h-3 bg-[#C5A267]/60 rounded-full"></div>
      <div className="w-2 h-2 bg-[#C5A267] rounded-full"></div>
    </div>
    <div className="flex-grow h-px bg-gradient-to-r from-transparent via-[#C5A267]/30 to-transparent" />
  </div>
);

const PullQuote = ({ children }: { children: React.ReactNode }) => (
  <div className="relative my-16">
    <div className="absolute -left-4 -top-2 text-6xl md:text-7xl text-[#C5A267]/20 font-serif">"</div>
    <blockquote className="bg-gradient-to-br from-[#C5A267]/5 to-[#C5A267]/10 border-l-4 border-[#C5A267] italic px-8 md:px-12 py-8 md:py-10 rounded-r-2xl shadow-lg font-serif text-xl md:text-2xl lg:text-3xl text-gray-700 relative overflow-hidden leading-loose">
      <div className="absolute top-0 right-0 w-20 h-20 bg-[#C5A267]/5 rounded-full -translate-y-10 translate-x-10"></div>
      <div className="relative z-10">{children}</div>
    </blockquote>
  </div>
);

// Reading Progress Bar Component
const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / scrollHeight) * 100;
      setProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200/50 z-50">
      <div 
        className="h-full bg-gradient-to-r from-[#C5A267] to-[#b49554] transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};



// Share Button Component
const ShareButton = ({ title, url }: { title: string; url: string }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(url);
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleShare}
        className="flex items-center space-x-2 px-4 py-2 bg-[#C5A267]/10 hover:bg-[#C5A267]/20 text-[#C5A267] rounded-full transition-all duration-200 hover:scale-105"
      >
        <Share2 size={16} />
        <span className="text-sm font-medium">Share</span>
      </button>
      {showTooltip && (
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
          Copied!
        </div>
      )}
    </div>
  );
};

// Special flag to detect if we're running in react-snap
const isStaticRendering = typeof window !== 'undefined' && window.navigator.userAgent === 'ReactSnap';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // For static rendering, the slug parameter might not be available immediately
  // so we try to extract it from the pathname as a fallback
  const extractSlugFromPathname = () => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      const matches = path.match(/\/blog\/([^/]+)/);
      return matches ? matches[1] : undefined;
    }
    return undefined;
  };
  
  // Use either the slug from useParams or extract it from the pathname
  const effectiveSlug = slug || extractSlugFromPathname();
  const entry = effectiveSlug ? posts[effectiveSlug] : undefined;
  
  // If we're in static rendering mode, signal that the content is ready
  useEffect(() => {
    if (isStaticRendering && effectiveSlug) {
      console.log('React-snap detected, marking content as ready for', effectiveSlug);
      document.body.setAttribute('data-blog-content-loaded', 'true');
    }
  }, [effectiveSlug]);
  
  // If no entry is found, show an error
  if (!entry) {
    return <div className="text-center py-20 text-gray-500">Post not found.</div>;
  }
  
  const { data: frontmatter, content } = entry;

  // Add state for overlay opacity
  const [overlayOpacity, setOverlayOpacity] = useState(1);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Fade out overlay in first 7% of scroll
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fadeDistance = windowHeight * 0.07;
      let opacity = 1;
      if (scrollY > 0) {
        opacity = Math.max(0, 1 - scrollY / fadeDistance);
      }
      setOverlayOpacity(opacity);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerFooterContact = () => {
    window.dispatchEvent(new CustomEvent('openContactForm'));
  };

  const renderers = {
    paragraph: (props: any) => {
      // Check if this is the first paragraph by looking at content
      const textContent = props.children?.toString?.() || '';
      const isFirstParagraph = textContent.startsWith('Are you ready to breathe new life') || 
                              (props.node?.position?.start?.line <= 3);
      
      // Ensure proper spacing between paragraphs with consistent margins
      const baseClasses = "leading-relaxed text-lg md:text-xl font-light max-w-none text-gray-700";
      
      if (isFirstParagraph) {
        return (
          <p className={`${baseClasses} first-letter:text-6xl first-letter:font-serif first-letter:float-left first-letter:mr-4 first-letter:mt-2 first-letter:text-[#C5A267] first-letter:leading-none text-gray-800 mb-10`}>
            {props.children}
          </p>
        );
      }
      
      return (
        <p className={`${baseClasses} mb-8 mt-6`}>
          {props.children}
        </p>
      );
    },

    blockquote: (props: any) => <PullQuote>{props.children}</PullQuote>,
    hr: () => <Divider />,

    a: ({ href, children }: any) => {
      const isFooterLink = href === "#footer" || href === "/footer";
      const isExternal = href && !href.startsWith("/") && !href.startsWith("#");
      if (isFooterLink) {
        return (
          <a
            href={href}
            onClick={(e) => {
              e.preventDefault();
              triggerFooterContact();
            }}
            className="text-[#C5A267] underline hover:text-[#b49554] cursor-pointer font-medium transition-colors duration-200"
          >
            {children}
          </a>
        );
      }
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-[#C5A267] underline hover:text-[#b49554] font-medium transition-colors duration-200"
        >
          {children}
        </a>
      );
    },

    img: ({ src, alt }: any) => (
      <img
        src={src}
        alt={alt || ''}
        loading="lazy"
        className="my-12 mx-auto w-full max-w-[65vw] md:max-w-[50vw] h-auto object-contain shadow-lg hover:shadow-xl transition-shadow duration-300 block"
      />
    ),

    h1: (props: any) => {
      const childrenText = props.children ? (Array.isArray(props.children) ? props.children.join('') : props.children.toString()) : '';
      const headingId = `heading-${childrenText.toLowerCase().replace(/\s+/g, '-')}`;
      return (
        <h1 id={headingId} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 mt-0 text-gray-900 font-sans leading-tight max-w-none">
          {props.children}
        </h1>
      );
    },
    h2: (props: any) => {
      const childrenText = props.children ? (Array.isArray(props.children) ? props.children.join('') : props.children.toString()) : '';
      const headingId = `heading-${childrenText.toLowerCase().replace(/\s+/g, '-')}`;
      return (
        <h2 id={headingId} className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 mt-16 text-gray-900 font-serif leading-tight max-w-none">
          <div className="flex items-center">
            <div className="w-1 h-8 md:h-10 bg-[#C5A267] mr-4 md:mr-6 rounded-full"></div>
            {props.children}
          </div>
        </h2>
      );
    },
    h3: (props: any) => {
      const childrenText = props.children ? (Array.isArray(props.children) ? props.children.join('') : props.children.toString()) : '';
      const headingId = `heading-${childrenText.toLowerCase().replace(/\s+/g, '-')}`;
      return (
        <h3 id={headingId} className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 mt-12 text-gray-800 font-sans leading-tight max-w-none">
          {props.children}
        </h3>
      );
    },
    h4: (props: any) => (
      <h4 className="text-xl md:text-2xl font-medium mt-10 mb-6 text-gray-700 font-sans leading-tight">
        {props.children}
      </h4>
    ),
    h5: (props: any) => (
      <h5 className="text-lg md:text-xl font-medium mt-8 mb-4 text-gray-600 font-sans leading-tight">
        {props.children}
      </h5>
    ),
    h6: (props: any) => (
      <h6 className="text-base md:text-lg font-semibold mt-8 mb-4 text-gray-500 uppercase tracking-wide font-sans">
        {props.children}
      </h6>
    ),

    ul: (props: any) => (
      <ul className="space-y-4 mb-10 pl-0 max-w-none">
        {props.children}
      </ul>
    ),
    ol: (props: any) => (
      <ol className="space-y-4 mb-10 pl-0 max-w-none">
        {props.children}
      </ol>
    ),
    li: (props: any) => (
      <li className="flex items-start text-lg md:text-xl">
        <div className="w-2 h-2 bg-[#C5A267] rounded-full mt-4 mr-4 flex-shrink-0"></div>
        <span className="text-gray-700 leading-loose">{props.children}</span>
      </li>
    ),

    strong: (props: any) => (
      <strong className="font-semibold text-gray-900 bg-[#C5A267]/10 px-2 py-1 rounded">
        {props.children}
      </strong>
    ),

    em: (props: any) => (
      <em className="italic text-[#C5A267] font-medium">
        {props.children}
      </em>
    ),

    p: (props: any) => {
      // Check if the paragraph contains only an image
      const hasOnlyImage = props.children && 
        Array.isArray(props.children) && 
        props.children.length === 1 && 
        props.children[0]?.type === 'img';
      
      // If it's just an image, render it without wrapping in <p>
      if (hasOnlyImage) {
        return props.children;
      }
      
      // Regular paragraph
      return (
        <div className="text-base md:text-lg leading-relaxed mb-6 text-gray-700 font-light">
          {props.children}
        </div>
      );
    },
  };
  

  return (
    <div className="relative min-h-screen font-normal bg-gradient-to-br from-gray-50 to-white">
      <ReadingProgress />
      
      <Helmet>
        <title>{frontmatter.title} | D&D Design Center</title>
        <meta name="description" content={frontmatter.excerpt || fallback} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://dnddesigncenter.com/blog/${slug}`} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={`${frontmatter.title} | D&D Design Center`}
        />
        <meta property="og:description" content={frontmatter.excerpt || fallback} />
        <meta
          property="og:url"
          content={`https://dnddesigncenter.com/blog/${slug}`}
        />
        <meta property="og:image" content={frontmatter.image?.url} />
        <meta property="og:site_name" content="D&D Design Center" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${frontmatter.title} | D&D Design Center`}
        />
        <meta name="twitter:description" content={frontmatter.excerpt || fallback} />
        <meta name="twitter:image" content={frontmatter.image?.url} />

        {/* JSON-LD (keep your current block) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: frontmatter.title,
            image: frontmatter.image?.url,
            author: {
              "@type": "Organization",
              name: "D&D Design Center",
            },
            publisher: {
              "@type": "Organization",
              name: "D&D Design Center",
              logo: {
                "@type": "ImageObject",
                url: "https://res.cloudinary.com/designcenter/image/upload/DnD_White_Logo.avif",
              },
            },
            url: `https://dnddesigncenter.com/blog/${slug}`,
            datePublished: frontmatter.date,
            dateModified: frontmatter.date,
            description: frontmatter.excerpt || fallback,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://dnddesigncenter.com/blog/${slug}`,
            },
          })}
        </script>

        {frontmatter.video?.embedUrl && (
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              name: frontmatter.video.title,
              description: frontmatter.video.description,
              thumbnailUrl: frontmatter.video.thumbnail,
              uploadDate: frontmatter.date,
              contentUrl: frontmatter.video.url,
              embedUrl: frontmatter.video.embedUrl,
              publisher: {
                "@type": "Organization",
                name: "D&D Design Center",
                logo: {
                  "@type": "ImageObject",
                  url: "https://res.cloudinary.com/designcenter/image/upload/DnD_White_Logo.avif",
                },
              },
            })}
          </script>
        )}
      </Helmet>

      {/* Hero Section with Parallax Effect */}
      {frontmatter.image?.url && (
        <div className="relative h-screen overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full z-0">
            <img
              src={frontmatter.image.url}
              alt={frontmatter.image.alt}
              className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          </div>
          
          <div
            ref={overlayRef}
            className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6"
            style={{
              opacity: overlayOpacity,
              transition: "opacity 0.3s ease-out",
            }}
          >

            {/* Title and Meta */}
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-serif">
                {frontmatter.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
                {frontmatter.excerpt}
              </p>

              {/* Meta Information */}
              <div className="flex flex-wrap justify-center gap-6 bg-white/10 backdrop-blur-md rounded-full px-8 py-4 mb-8">
                <div className="flex items-center space-x-2 text-gray-200">
                  <Calendar size={18} className="text-[#C5A267]" />
                  <span className="font-medium">
                    {new Date(frontmatter.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-gray-200">
                  <Clock size={18} className="text-[#C5A267]" />
                  <span className="font-medium">{frontmatter.readTime} min read</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Tag size={18} className="text-[#C5A267]" />
                  <span className="bg-[#C5A267] text-white rounded-full px-4 py-1 text-sm font-semibold">
                    {frontmatter.category}
                  </span>
                </div>
              </div>

              {/* Scroll Indicator */}
              <div className="animate-bounce">
                <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto">
                  <div className="w-1 h-3 bg-white rounded-full mx-auto mt-2 animate-pulse"></div>
                </div>
                <p className="text-white/70 text-sm mt-2">Scroll to read</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Article Content */}
      <div className="relative z-10 -mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">      
          <article className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200/50">
            <div className="px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 lg:py-16">
              <ReactMarkdown 
                components={renderers} 
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[remarkBreaks]}
                skipHtml={false}
              >
                {content}
              </ReactMarkdown>
            </div>
            
            {/* Article Footer */}
            <div className="bg-gradient-to-r from-[#C5A267]/5 to-[#b49554]/5 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 border-t border-gray-200/50">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Heart size={16} className="text-red-500" />
                    <span className="text-sm">Thank you for reading!</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <ShareButton 
                    title={frontmatter.title} 
                    url={`https://dnddesigncenter.com/blog/${slug}`} 
                  />
                  <Link 
                    to="/blog"
                    className="text-[#C5A267] hover:text-[#b49554] font-medium transition-colors duration-200"
                  >
                    ← More Articles
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-16">
        <BlogCTA triggerFooterContact={triggerFooterContact} />
      </div>
    </div>
  );
};

export default BlogPostPage;

