import { Target, Users, Lightbulb, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to delivering technology solutions that drive real business value and measurable results."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We build long-term partnerships based on trust and mutual growth."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay at the forefront of technology, constantly evolving to provide cutting-edge solutions."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Quality is non-negotiable. We maintain the highest standards in every project we undertake."
    },
  ];

  const stats = [
    { number: "100+", label: "Projects Delivered" },
    { number: "50+", label: "Happy Clients" },
    { number: "10+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="font-heading text-5xl md:text-6xl font-bold">
              About <span className="text-primary text-glow">Webion Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Your trusted partner in digital transformation
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="font-heading text-4xl font-bold text-center mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Webion Solutions was founded with a clear vision: to bridge the gap between business 
                needs and technological possibilities. In today's rapidly evolving digital landscape, 
                we recognized that businesses need more than just technical expertise—they need a 
                partner who understands their industry, challenges, and goals.
              </p>
              <p>
                Our team brings together decades of combined experience across diverse domains, from 
                data engineering and cloud architecture to artificial intelligence and custom software 
                development. We've worked with startups, enterprises, and everything in between, helping 
                them leverage technology to achieve their strategic objectives.
              </p>
              <p>
                What sets us apart is our commitment to understanding your unique business context. 
                We don't believe in one-size-fits-all solutions. Instead, we take the time to deeply 
                understand your challenges, opportunities, and constraints before crafting solutions 
                that are perfectly tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center space-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="font-heading text-5xl md:text-6xl font-bold text-primary text-glow">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:tech-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 space-y-4">
                  <value.icon className="w-12 h-12 text-primary" />
                  <h3 className="font-heading text-2xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="font-heading text-4xl font-bold">Our Expertise</h2>
            <p className="text-lg text-muted-foreground">
              We specialize in helping businesses across various industries leverage modern technology 
              to solve complex challenges. Our team has deep expertise in:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-left">
              {[
                "Data Engineering & Analytics",
                "Cloud Architecture & Migration",
                "Artificial Intelligence & ML",
                "Full-Stack Development",
                "Mobile App Development",
                "DevOps & Infrastructure",
                "Cybersecurity",
                "Digital Transformation",
                "Technical Consulting"
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-tech opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="font-heading text-4xl font-bold">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to transform your business with technology?
            </p>
            <a 
              href="mailto:webionsolutions@gmail.com"
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-heading text-lg tech-glow-strong hover:scale-105 transition-transform"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
