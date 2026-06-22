import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';

export default function App() {

   const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans antialiased selection:bg-amber-500 selection:text-neutral-950">
      {/* 1. Interactive Header Navigation */}
      <Header />

      {/* 2. Banner/Hero Section */}
      <Hero />

      {/* 3. About Us Section */}
      <About />

      {/* 4. Gallery Section */}
      <Gallery />

      {/* 5. Contact Us Section */}
      <Contact />

      {/* 6. Footer Layout */}
      <Footer />
    </div>
  );
}

