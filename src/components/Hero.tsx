import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden mt-[73px]">
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        {/* Watermark Overlay */}
        <div className="relative z-10 text-center px-6 py-20">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-4">
            CPR LÉGAL
          </h1>
          <p className="text-xl md:text-2xl text-white/90 tracking-wider">
            Conflit • Prévention • Résolution
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-secondary font-medium">
              Médiateur et arbitre
            </p>
            <h2 className="text-2xl md:text-3xl font-heading font-semibold text-foreground">
              Me William Korbatly
            </h2>
          </div>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            CPR Légal est un cabinet de médiation et d'arbitrage dédié à la prévention 
            et à la résolution efficace des conflits civils, grâce à des processus 
            alternatifs structurés et accessibles.
          </p>

          <p className="text-lg md:text-xl font-medium text-secondary">
            Notre mission est simple : intervenir rapidement, prévenir l'escalade 
            et favoriser des solutions durables.
          </p>

          <div id="contact" className="pt-6">
            <a 
              href="mailto:info@cprlegal.ca"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
