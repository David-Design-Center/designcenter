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
        <title>Service Areas | Luxury Italian Interior Design | D&D Design Center</title>
        <meta name="description" content="D&D Design Center serves luxury interior design clients across New York City, Long Island, New Jersey, Boca Raton, and Miami. Custom Italian kitchens, closets, and full home renovations." />
        <link rel="canonical" href="https://dnddesigncenter.com/service-areas" />
        <meta property="og:title" content="Service Areas | D&D Design Center" />
        <meta property="og:description" content="Italian craftsmanship delivered across the Northeast and South Florida." />
        <meta property="og:url" content="https://dnddesigncenter.com/service-areas" />
        <meta property="og:type" content="website" />
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
