import { Shield, Gavel, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    icon: Shield,
    title: "Médiation civile",
    description: "Pour accompagner les parties dans la recherche d'une entente mutuelle, dans un climat neutre et confidentiel."
  },
  {
    icon: Gavel,
    title: "Arbitrage civil",
    description: "Pour trancher rapidement un différend par une décision exécutoire rendue par un arbitre indépendant."
  },
  {
    icon: TrendingUp,
    title: "Prévention des différends",
    description: "Pour mettre en place des mécanismes clairs et réduire les risques de conflits futurs."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
            Nos services
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-heading text-secondary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
