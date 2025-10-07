import { Card, CardContent } from "./ui/card";

const About = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <Card className="border-border bg-card shadow-xl">
          <CardContent className="p-8 md:p-12 space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
                Me William Korbatly
              </h2>
              <p className="text-lg text-primary font-medium">
                Médiateur et arbitre civil
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed text-center">
              Me Korbatly met son expérience juridique et son approche pragmatique 
              au service de la résolution rapide et efficace de vos différends. 
              Son objectif : offrir une alternative moderne, humaine et structurée 
              aux recours judiciaires traditionnels.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
