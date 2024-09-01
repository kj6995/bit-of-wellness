import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import Services from '../components/Services'
import Testimonial from '../components/Testimonial'
import BlogSection from '../components/BlogSection'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import FAQSection from '../components/FAQSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Services />
      <Testimonial />
      <BlogSection />
      <FAQSection />
      <ContactUs />
      <Footer />
    </main>
  )
}