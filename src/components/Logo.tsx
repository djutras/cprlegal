import { Scale } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-3">
      <div className="relative">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl pulse-soft" />
        <div className="relative bg-primary text-primary-foreground p-4 rounded-full pulse-soft">
          <Scale className="w-8 h-8" />
        </div>
      </div>
      <div className="text-left">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
          CPR LÉGAL
        </h1>
        <p className="text-xs md:text-sm text-muted-foreground tracking-wider">
          Conflit • Prévention • Résolution
        </p>
      </div>
    </div>
  );
};

export default Logo;
