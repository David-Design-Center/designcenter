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
import { Feature197 } from '../components/shared/accordion-feature-section';
import FollowOurJourneySection from "../components/home/FollowOurJourneySection";

function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <Helmet>
          <title>D&D Design Center | Italian Kitchens & Furniture NYC</title>
          <meta
            name="description"
            content="Italian kitchens, closets, and luxury furniture for NYC homes. Visit our 6,000 sq ft Brooklyn showroom and book a free 30-minute design consultation."
          />
          <link rel="canonical" href="https://dnddesigncenter.com" />
          <meta name="robots" content="index,follow,max-snippet:200,max-image-preview:large" />

          <meta property="og:title" content="Italian Kitchens & Furniture NYC | D&D Design Center" />
          <meta property="og:description" content="Visit the Brooklyn showroom for Italian kitchens, closets, and luxury furniture. Free design consultation." />
          <meta property="og:url" content="https://dnddesigncenter.com" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://res.cloudinary.com/designcenter/image/upload/D_D_New_York_Showroom.avif" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Italian Kitchens & Furniture NYC | D&D Design Center" />
          <meta name="twitter:description" content="Visit the Brooklyn showroom for Italian kitchens, closets, and luxury furniture. Free design consultation." />
          <meta name="twitter:image" content="https://res.cloudinary.com/designcenter/image/upload/D_D_New_York_Showroom.avif" />

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
        <FollowOurJourneySection />
        <SustainabilitySection />
        <VisionnaireSection />
        <TextGenerateEffect/>
        <HomeCollections />
        <HomeHowWeWork />
        <Feature197 />
        <FAQ />
        <HomeHeroBottom />
      </main>
    </div>
  );
}

export default Home;