import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-secondary text-secondary-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-heading font-bold mb-2">CPR LÉGAL</h3>
            <p className="text-sm opacity-90">
              Conflit • Prévention • Résolution
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5" />
            <a 
              href="mailto:info@cprlegal.ca"
              className="text-lg hover:underline"
            >
              info@cprlegal.ca
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-secondary-foreground/20 text-center text-sm opacity-75">
          <p>© {new Date().getFullYear()} CPR Légal. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
