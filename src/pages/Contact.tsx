import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Received",
      description: "We will respond within 48 hours.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        </div>

        <div className="relative z-10 text-center pb-16 md:pb-20 px-6">
          <p className="text-xs tracking-[0.5em] uppercase text-primary mb-4 animate-fade-in">
            Connect
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-[0.1em] animate-slide-up">
            Contact
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column - Information */}
            <AnimatedSection>
              <div className="mb-12">
                <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">
                  The Atelier
                </p>
                <h2 className="font-serif text-3xl md:text-4xl tracking-wide mb-6">
                  NOIRÉ Atelier Paris
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our flagship atelier in the heart of Paris welcomes discerning 
                  visitors by appointment. Experience the art of haute couture 
                  in an environment designed for quiet contemplation.
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xs tracking-[0.3em] uppercase mb-3 text-foreground">
                    Address
                  </h3>
                  <p className="text-muted-foreground">
                    42 Rue de la Couture<br />
                    75001 Paris, France
                  </p>
                </div>

                <div>
                  <h3 className="text-xs tracking-[0.3em] uppercase mb-3 text-foreground">
                    Contact
                  </h3>
                  <p className="text-muted-foreground">
                    atelier@noire.com<br />
                    +33 1 42 60 00 00
                  </p>
                </div>

                <div>
                  <h3 className="text-xs tracking-[0.3em] uppercase mb-3 text-foreground">
                    Private Appointments
                  </h3>
                  <p className="text-muted-foreground">
                    Monday – Friday<br />
                    10:00 – 18:00 CET
                  </p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 aspect-[4/3] bg-muted/30 border border-border flex items-center justify-center">
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  Paris, 1st Arrondissement
                </p>
              </div>
            </AnimatedSection>

            {/* Right Column - Contact Form */}
            <AnimatedSection delay={200}>
              <div className="mb-12">
                <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">
                  Inquiries
                </p>
                <h2 className="font-serif text-3xl md:text-4xl tracking-wide mb-6">
                  Send a Message
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  For private viewings, bespoke commissions, or general inquiries, 
                  please complete the form below. Our team responds within 48 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs tracking-[0.2em] uppercase mb-3 text-foreground"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs tracking-[0.2em] uppercase mb-3 text-foreground"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs tracking-[0.2em] uppercase mb-3 text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                    placeholder="How may we assist you?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="luxury-btn text-foreground hover:text-background disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-card">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl italic text-foreground leading-relaxed">
            "We do not dress trends. We dress individuals who understand that 
            true style is a conversation between garment and soul."
          </p>
          <div className="mt-8">
            <span className="font-serif text-xl tracking-[0.2em] text-primary">
              NOIRÉ
            </span>
            <span className="block text-[10px] tracking-[0.4em] text-muted-foreground font-sans mt-1">
              ATELIER
            </span>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;