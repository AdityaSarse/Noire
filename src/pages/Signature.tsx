import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { useTilt } from "@/hooks/useTilt";

const signaturePieces = [
  {
    name: "The Sovereign Coat",
    fabric: "Double-faced Cashmere",
    hours: "180 hours",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Midnight Column",
    fabric: "Duchess Satin",
    hours: "220 hours",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1988&auto=format&fit=crop",
  },
  {
    name: "The Silence Blazer",
    fabric: "Superfine Wool",
    hours: "95 hours",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop",
  },
  {
    name: "Nocturne Gown",
    fabric: "Silk Organza",
    hours: "340 hours",
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073&auto=format&fit=crop",
  },
  {
    name: "Eclipse Ensemble",
    fabric: "Japanese Crepe",
    hours: "150 hours",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "The Archive Dress",
    fabric: "Vintage Mikado",
    hours: "275 hours",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
  },
];

const TiltCard = ({ piece, index }: { piece: typeof signaturePieces[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { tilt, handleMouseMove, handleMouseLeave } = useTilt(cardRef, 8);

  return (
    <AnimatedSection delay={index * 100} className="group">
      <div
        ref={cardRef}
        className="relative tilt-card cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.scale})`,
          transition: "transform 0.3s ease-out",
        }}
      >
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={piece.image}
            alt={piece.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Texture Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Details - Hidden by Default */}
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-2">
            {piece.fabric}
          </p>
          <h3 className="font-serif text-xl md:text-2xl tracking-wide mb-1">
            {piece.name}
          </h3>
          <p className="text-xs text-muted-foreground tracking-wider">
            {piece.hours} of hand-crafting
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
};

const Signature = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1932&auto=format&fit=crop')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        </div>

        <div className="relative z-10 text-center pb-16 md:pb-24 px-6">
          <p className="text-xs tracking-[0.5em] uppercase text-primary mb-4 animate-fade-in">
            Exclusive
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-[0.1em] animate-slide-up">
            Signature Pieces
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 text-center">
        <AnimatedSection className="max-w-3xl mx-auto">
          <p className="font-serif text-xl md:text-2xl italic text-muted-foreground leading-relaxed">
            The crown jewels of NOIRÉ ATELIER. Each signature piece represents hundreds of hours 
            of meticulous handwork, rare materials, and designs that transcend seasonal trends.
          </p>
        </AnimatedSection>
      </section>

      {/* Signature Pieces Grid */}
      <section className="pb-24 md:pb-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {signaturePieces.map((piece, index) => (
              <TiltCard key={piece.name} piece={piece} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Quote */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-card">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 font-serif text-8xl text-primary/20">
              "
            </span>
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl italic leading-relaxed text-foreground">
              A signature piece is not purchased. It is inherited forward—a legacy 
              woven into fabric, destined to outlive its wearer.
            </blockquote>
            <p className="mt-8 text-xs tracking-[0.4em] uppercase text-primary">
              — The NOIRÉ Manifesto
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Private Viewing CTA */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <AnimatedSection className="max-w-[1800px] mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">
            By Appointment Only
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wide mb-6">
            Private Viewings
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Experience our signature pieces in person at the NOIRÉ Atelier. 
            Private appointments available for discerning collectors.
          </p>
          <a href="/contact" className="luxury-btn text-foreground hover:text-background inline-block">
            <span>Request Appointment</span>
          </a>
        </AnimatedSection>
      </section>

      <Footer />
    </div>
  );
};

export default Signature;