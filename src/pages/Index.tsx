import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';
import { useParallax } from '@/hooks/useParallax';

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxOffset = useParallax(heroRef, 0.3);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const collections = [
    {
      name: 'Autumn Noir',
      image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
      description: 'Where shadows meet elegance'
    },
    {
      name: 'Sculpted Silence',
      image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80',
      description: 'Form in its purest expression'
    },
    {
      name: 'Midnight Form',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
      description: 'After hours refinement'
    }
  ];

  const signaturePieces = [
    {
      name: 'The Sovereign Coat',
      image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80',
      material: 'Italian Wool'
    },
    {
      name: 'Obsidian Gown',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80',
      material: 'Silk Charmeuse'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div 
          className="absolute inset-0 z-0"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          <img 
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
            alt="NOIRÉ ATELIER Hero"
            className="w-full h-[120%] object-cover luxury-image"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6">
          <h1 
            className={`font-serif text-6xl md:text-8xl lg:text-9xl tracking-wider mb-6 transition-all duration-1000 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            NOIRÉ
          </h1>
          <p 
            className={`font-serif text-2xl md:text-3xl lg:text-4xl tracking-[0.3em] text-accent mb-8 transition-all duration-1000 delay-300 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            ATELIER
          </p>
          <p 
            className={`font-sans text-sm md:text-base tracking-[0.2em] text-muted-foreground max-w-md mx-auto transition-all duration-1000 delay-500 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Crafted in Silence. Worn in Power.
          </p>
          
          <div 
            className={`mt-12 transition-all duration-1000 delay-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link 
              to="/collections" 
              className="luxury-btn inline-block px-12 py-4 border border-accent/30 text-accent text-xs tracking-[0.3em] hover:bg-accent hover:text-background transition-all duration-500"
            >
              EXPLORE COLLECTIONS
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div 
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-accent/50 to-transparent animate-pulse-subtle" />
        </div>
      </section>

      {/* Collections Preview */}
      <section className="py-32 px-6 md:px-12 lg:px-24">
        <AnimatedSection>
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-16">
              <div>
                <p className="text-accent text-xs tracking-[0.3em] mb-4">COLLECTIONS</p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">Current Season</h2>
              </div>
              <Link 
                to="/collections" 
                className="editorial-link text-sm tracking-[0.2em] text-muted-foreground hover:text-accent transition-colors"
              >
                VIEW ALL
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {collections.map((collection, index) => (
                <AnimatedSection key={collection.name} delay={index * 0.2}>
                  <Link to="/collections" className="group block">
                    <div className="relative aspect-[3/4] overflow-hidden mb-6">
                      <img 
                        src={collection.image}
                        alt={collection.name}
                        className="w-full h-full object-cover luxury-image transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl mb-2 group-hover:text-accent transition-colors">
                      {collection.name}
                    </h3>
                    <p className="text-muted-foreground text-sm tracking-wide">
                      {collection.description}
                    </p>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Signature Pieces Preview */}
      <section className="py-32 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <AnimatedSection>
            <div className="text-center mb-20">
              <p className="text-accent text-xs tracking-[0.3em] mb-4">SIGNATURE</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">Defining Pieces</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Each piece represents the pinnacle of craftsmanship, designed to transcend seasons and trends.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {signaturePieces.map((piece, index) => (
              <AnimatedSection key={piece.name} delay={index * 0.3}>
                <Link to="/signature" className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden mb-8">
                    <img 
                      src={piece.image}
                      alt={piece.name}
                      className="w-full h-full object-cover luxury-image transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="text-accent text-xs tracking-[0.3em]">{piece.material}</p>
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl group-hover:text-accent transition-colors">
                    {piece.name}
                  </h3>
                </Link>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection delay={0.6}>
            <div className="text-center mt-16">
              <Link 
                to="/signature" 
                className="luxury-btn inline-block px-12 py-4 border border-accent/30 text-accent text-xs tracking-[0.3em] hover:bg-accent hover:text-background transition-all duration-500"
              >
                DISCOVER SIGNATURE
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Craftsmanship Preview */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80"
                  alt="Craftsmanship"
                  className="w-full h-full object-cover luxury-image"
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="lg:pl-12">
                <p className="text-accent text-xs tracking-[0.3em] mb-4">CRAFTSMANSHIP</p>
                <h2 className="font-serif text-4xl md:text-5xl mb-8">The Art of Creation</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Every garment begins as a vision, realized through meticulous attention to detail 
                  and an unwavering commitment to excellence. Our artisans bring decades of expertise 
                  to each piece, ensuring that every stitch tells a story of dedication and mastery.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-12">
                  From the selection of the finest materials to the final pressing, 
                  no detail is overlooked in our pursuit of perfection.
                </p>
                <Link 
                  to="/craftsmanship" 
                  className="editorial-link text-accent text-sm tracking-[0.2em]"
                >
                  EXPLORE OUR PROCESS
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Philosophy Quote */}
      <section className="py-40 bg-secondary/20">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-accent text-6xl md:text-8xl font-serif mb-8">"</p>
            <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl leading-relaxed mb-12">
              True luxury lies not in abundance, 
              but in the deliberate pursuit of excellence.
            </blockquote>
            <p className="text-muted-foreground text-sm tracking-[0.2em]">
              — THE PHILOSOPHY OF NOIRÉ
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <AnimatedSection>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8">
              Experience the Atelier
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-12">
              Visit our private atelier for an exclusive viewing of our collections 
              and bespoke consultation services.
            </p>
            <Link 
              to="/contact" 
              className="luxury-btn inline-block px-12 py-4 bg-accent text-background text-xs tracking-[0.3em] hover:bg-accent/90 transition-all duration-500"
            >
              BOOK A PRIVATE VIEWING
            </Link>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
