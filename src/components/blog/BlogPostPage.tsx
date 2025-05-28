import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { Calendar, Clock, Tag } from "lucide-react";
import BlogCTA from "./BlogCTA";
import rehypeRaw from "rehype-raw";
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
  <div className="flex items-center my-12">
    <div className="flex-grow border-t border-gray-200" />
    <span className="mx-4 text-[#C5A267] text-xl">•</span>
    <div className="flex-grow border-t border-gray-200" />
  </div>
);

const PullQuote = ({ children }: { children: React.ReactNode }) => (
  <blockquote className="bg-white/60 border-l-4 border-[#C5A267] italic px-6 py-4 my-8 rounded-xl shadow font-serif text-xl max-w-2xl mx-auto">
    {children}
  </blockquote>
);

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
    const footerElement = document.querySelector("#footer");
    if (footerElement instanceof HTMLElement) {
      const scrollHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      window.scrollTo({
        top: scrollHeight - windowHeight,
        behavior: "smooth",
      });
      setTimeout(() => {
        const footerContactBtn = document.querySelector(
          "[data-footer-contact]"
        ) as HTMLButtonElement;
        if (footerContactBtn) {
          footerContactBtn.click();
        }
      }, 800);
    }
  };

  const renderers = {
    paragraph: (props: any) => {
      if (props.node.position.start.line === 1) {
        return (
          <p className="first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:text-[#C5A267] leading-relaxed mb-6 text-sm md:text-base text-gray-800">
            {props.children}
          </p>
        );
      }
      return (
        <p className="leading-relaxed mb-6 text-sm md:text-base text-gray-800">
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
            className="text-[#C5A267] underline hover:text-[#b49554] cursor-pointer"
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
          className="text-[#C5A267] underline hover:text-[#b49554]"
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
        className="my-6 mx-auto rounded-xl shadow-md max-w-full"
      />
    ),
  
    h1: (props: any) => (
      <h1 className="text-3xl md:text-4xl font-bold mb-6 mt-10 text-gray-900 font-serif">
        {props.children}
      </h1>
    ),
    h2: (props: any) => (
      <h2 className="text-2xl md:text-3xl font-semibold mb-4 mt-8 text-gray-900 font-sans">
        {props.children}
      </h2>
    ),
    h3: (props: any) => (
      <h3 className="text-xl md:text-2xl font-medium mb-3 mt-6 text-gray-800 font-sans">
        {props.children}
      </h3>
    ),
    h4: (props: any) => (
      <h4 className="text-lg font-medium mt-4 mb-2 text-gray-700">
        {props.children}
      </h4>
    ),
    h5: (props: any) => (
      <h5 className="text-base font-medium mt-4 mb-2 text-gray-600">
        {props.children}
      </h5>
    ),
    h6: (props: any) => (
      <h6 className="text-sm font-semibold mt-4 mb-2 text-gray-500 uppercase tracking-wide">
        {props.children}
      </h6>
    ),
  };
  

  return (
    <div className="relative min-h-screen font-normal bg-white">
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
      {frontmatter.image?.url && (
        <div className="absolute top-0 left-0 w-full h-screen z-0 pointer-events-none">
          <img
            src={frontmatter.image.url}
            alt={frontmatter.image.alt}
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none" />
        </div>
      )}
      {frontmatter.image?.url && (
        <div
          ref={overlayRef}
          className="fixed top-0 left-0 w-full h-screen z-20 flex flex-col justify-center items-center text-center px-4 pointer-events-none"
          style={{
            opacity: overlayOpacity,
            transition: "opacity 0.2s",
            willChange: "opacity",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none z-10" />
          <div className="relative flex flex-col justify-center items-center text-center px-4 z-20 pointer-events-auto">
            <Link
              to="/blog"
              className="mb-6 bg-[#C5A267] text-white text-lg font-medium px-6 py-3 rounded shadow transition hover:bg-[#b49554] z-30"
              style={{
                position: "relative",
                top: 0,
                left: 0,
                width: "fit-content",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              &larr; Back to Blog
            </Link>
            <h1
              className={`text-white font-serif text-4xl md:text-6xl font-bold drop-shadow-lg mb-4 ${
                frontmatter.title && frontmatter.title.trim().split(/\s+/).length > 5
                  ? "break-words whitespace-normal block"
                  : ""
              }`}
              style={{
                fontFamily: "'Playfair Display', serif",
                maxWidth:
                  frontmatter.title && frontmatter.title.trim().split(/\s+/).length > 5
                    ? "22ch"
                    : undefined,
                marginLeft: "auto",
                marginRight: "auto",
                wordBreak: "break-word",
              }}
            >
              {/* ✅ This h1 is for SEO crawlers & screen readers */}
              <h1 className="sr-only">{frontmatter.title}</h1>

              {/* ✅ This is your styled version, still visible */}
              {frontmatter.title}
            </h1>
            <div
              className="flex flex-wrap justify-center gap-4 bg-white/30 backdrop-blur-md rounded-full px-6 py-3 shadow-lg mb-2 text-sm md:text-base"
            >
              <span className="flex items-center gap-2 text-gray-200 font-medium">
                <Calendar size={18} className="text-[#C5A267]" />
                {new Date(frontmatter.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-2 text-gray-300 font-medium">
                <Clock size={18} className="text-[#C5A267]" />
                {frontmatter.readTime} min read
              </span>
              <span className="flex items-center gap-2 text-gray-300 font-medium">
                <Tag size={18} className="text-[#C5A267]" />
                <span className="bg-[#C5A267] text-white rounded-full px-3 py-1 text-xs font-semibold">
                  {frontmatter.category}
                </span>
              </span>
            </div>
          </div>
        </div>
      )}
      <div className="relative z-10 pt-[75vh] md:pt-[70vh]">
        <div className="max-w-xl mx-auto px-2 md:px-20">
          <article
            className="bg-white/90 backdrop-blur rounded-2xl shadow-md md:px-6 prose prose-[0.85rem] md:prose-sm max-w-xl mx-auto overflow-hidden mt-4 sm:px-4 mb-12"
            style={{
              fontFamily:
                "'Montserrat', 'DM Sans', 'Inter', 'Space Grotesk', sans-serif",
              lineHeight: 1.6,
              letterSpacing: "0.01em",
            }}
          >
            <div className="px-2 py-8 md:px-0">
              <ReactMarkdown components={renderers} rehypePlugins={[rehypeRaw]}>
                {content}
              </ReactMarkdown>
            </div>
          </article>
        </div>
      </div>
      <BlogCTA triggerFooterContact={triggerFooterContact} />
    </div>
  );
};

export default BlogPostPage;

