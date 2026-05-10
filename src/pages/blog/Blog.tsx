import { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const BASE_URL = 'https://dnddesigncenter.com';
const BLOG_URL = `${BASE_URL}/blog`;
const OG_IMAGE = 'https://res.cloudinary.com/designcenter/image/upload/Hero_Video_Banner.avif';

const Blog = () => {
  useEffect(() => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[data-soro-blog="true"]'
    );

    if (existingScript) {
      return undefined;
    }

    const script = document.createElement('script');
    script.src = 'https://app.trysoro.com/api/embed/5e83fd5d-41c7-4d7d-b2bc-449561f9d5c8';
    script.defer = true;
    script.setAttribute('data-soro-blog', 'true');
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Helmet>
        <title>Design Journal | D&D Design Center</title>
        <meta
          name="description"
          content="Explore the D&D Design Center journal for Italian design insights, luxury interiors, and bespoke kitchen inspiration."
        />
        <link rel="canonical" href={BLOG_URL} />
        <meta name="robots" content="index,follow,max-snippet:200,max-image-preview:large" />

        <meta property="og:title" content="Design Journal | D&D Design Center" />
        <meta
          property="og:description"
          content="Luxury interior design stories, Italian craftsmanship, and showroom highlights from D&D Design Center."
        />
        <meta property="og:url" content={BLOG_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Design Journal | D&D Design Center" />
        <meta
          name="twitter:description"
          content="Luxury interior design stories, Italian craftsmanship, and showroom highlights from D&D Design Center."
        />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "D&D Design Center Journal",
            "url": BLOG_URL,
            "description": "Italian design insights, bespoke kitchens, and luxury interior inspiration.",
            "publisher": {
              "@type": "Organization",
              "name": "D&D Design Center",
              "url": BASE_URL,
              "logo": {
                "@type": "ImageObject",
                "url": "https://res.cloudinary.com/designcenter/image/upload/v1741965462/DnD_Logo_Transparent.svg"
              }
            }
          })}
        </script>
      </Helmet>

      <section className="mx-auto w-full max-w-6xl px-6 pb-24 pt-16">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            D&D Design Center
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-neutral-900 md:text-5xl">
            Design Journal
          </h1>
          <p className="mt-4 text-lg text-neutral-600">
            Stories, design guidance, and inspiration drawn from our Italian partners and
            Brooklyn showroom.
          </p>
        </div>

        <div className="mt-10">
          <div id="soro-blog"></div>
        </div>
      </section>
    </main>
  );
};

export default Blog;
