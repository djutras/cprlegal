import { Scale } from "lucide-react";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo à gauche */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl pulse-soft" />
            <div className="relative bg-primary text-primary-foreground p-3 rounded-full pulse-soft">
              <Scale className="w-6 h-6" />
            </div>
          </div>
          <div className="text-left">
            <h1 className="text-xl font-heading font-bold text-secondary">
              CPR LÉGAL
            </h1>
          </div>
        </div>

        {/* Menu à droite */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection('services')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
