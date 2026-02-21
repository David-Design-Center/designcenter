import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { ArrowRight, Phone, Star, CheckCircle2, MapPin, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// ─── Fade-in hook ───
const useFadeIn = (threshold = 0.1, triggerOnce = true) => {
  const { ref, inView } = useInView({ threshold, triggerOnce });
  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(() => { if (inView && !hasAnimated) setHasAnimated(true); }, [inView, hasAnimated]);
  return { ref, hasAnimated: inView || hasAnimated };
};

// ─── FAQ component ───
const FAQ = ({ question, answer }: { question: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full text-left py-4 sm:py-5 flex justify-between items-center focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <h4 className="text-base sm:text-lg font-medium text-gray-900 pr-4">{question}</h4>
        {open ? <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 opacity-100 pb-4 sm:pb-5' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

// ─── Data ───
const KITCHEN_IMAGES = {
  hero: "https://res.cloudinary.com/designcenter/image/upload/v1744048199/Product_2/Kitchen/Modern/Kitchen_Modern_8.avif",
  modern: [
    { src: "https://res.cloudinary.com/designcenter/image/upload/v1744048183/Product_2/Kitchen/Modern/Kitchen_Modern_2.avif", alt: "Modern Italian kitchen with sleek handleless design" },
    { src: "https://res.cloudinary.com/designcenter/image/upload/v1744048195/Product_2/Kitchen/Modern/Kitchen_Modern_4.avif", alt: "Contemporary kitchen with clean lines and premium Italian cabinets" },
    { src: "https://res.cloudinary.com/designcenter/image/upload/v1744048198/Product_2/Kitchen/Modern/Kitchen_Modern_7.avif", alt: "Modern kitchen with open layout and integrated appliances" },
  ],
  traditional: [
    { src: "https://res.cloudinary.com/designcenter/image/upload/v1744045922/Product_2/Kitchen/Traditional/Kitchen_Traditional_1.avif", alt: "Traditional Italian kitchen with hand-crafted cabinetry" },
    { src: "https://res.cloudinary.com/designcenter/image/upload/v1744045913/Product_2/Kitchen/Traditional/Kitchen_Traditional_3.avif", alt: "Classic Italian kitchen with luxury finishes and warm tones" },
    { src: "https://res.cloudinary.com/designcenter/image/upload/v1744045914/Product_2/Kitchen/Traditional/Kitchen_Traditional_5.avif", alt: "Traditional Italian kitchen with handcrafted wood details" },
  ],
  artDeco: [
    { src: "https://res.cloudinary.com/designcenter/image/upload/v1744046401/Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_1.avif", alt: "Art Deco kitchen with elegant geometric patterns" },
    { src: "https://res.cloudinary.com/designcenter/image/upload/v1744046393/Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_2.avif", alt: "Art Deco kitchen with marble backsplash and bold accents" },
    { src: "https://res.cloudinary.com/designcenter/image/upload/v1744046396/Product_2/Kitchen/Art_Deco/Kitchen_Art_Deco_4.avif", alt: "Italian Art Deco kitchen with premium brass hardware" },
  ],
  ctaBg: "https://res.cloudinary.com/designcenter/image/upload/v1744045915/Product_2/Kitchen/Traditional/Kitchen_Traditional_6.avif",
};

const TESTIMONIALS = [
  {
    quote: "D&D completely reimagined our kitchen. The Italian cabinets feel like they were sculpted for our apartment — every inch is used brilliantly. We cook every night now.",
    name: "Rachel M.",
    location: "Upper West Side, Manhattan",
  },
  {
    quote: "We renovated a brownstone kitchen with D&D and the result is breathtaking. The soft-close drawers, the natural wood grain — you can feel the Italian craftsmanship in every detail.",
    name: "David & Lina K.",
    location: "Park Slope, Brooklyn",
  },
  {
    quote: "From the 3D rendering to the final installation, D&D delivered beyond our expectations. Our co-op board approved everything smoothly because the team knew exactly what was needed.",
    name: "Anthony G.",
    location: "Tribeca, Manhattan",
  },
];

const FAQS = [
  { q: "How long does a custom Italian kitchen take from design to install?", a: "Most projects take 12–16 weeks from design approval to completed installation, including manufacturing and shipping from Italy. Rush timelines are available for select collections." },
  { q: "Do you handle the full renovation or just cabinetry?", a: "We can do both. Many clients come to us for cabinetry only, and we coordinate with their contractor. We also offer full-scope kitchen renovation including countertops, appliances, plumbing coordination, and installation." },
  { q: "Can I visit the showroom before committing?", a: "Absolutely. Our 6,000 sq ft Brooklyn showroom is open 7 days a week. Walk in anytime or book a free 30-minute guided consultation to see finishes, materials, and layouts in person." },
  { q: "What styles of Italian kitchens do you offer?", a: "We carry Modern, Traditional, and Art Deco styles across multiple Italian brands including Aster Cucine, Prestige, and more. Every kitchen is fully customizable in finish, hardware, and internal organization." },
  { q: "Do you work with NYC co-op and condo boards?", a: "Yes. We've completed over 100 kitchen projects across NYC buildings and know the approval process inside-out. We provide alteration agreements, insurance certificates, and work within building schedules." },
  { q: "What's included in the free consultation?", a: "A 30-minute session covering your layout, style preferences, and budget. You'll see material samples, get a ballpark estimate, and if you move forward we deliver a full 3D rendering within 7 days." },
];

const BRAND_LOGOS = [
  { src: "https://res.cloudinary.com/designcenter/image/upload/t_crop/Aster_Logo.svg", alt: "Aster Cucine" },
  { src: "https://res.cloudinary.com/designcenter/image/upload/Visionnaire_Logo_Brand.svg", alt: "Visionnaire" },
  { src: "https://res.cloudinary.com/designcenter/image/upload/Longhi_Logo.svg", alt: "Longhi" },
  { src: "https://res.cloudinary.com/designcenter/image/upload/Prestige_Logo.svg", alt: "Prestige" },
];

// ─── Page ───
const Kitchens = () => {
  const { ref: heroRef, hasAnimated: heroAnim } = useFadeIn();
  const { ref: galleryRef, hasAnimated: galleryAnim } = useFadeIn();
  const { ref: ctaRef, hasAnimated: ctaAnim } = useFadeIn();
  const { ref: testimonialsRef, hasAnimated: testimonialsAnim } = useFadeIn();
  const [activeStyle, setActiveStyle] = useState<'modern' | 'traditional' | 'artDeco'>('modern');

  const handleConsultation = () => {
    window.dispatchEvent(new CustomEvent('openContactForm'));
  };

  const styleImages = KITCHEN_IMAGES[activeStyle];

  return (
    <div className="bg-white">
      {/* ═══════════════════════════════════════════
          HELMET / SEO
      ═══════════════════════════════════════════ */}
      <Helmet>
        <title>Custom Italian Kitchens NYC – Brooklyn Showroom | D&D Design Center</title>
        <meta name="description" content="Handcrafted Italian kitchens designed for New York living. Modern, Traditional & Art Deco styles. Visit our 6,000 sq ft Brooklyn showroom. Free 30-min design consultation." />
        <link rel="canonical" href="https://dnddesigncenter.com/kitchens" />
        <meta name="robots" content="index,follow,max-snippet:200,max-image-preview:large" />

        {/* OG */}
        <meta property="og:title" content="Custom Italian Kitchens NYC – Brooklyn Showroom | D&D" />
        <meta property="og:description" content="Handcrafted Italian kitchens for NYC homes. Modern, Traditional & Art Deco. Free consultation." />
        <meta property="og:image" content={KITCHEN_IMAGES.hero} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://dnddesigncenter.com/kitchens" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* JSON-LD: LocalBusiness + Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "@id": "https://dnddesigncenter.com#business",
                "name": "D&D Design Center",
                "image": "https://res.cloudinary.com/designcenter/image/upload/DnD_Logo_Transparent.svg",
                "telephone": "+1 718-934-7100",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "2615 East 17th Street",
                  "addressLocality": "Brooklyn",
                  "addressRegion": "NY",
                  "postalCode": "11235",
                  "addressCountry": "US"
                },
                "geo": { "@type": "GeoCoordinates", "latitude": 40.586662, "longitude": -73.953265 },
                "openingHoursSpecification": [{
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                  "opens": "10:00", "closes": "19:00"
                }],
                "sameAs": [
                  "https://www.facebook.com/dnddesigncenter",
                  "https://www.instagram.com/dnddesigncenter.nyc"
                ]
              },
              {
                "@type": "Service",
                "serviceType": "Custom Italian Kitchen Design & Installation",
                "provider": { "@id": "https://dnddesigncenter.com#business" },
                "areaServed": [
                  { "@type": "City", "name": "New York" },
                  { "@type": "City", "name": "Brooklyn" },
                  { "@type": "State", "name": "New Jersey" },
                  { "@type": "State", "name": "Florida" }
                ],
                "description": "End-to-end Italian kitchen design, manufacturing, and installation for NYC apartments, brownstones, and homes."
              }
            ]
          })}
        </script>

        {/* JSON-LD: FAQ */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQS.map(f => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a }
            }))
          })}
        </script>
      </Helmet>

      {/* ═══════════════════════════════════════════
          1. HERO — Mobile-first, single CTA
      ═══════════════════════════════════════════ */}
      <motion.section
        ref={heroRef}
        className="relative min-h-[90vh] sm:min-h-[85vh] flex items-end sm:items-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: heroAnim ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* BG image */}
        <div className="absolute inset-0 z-0">
          <img
            src={KITCHEN_IMAGES.hero}
            alt="Custom Italian kitchen with walnut cabinets in a New York apartment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30 sm:bg-black/55" />
        </div>

        <div className="relative z-10 w-full px-5 sm:px-8 lg:px-16 pb-12 sm:pb-0 sm:py-20">
          <div className="max-w-3xl">
            {/* Kicker */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2.5 h-2.5 bg-[#D6A85B] rounded-full" />
              <span className="text-xs sm:text-sm uppercase tracking-widest text-white/80 font-medium">Brooklyn Showroom · Since 2006</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.15] mb-4 sm:mb-6">
              Custom Italian Kitchens<br className="hidden sm:block" /> for New York Homes
            </h1>

            <p className="text-base sm:text-lg text-white/90 max-w-xl mb-8 sm:mb-10 leading-relaxed">
              Handcrafted in Italy. Designed for your space. Visit our 6,000 sq ft showroom to see 20+ finishes — and get a free 3D render in 7 days.
            </p>

            {/* CTA */}
            <button
              onClick={handleConsultation}
              className="w-full sm:w-auto bg-[#D6A85B] hover:bg-[#B48040] text-white px-8 py-4 text-base sm:text-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2 min-h-[52px] shadow-lg"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════
          2. TRUST BAR — Compact brand logos + rating
      ═══════════════════════════════════════════ */}
      <section className="py-6 sm:py-8 bg-[#FAFAFA] border-y border-gray-100">
        <div className="px-5 sm:px-8 lg:px-16">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 max-w-5xl mx-auto">
            {/* Logos */}
            <div className="flex items-center gap-6 sm:gap-10">
              {BRAND_LOGOS.map((logo, i) => (
                <img key={i} src={logo.src} alt={logo.alt} className="h-7 sm:h-10 w-auto object-contain" loading="lazy" />
              ))}
            </div>
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D6A85B] text-[#D6A85B]" />
                ))}
              </div>
              <span className="text-sm text-gray-600">4.9/5 · 20 years of service</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. STYLE GALLERY — Tab-driven, 3 styles
      ═══════════════════════════════════════════ */}
      <motion.section
        ref={galleryRef}
        className="py-12 sm:py-20 lg:py-24"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: galleryAnim ? 1 : 0, y: galleryAnim ? 0 : 30 }}
        transition={{ duration: 0.7 }}
      >
        <div className="px-5 sm:px-8 lg:px-16 max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-center text-[#2C3E2D] mb-2">
            Three Styles. One Standard.
          </h2>
          <div className="w-12 h-0.5 bg-[#D6A85B] mx-auto mb-8 sm:mb-10" />

          {/* Style tabs */}
          <div className="flex justify-center gap-2 sm:gap-4 mb-8 sm:mb-10">
            {([
              { key: 'modern', label: 'Modern' },
              { key: 'traditional', label: 'Traditional' },
              { key: 'artDeco', label: 'Art Deco' },
            ] as const).map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveStyle(key)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-medium transition-all duration-200 ${
                  activeStyle === key
                    ? 'bg-[#2C3E2D] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Image grid — 1 col mobile, 3 col desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5">
            {styleImages.map((img, i) => (
              <div key={`${activeStyle}-${i}`} className="overflow-hidden group">
                <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ═══════════════════════════════════════════
          4. MID-PAGE CTA — Urgency banner
      ═══════════════════════════════════════════ */}
      <section className="relative py-12 sm:py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={KITCHEN_IMAGES.ctaBg} alt="" className="w-full h-full object-cover" aria-hidden="true" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 px-5 sm:px-8 lg:px-16 text-center">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif text-white mb-3 sm:mb-4">
            Planning a kitchen upgrade?
          </h3>
          <p className="text-white/80 text-sm sm:text-base mb-6 sm:mb-8 max-w-lg mx-auto">
            Book today and get a free 3D rendering of your kitchen — ready in 7 days. No obligation.
          </p>
          <button
            onClick={handleConsultation}
            className="w-full sm:w-auto bg-[#D6A85B] hover:bg-[#B48040] text-white px-8 py-3.5 text-base font-medium transition-colors duration-300 flex items-center justify-center gap-2 mx-auto min-h-[48px]"
          >
            Claim Free 3D Render
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. CONDENSED CONTENT — Process + Features (middle)
      ═══════════════════════════════════════════ */}
      <section className="py-12 sm:py-20 lg:py-24 bg-white">
        <div className="px-5 sm:px-8 lg:px-16 max-w-5xl mx-auto">
          {/* Process — 4 steps */}
          <h2 className="text-2xl sm:text-3xl font-serif text-center text-[#2C3E2D] mb-2">
            From Vision to Kitchen in 4 Steps
          </h2>
          <div className="w-12 h-0.5 bg-[#D6A85B] mx-auto mb-8 sm:mb-12" />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {[
              { step: "01", title: "Consult", desc: "Free 30-min showroom or virtual session" },
              { step: "02", title: "Design", desc: "3D rendering delivered in 7 days" },
              { step: "03", title: "Craft", desc: "Built to spec in Italy, 8–12 weeks" },
              { step: "04", title: "Install", desc: "White-glove installation by our NYC team" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-serif text-[#D6A85B] mb-2">{s.step}</div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-snug">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Features — compact 2-col */}
          <div className="bg-[#FAFAFA] rounded-lg p-5 sm:p-8">
            <h3 className="text-lg sm:text-xl font-serif text-center text-gray-900 mb-5 sm:mb-6">Why Our Italian Kitchens Stand Apart</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                "Soft-close Italian cabinet systems",
                "Natural wood veneers + high-gloss lacquer",
                "Integrated European appliance layouts",
                "Tailored to NYC building codes",
                "Customizable internal organization",
                "Moisture-resistant for NYC climate",
              ].map((f, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D6A85B] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SEO copy block — condensed */}
          <div className="mt-10 sm:mt-14 max-w-3xl mx-auto">
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              Italian kitchen cabinetry is built differently — precision joinery, full-extension drawers, and finishes that resist daily wear for decades. At D&D Design Center, every kitchen is manufactured in Italy using sustainably sourced materials, then installed by our Brooklyn-based team who understand the constraints of New York apartments, brownstones, and co-ops.
            </p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Whether you're renovating a compact Manhattan galley or opening up a sprawling Brooklyn kitchen, we design around your exact dimensions and lifestyle. We serve homeowners across NYC, New Jersey, and South Florida with the same showroom-quality experience.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. TESTIMONIALS — 3 cards
      ═══════════════════════════════════════════ */}
      <section ref={testimonialsRef} className="py-12 sm:py-20 lg:py-24 bg-[#F8F8F8]">
        <div className="px-5 sm:px-8 lg:px-16 max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-center text-[#2C3E2D] mb-2">
            What NYC Homeowners Say
          </h2>
          <div className="w-12 h-0.5 bg-[#D6A85B] mx-auto mb-8 sm:mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: testimonialsAnim ? 1 : 0, y: testimonialsAnim ? 0 : 20 }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="bg-white p-5 sm:p-7 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#D6A85B] text-[#D6A85B]" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm sm:text-base italic leading-relaxed mb-5">"{t.quote}"</p>
                <div>
                  <p className="font-medium text-gray-900 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7. FAQ — 6 questions, schema above
      ═══════════════════════════════════════════ */}
      <section className="py-12 sm:py-20 lg:py-24 bg-white">
        <div className="px-5 sm:px-8 lg:px-16 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif text-center text-[#2C3E2D] mb-2">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-0.5 bg-[#D6A85B] mx-auto mb-8 sm:mb-10" />
          <div>
            {FAQS.map((faq, i) => (
              <FAQ key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          8. SHOWROOM / LOCATION — Map + details
      ═══════════════════════════════════════════ */}
      <section className="py-12 sm:py-20 lg:py-24 bg-[#FAFAFA]">
        <div className="px-5 sm:px-8 lg:px-16 max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif text-center text-[#2C3E2D] mb-2">
            Visit Our Brooklyn Kitchen Showroom
          </h2>
          <div className="w-12 h-0.5 bg-[#D6A85B] mx-auto mb-8 sm:mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-start">
            {/* Info */}
            <div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                Touch the materials. See the finishes. Walk through full-scale kitchen setups. Our 6,000 sq ft showroom is open 7 days a week — no appointment needed.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#D6A85B] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-base">2615 East 17th Street, Brooklyn, NY 11235</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#D6A85B] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-base">Open Daily 10 AM – 7 PM</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://goo.gl/maps/xJZK1e5W5K3WQvLK9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#D6A85B] text-white hover:bg-[#B48040] transition-colors font-medium text-sm min-h-[44px]"
                >
                  Get Directions <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:+17189347100"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 border-2 border-[#D6A85B] text-[#D6A85B] hover:bg-[#D6A85B] hover:text-white transition-colors font-medium text-sm min-h-[44px]"
                >
                  <Phone className="w-4 h-4" /> (718) 934-7100
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="h-[250px] sm:h-[320px] rounded-lg overflow-hidden shadow-md">
              <iframe
                title="D&D Design Center Brooklyn Showroom"
                src="/map-locator.html"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          9. GEO-TARGETING SEO BLOCK
      ═══════════════════════════════════════════ */}
      <section className="py-8 sm:py-10 bg-white">
        <div className="px-5 sm:px-8 lg:px-16 max-w-4xl mx-auto">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Italian Kitchens for NYC, New Jersey & Florida</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            From Manhattan apartments to Brooklyn brownstones, New Jersey suburbs to South Florida waterfront homes — we design and install custom Italian kitchens tailored to your space. Visit our Brooklyn showroom or schedule a virtual consultation from anywhere.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          10. FINAL CTA — Full-width dark
      ═══════════════════════════════════════════ */}
      <motion.section
        ref={ctaRef}
        className="py-14 sm:py-20 bg-[#1A1A1A] text-white text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: ctaAnim ? 1 : 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="px-5 sm:px-8 lg:px-16 max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif mb-4 sm:mb-6">
            Ready to Design Your Italian Kitchen?
          </h2>
          <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-xl mx-auto">
            Start with a free consultation — in person at our Brooklyn showroom or virtually. Your 3D kitchen plan is 7 days away.
          </p>
          <button
            onClick={handleConsultation}
            className="w-full sm:w-auto bg-[#D6A85B] hover:bg-[#B48040] text-white px-8 py-4 text-base sm:text-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2 mx-auto min-h-[52px] shadow-lg"
          >
            Start Your Kitchen Project
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </motion.section>

      {/* sr-only FAQ for crawlers */}
      <div className="sr-only">
        {FAQS.map((faq, i) => (
          <div key={i}><h4>{faq.q}</h4><p>{faq.a}</p></div>
        ))}
      </div>
    </div>
  );
};

export default Kitchens;
