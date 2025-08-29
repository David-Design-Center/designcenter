import React, { useEffect, useState } from 'react';
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import { Helmet } from "react-helmet";

interface SimpleMarkdownPageProps {
  markdownPath: string;
  title?: string;
}

const SimpleMarkdownPage: React.FC<SimpleMarkdownPageProps> = ({ 
  markdownPath, 
  title = "D&D Design Center" 
}) => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        const response = await fetch(markdownPath);
        if (!response.ok) {
          throw new Error(`Failed to load markdown: ${response.statusText}`);
        }
        const text = await response.text();
        setContent(text);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load content');
      } finally {
        setLoading(false);
      }
    };

    loadMarkdown();
  }, [markdownPath]);

  // Simple, clean renderers - no complex styling
  const renderers = {
    // Clean paragraph styling
    p: (props: any) => (
      <p className="mb-4 text-gray-700 leading-relaxed">
        {props.children}
      </p>
    ),

    // Simple headings
    h1: (props: any) => (
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        {props.children}
      </h1>
    ),
    h2: (props: any) => (
      <h2 className="text-2xl font-semibold mb-4 mt-8 text-gray-900">
        {props.children}
      </h2>
    ),
    h3: (props: any) => (
      <h3 className="text-xl font-medium mb-3 mt-6 text-gray-800">
        {props.children}
      </h3>
    ),

    // Simple images
    img: (props: any) => (
      <img
        src={props.src}
        alt={props.alt || ''}
        className="max-w-full h-auto my-6 rounded-lg shadow-sm"
      />
    ),

    // Clean links
    a: (props: any) => (
      <a
        href={props.href}
        target={props.href?.startsWith('http') ? '_blank' : undefined}
        rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="text-[#C5A267] underline hover:text-[#b49554] transition-colors"
      >
        {props.children}
      </a>
    ),

    // Simple lists
    ul: (props: any) => (
      <ul className="mb-4 ml-6 space-y-2">
        {props.children}
      </ul>
    ),
    li: (props: any) => (
      <li className="text-gray-700 list-disc">
        {props.children}
      </li>
    ),

    // Simple blockquotes
    blockquote: (props: any) => (
      <blockquote className="border-l-4 border-[#C5A267] pl-4 my-6 italic text-gray-600">
        {props.children}
      </blockquote>
    ),

    // Clean code blocks
    code: (props: any) => (
      <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
        {props.children}
      </code>
    ),

    // Simple tables
    table: (props: any) => (
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-gray-300">
          {props.children}
        </table>
      </div>
    ),
    th: (props: any) => (
      <th className="border border-gray-300 px-4 py-2 bg-gray-50 font-semibold text-left">
        {props.children}
      </th>
    ),
    td: (props: any) => (
      <td className="border border-gray-300 px-4 py-2">
        {props.children}
      </td>
    ),
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content="D&D Design Center - Luxury Interior Design" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <ReactMarkdown 
            components={renderers}
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkBreaks]}
            skipHtml={false}
          >
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default SimpleMarkdownPage;
