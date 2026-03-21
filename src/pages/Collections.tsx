import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const collections = [
  {
    id: "autumn-noir",
    title: "Autumn Noir",
    subtitle: "Fall/Winter 2024",
    description: "A meditation on the poetry of darkness. This collection explores the interplay between shadow and structure, featuring silhouettes that command attention while maintaining an air of mysterious restraint.",
    images: [
      "https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=1974&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1988&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
    ],
  },
  {
    id: "sculpted-silence",
    title: "Sculpted Silence",
    subtitle: "Resort 2024",
    description: "Where architecture meets fabric. Clean lines and calculated curves create garments that exist as wearable sculptures—each piece a study in the art of restraint and the power of negative space.",
    images: [
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1972&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=2005&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
    ],
  },
  {
    id: "midnight-form",
    title: "Midnight Form",
    subtitle: "Haute Couture",
    description: "The apex of our craft. Each piece in this collection requires over 200 hours of hand-work, representing the absolute pinnacle of sartorial artistry. For those who demand nothing less than extraordinary.",
    images: [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1974&auto=format&fit=crop",
    ],
  },
];

const Collections = () => {
  const [activeCollection, setActiveCollection] = useState(collections[0].id);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1558171813-4c088753af8f?q=80&w=1974&auto=format&fit=crop')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        </div>

        <div className="relative z-10 text-center pb-16 md:pb-24 px-6">
          <p className="text-xs tracking-[0.5em] uppercase text-primary mb-4 animate-fade-in">
            Explore
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-[0.1em] animate-slide-up">
            Collections
          </h1>
        </div>
      </section>

      {/* Collection Navigation */}
      <section className="sticky top-20 z-30 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-center gap-8 md:gap-16 py-6">
            {collections.map((collection) => (
              <button
                key={collection.id}
                onClick={() => setActiveCollection(collection.id)}
                className={`text-xs tracking-[0.2em] uppercase transition-all duration-500 relative ${
                  activeCollection === collection.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {collection.title}
                {activeCollection === collection.id && (
                  <span className="absolute -bottom-6 left-0 right-0 h-px bg-primary" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Content */}
      {collections.map((collection) => (
        <section
          key={collection.id}
          className={`py-24 md:py-32 transition-opacity duration-700 ${
            activeCollection === collection.id ? "block" : "hidden"
          }`}
        >
          <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
            {/* Collection Header */}
            <AnimatedSection className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 md:mb-24">
              <div>
                <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">
                  {collection.subtitle}
                </p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wide mb-6">
                  {collection.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {collection.description}
                </p>
              </div>
              <div className="flex items-end justify-end">
                <Link to="/lookbook" className="luxury-btn text-foreground hover:text-background">
                  <span>View Lookbook</span>
                </Link>
              </div>
            </AnimatedSection>

            {/* Collection Images */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
              <div className="md:col-span-7 luxury-image aspect-[4/5] overflow-hidden">
                <img
                  src={collection.images[0]}
                  alt={`${collection.title} main`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-5 grid grid-rows-2 gap-4 md:gap-6">
                <div className="luxury-image aspect-[4/3] overflow-hidden">
                  <img
                    src={collection.images[1]}
                    alt={`${collection.title} secondary`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="luxury-image aspect-[4/3] overflow-hidden">
                  <img
                    src={collection.images[2]}
                    alt={`${collection.title} tertiary`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Collection Quote */}
            <div className="mt-24 md:mt-32 text-center max-w-3xl mx-auto">
              <blockquote className="font-serif text-2xl md:text-3xl italic text-muted-foreground leading-relaxed">
                "Each piece whispers stories of midnight ateliers and hands that refuse to compromise."
              </blockquote>
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
};

export default Collections;