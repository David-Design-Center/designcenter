import { Helmet } from 'react-helmet';
import BlogHero from '../components/blog/BlogHero';
import BlogGrid from '../components/blog/BlogGrid';
import BlogCTA from '../components/blog/BlogCTA';
import ContactFormPopup from '../components/ui/ContactFormPopup';
import { useContactForm } from '../hooks/useContactForm';

const Blog = () => {
  const { isContactFormOpen, openContactForm, closeContactForm } = useContactForm();
  
  function triggerFooterContact(): void {
    openContactForm();
  }

  return (
    <div className="relative min-h-screen bg-white">
      <Helmet>
        <title>Interior Design Insights & Trends | D&D Design Center</title>
        <meta
          name="description"
          content="Read the latest news and updates from D&D Design Center on our blog."
        />
        <link rel="canonical" href="https://dnddesigncenter.com/blog" />
      </Helmet>

      <main>
        <BlogHero />
        <BlogGrid />
        <BlogCTA triggerFooterContact={triggerFooterContact} />
      </main>
      
      {/* Contact Form Popup */}
      <ContactFormPopup isOpen={isContactFormOpen} onClose={closeContactForm} />
    </div>
  );
};

export default Blog;