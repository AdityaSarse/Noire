import { useRef } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import useParallax from "@/hooks/useParallax";

const craftSections = [
  {
    title: "Materials",
    subtitle: "The Foundation",
    description: "We source only the rarest and most exceptional fabrics from the world's finest mills. Japanese silks, Italian wools, French lace—each material is hand-selected for its character, drape, and ability to age with grace.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1932&auto=format&fit=crop",
  },
  {
    title: "Tailoring",
    subtitle: "The Art",
    description: "Our master tailors bring generations of expertise to every stitch. Each garment is constructed using time-honored techniques—hand-felled seams, canvas interlinings, and finishing touches that remain invisible yet essential.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Finishing",
    subtitle: "The Details",
    description: "The final stage is where ordinary becomes extraordinary. Hand-pressed seams, individually attached buttons, signature linings—these details may never be seen, but they define the experience of wearing NOIRÉ.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2080&auto=format&fit=crop",
  },
];

const Craftsmanship = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxOffset = useParallax(heroRef, 0.3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative h-[80vh] flex items-end justify-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-[120%]"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1932&auto=format&fit=crop')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
        </div>

        <div className="relative z-10 text-center pb-16 md:pb-24 px-6 max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.5em] uppercase text-primary mb-4 animate-fade-in">
            The Atelier
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-[0.1em] animate-slide-up mb-6">
            Craftsmanship
          </h1>
          <p className="font-serif text-lg md:text-xl italic text-muted-foreground animate-fade-in" style={{ animationDelay: "400ms" }}>
            Where tradition meets innovation in the pursuit of sartorial perfection.
          </p>
        </div>
      </section>

      {/* Philosophy Statement */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6">
            Our Philosophy
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wide mb-8 leading-relaxed">
            We believe that true luxury cannot be rushed. It must be cultivated, 
            nurtured, and allowed to unfold in its own time.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            In an age of instant gratification, we choose patience. Each NOIRÉ garment 
            is a meditation—a deliberate act of creation that honors both the craft 
            and the wearer.
          </p>
        </AnimatedSection>
      </section>

      {/* Craft Sections */}
      {craftSections.map((section, index) => (
        <section
          key={section.title}
          className={`py-24 md:py-32 px-6 md:px-12 lg:px-20 ${
            index % 2 === 1 ? "bg-card" : ""
          }`}
        >
          <AnimatedSection className="max-w-[1800px] mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
              index % 2 === 1 ? "lg:grid-flow-dense" : ""
            }`}>
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">
                  {section.subtitle}
                </p>
                <h3 className="font-serif text-4xl md:text-5xl tracking-wide mb-6">
                  {section.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {section.description}
                </p>
              </div>

              <div className={`luxury-image aspect-[4/5] overflow-hidden ${
                index % 2 === 1 ? "lg:col-start-1" : ""
              }`}>
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </AnimatedSection>
        </section>
      ))}

      {/* Numbers Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-card">
        <AnimatedSection className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { number: "200+", label: "Hours per garment" },
              { number: "47", label: "Master artisans" },
              { number: "1847", label: "Year established" },
              { number: "12", label: "Generations of craft" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-2">
                  {stat.number}
                </p>
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Philosophy Quote */}
      <section className="py-32 md:py-40 px-6 md:px-12 lg:px-20">
        <AnimatedSection className="max-w-5xl mx-auto text-center">
          <div className="relative">
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 font-serif text-8xl text-primary/20">
              "
            </span>
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl italic leading-relaxed text-foreground">
              The hand knows what the machine cannot understand—the weight of tradition, 
              the warmth of dedication, the soul of true craftsmanship.
            </blockquote>
            <p className="mt-8 text-xs tracking-[0.4em] uppercase text-primary">
              — Maître Artisan, NOIRÉ Atelier
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Visit CTA */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-card">
        <AnimatedSection className="max-w-[1800px] mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">
            Experience the Atelier
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wide mb-6">
            Visit Our Workshop
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Witness the artistry firsthand. Private tours of the NOIRÉ Atelier 
            are available by appointment for those who appreciate the journey 
            as much as the destination.
          </p>
          <Link to="/contact" className="luxury-btn text-foreground hover:text-background inline-block">
            <span>Schedule a Visit</span>
          </Link>
        </AnimatedSection>
      </section>

      <Footer />
    </div>
  );
};

export default Craftsmanship;