import { Helmet } from "react-helmet";
import HomeHeroTop from "../components/home/HomeHeroTop";
import HomeCollections from "../components/home/HomeCollections";
import HomeProjectsCards from "../components/home/HomeProjectsCards";
import HomeHowWeWork from "../components/home/HomeHowWeWork";
import FAQ from "../components/home/FAQ";
import HomeHeroBottom from "../components/home/HomeHeroBottom";
import VisionnaireSection from "../components/home/VisionnaireSection";
import SustainabilitySection from "../components/home/SustainabilitySection";
import TextGenerateEffect from "../components/home/ParagraphSection";
import { Feature197 } from '../components/ui/accordion-feature-section';

function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <Helmet>
          <title>Italian Luxury Kitchens & Interiors – NYC, NJ & Florida | D&D Design Center</title>
          <meta
            name="description"
            content="Bespoke Italian kitchens, closets, baths & interiors. Brooklyn showroom. Free 30-min consult. Serving NYC, New Jersey, Miami & Palm Beach."
          />
          <link rel="canonical" href="https://dnddesigncenter.com/" />

          {/* JSON-LD VideoObject for SEO */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": "Hero Luxury Decor Showcase",
              "description": "Discover timeless elegance with handcrafted Italian interiors from D&D Design Center.",
              "thumbnailUrl": "https://res.cloudinary.com/designcenter/image/upload/Hero_Video_Banner.avif",
              "uploadDate": "2025-04-01",
              "contentUrl": "https://res.cloudinary.com/designcenter/video/upload/f_auto,q_auto:low/Hero_Luxury_Decor_Showcase_Slow_Motion.mp4",
              "embedUrl": "https://res.cloudinary.com/designcenter/video/upload/f_auto,q_auto:low/Hero_Luxury_Decor_Showcase_Slow_Motion.mp4",
              "publisher": {
                "@type": "Organization",
                "name": "D&D Design Center",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://res.cloudinary.com/designcenter/image/upload/v1741965462/DnD_Logo_Transparent.svg"
                }
              }
            })}
          </script>

          {/* Organization + Website JSON-LD */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://dnddesigncenter.com#org",
                  "name": "D&D Design Center",
                  "url": "https://dnddesigncenter.com/",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://res.cloudinary.com/designcenter/image/upload/v1741965462/DnD_Logo_Transparent.svg"
                  },
                  "sameAs": [
                    "https://www.facebook.com/dnddesigncenter",
                    "https://www.instagram.com/dnddesigncenter.nyc"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://dnddesigncenter.com#website",
                  "url": "https://dnddesigncenter.com/",
                  "name": "D&D Design Center",
                  "publisher": { "@id": "https://dnddesigncenter.com#org" },
                  "inLanguage": "en-US"
                }
              ]
            })}
          </script>


        </Helmet>
      <main className="pb-16">
        <HomeHeroTop />
        <HomeProjectsCards />
        <TextGenerateEffect/>
        <HomeCollections />
        <HomeHowWeWork />
        <Feature197 />
        <SustainabilitySection />
        {/* Internal linking block to strengthen topical relevance */}
        <section className="mx-auto max-w-5xl px-6 py-8">
          <h3 className="text-xl font-semibold mb-3">Design with Purpose</h3>
          <p className="text-gray-700">
            We build <a className="text-amber-700 underline" href="/sustainability">sustainable luxury kitchens</a>
            and interiors with materials that last. See how our{' '}
            <a className="text-amber-700 underline" href="/collaboration">Italian brand collaborations</a>
            {' '}bring craftsmanship to every space.
          </p>
          <p className="mt-3 text-gray-700">
            Explore our <a className="text-amber-700 underline" href="/productscollection">hand‑made product collection</a>
            {' '}for kitchens, closets, lighting and more.
          </p>
        </section>
        <VisionnaireSection />
        <FAQ />
        <HomeHeroBottom />
      </main>
    </div>
  );
}

export default Home;