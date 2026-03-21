import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        {/* Brand Statement */}
        <div className="text-center mb-16 md:mb-24">
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl italic text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            "Where silence speaks through fabric, and power is worn with grace."
          </p>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif text-2xl tracking-[0.2em] text-foreground">
                NOIRÉ
              </span>
              <span className="block text-[10px] tracking-[0.4em] text-muted-foreground font-sans mt-[-2px]">
                ATELIER
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Crafted in Silence.<br />
              Worn in Power.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-6 text-foreground">
              Explore
            </h4>
            <div className="flex flex-col gap-3">
              <Link to="/collections" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                Collections
              </Link>
              <Link to="/lookbook" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                Lookbook
              </Link>
              <Link to="/signature" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                Signature Pieces
              </Link>
              <Link to="/craftsmanship" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                Craftsmanship
              </Link>
            </div>
          </div>

          {/* Atelier */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-6 text-foreground">
              Atelier
            </h4>
            <div className="flex flex-col gap-3">
              <Link to="/craftsmanship" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                Our Philosophy
              </Link>
              <Link to="/craftsmanship" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                Materials
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                Private Appointments
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase mb-6 text-foreground">
              Contact
            </h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <p>42 Rue de la Couture</p>
              <p>Paris, 75001</p>
              <p className="mt-2">atelier@noire.com</p>
              <p>+33 1 42 60 00 00</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground tracking-wider">
            © 2024 NOIRÉ ATELIER. All rights reserved.
          </p>
          <div className="flex gap-8">
            <span className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer">
              Privacy
            </span>
            <span className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer">
              Terms
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;