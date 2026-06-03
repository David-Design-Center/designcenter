import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const serviceAreas = [
  { name: 'New York City', slug: 'new-york-city', description: 'Manhattan, Brooklyn, Queens, and beyond' },
  { name: 'Long Island', slug: 'long-island', description: 'North Shore to the Hamptons' },
  { name: 'New Jersey', slug: 'new-jersey', description: 'Bergen County to the Shore' },
  { name: 'Boca Raton, Florida', slug: 'boca-raton-florida', description: 'Resort-style luxury for South Florida' },
  { name: 'Miami, Florida', slug: 'miami-florida', description: 'Coral Gables to Brickell and beyond' },
];

function ServiceAreasIndex() {
  return (
    <div className="relative min-h-screen bg-white">
      <Helmet>
        <title>Service Areas | Italian Design Center NYC & Florida</title>
        <meta name="description" content="We serve NYC, Long Island, New Jersey, Boca Raton, and Miami with Italian kitchens, closets, and interiors." />
        <link rel="canonical" href="https://dnddesigncenter.com/service-areas" />
        <meta name="robots" content="index,follow,max-snippet:200,max-image-preview:large" />
        <meta property="og:title" content="Service Areas | Italian Design Center NYC & Florida" />
        <meta property="og:description" content="Italian craftsmanship delivered across NYC and South Florida." />
        <meta property="og:url" content="https://dnddesigncenter.com/service-areas" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://res.cloudinary.com/designcenter/image/upload/Hero_Video_Banner.avif" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Service Areas | Italian Design Center NYC & Florida" />
        <meta name="twitter:description" content="Italian craftsmanship delivered across NYC and South Florida." />
        <meta name="twitter:image" content="https://res.cloudinary.com/designcenter/image/upload/Hero_Video_Banner.avif" />
      </Helmet>
      
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif text-[#1a1a2e] text-center mb-6">
            Where We Work
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Italian craftsmanship, delivered and installed across the Northeast and South Florida. One accountable partner from design to completion.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                to={`/service-areas/${area.slug}`}
                className="group border border-gray-200 p-8 hover:border-[#C5A267] transition-all duration-300 hover:shadow-lg"
              >
                <h2 className="text-2xl font-serif text-[#1a1a2e] group-hover:text-[#C5A267] transition-colors mb-3">
                  {area.name}
                </h2>
                <p className="text-gray-600 text-sm">{area.description}</p>
                <span className="inline-block mt-4 text-[#C5A267] text-sm font-medium">
                  View Details →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default ServiceAreasIndex;
