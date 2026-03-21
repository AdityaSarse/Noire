import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const lookbookImages = [
  {
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1988&auto=format&fit=crop",
    fabric: "Duchess Satin",
    collection: "Midnight Form",
  },
  {
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop",
    fabric: "Japanese Silk",
    collection: "Sculpted Silence",
  },
  {
    src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073&auto=format&fit=crop",
    fabric: "Wool Crêpe",
    collection: "Autumn Noir",
  },
  {
    src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1974&auto=format&fit=crop",
    fabric: "Cashmere Blend",
    collection: "Autumn Noir",
  },
  {
    src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1974&auto=format&fit=crop",
    fabric: "Mikado Silk",
    collection: "Midnight Form",
  },
  {
    src: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop",
    fabric: "Virgin Wool",
    collection: "Sculpted Silence",
  },
  {
    src: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=2005&auto=format&fit=crop",
    fabric: "Organza",
    collection: "Midnight Form",
  },
  {
    src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
    fabric: "Double Satin",
    collection: "Sculpted Silence",
  },
];

const Lookbook = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1974&auto=format&fit=crop')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        </div>

        <div className="relative z-10 text-center pb-16 md:pb-24 px-6">
          <p className="text-xs tracking-[0.5em] uppercase text-primary mb-4 animate-fade-in">
            Editorial
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-[0.1em] animate-slide-up">
            Lookbook
          </h1>
        </div>
      </section>

      {/* Editorial Statement */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-20 text-center">
        <AnimatedSection className="max-w-3xl mx-auto">
          <p className="font-serif text-xl md:text-2xl italic text-muted-foreground leading-relaxed">
            A visual journey through our latest collections. Each image captures the essence of 
            NOIRÉ ATELIER—where fashion transcends clothing and becomes art.
          </p>
        </AnimatedSection>
      </section>

      {/* Magazine-Style Grid */}
      <section className="pb-24 md:pb-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {lookbookImages.map((image, index) => (
              <AnimatedSection
                key={index}
                delay={index * 100}
                className={`relative group cursor-pointer ${
                  index === 0 || index === 5 ? "md:col-span-2 lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <div
                  className="relative overflow-hidden"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setZoomedImage(image.src)}
                >
                  <div className={`aspect-[3/4] ${index === 0 || index === 5 ? "lg:aspect-[4/5]" : ""}`}>
                    <img
                      src={image.src}
                      alt={`Lookbook ${index + 1}`}
                      className={`w-full h-full object-cover transition-all duration-1000 ${
                        hoveredIndex === index ? "scale-105 blur-[2px]" : "scale-100"
                      }`}
                    />
                  </div>

                  {/* Hover Overlay with Fabric Details */}
                  <div
                    className={`absolute inset-0 bg-background/80 flex flex-col items-center justify-center transition-opacity duration-500 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <p className="text-xs tracking-[0.4em] uppercase text-primary mb-2">
                      {image.collection}
                    </p>
                    <p className="font-serif text-2xl md:text-3xl tracking-wide">
                      {image.fabric}
                    </p>
                    <p className="text-xs tracking-wider text-muted-foreground mt-4">
                      Click to view
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Image Zoom Modal */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-6 cursor-pointer animate-fade-in-slow"
          onClick={() => setZoomedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            <img
              src={zoomedImage}
              alt="Zoomed view"
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute -top-12 right-0 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Lookbook;