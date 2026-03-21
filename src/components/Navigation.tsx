import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/collections", label: "Collections" },
  { path: "/lookbook", label: "Lookbook" },
  { path: "/signature", label: "Signature" },
  { path: "/craftsmanship", label: "Atelier" },
  { path: "/contact", label: "Contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link
              to="/"
              className="relative z-50 group"
            >
              <span className="font-serif text-xl md:text-2xl tracking-[0.2em] text-foreground">
                NOIRÉ
              </span>
              <span className="block text-[10px] tracking-[0.4em] text-muted-foreground font-sans mt-[-2px] group-hover:text-primary transition-colors duration-500">
                ATELIER
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`editorial-link text-xs tracking-[0.2em] uppercase font-sans transition-colors duration-300 ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50 p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background transition-all duration-700 lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-serif text-3xl md:text-4xl tracking-[0.15em] py-4 transition-all duration-500 ${
                isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              } ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-foreground hover:text-primary"
              }`}
              style={{ transitionDelay: isOpen ? `${index * 100}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;