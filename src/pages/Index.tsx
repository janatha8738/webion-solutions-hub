import { Link } from "react-router-dom";
import { ArrowRight, Database, Cloud, Brain, Code, Smartphone, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  const technicalServices = [
    {
      icon: Database,
      title: "Data Engineering",
      description: "Build robust data pipelines and architectures",
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and migration",
    },
    {
      icon: Brain,
      title: "AI & ML",
      description: "Intelligent solutions powered by machine learning",
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive web applications",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps",
    },
    {
      icon: Settings,
      title: "Managed Services",
      description: "24/7 support and infrastructure management",
    },
  ];

  const industries = [
    "Supply Chain & Logistics",
    "E-commerce",
    "Financial Services",
    "Education",
    "Healthcare",
    "Real Estate",
    "Manufacturing",
    "Telecommunications",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-background via-gradient-via to-gradient-to">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight">
              Advanced Technology Solutions for{" "}
              <span className="text-primary text-glow">Modern Business</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Transform your business with cutting-edge data engineering, cloud services, 
              AI/ML, and custom software development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="tech-glow-strong font-heading text-lg" asChild>
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="font-heading text-lg" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Services */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Technical Expertise
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive technology services to power your digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalServices.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary transition-all duration-300 group hover:tech-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <service.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-heading text-2xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Domain Expertise
            </h2>
            <p className="text-xl text-muted-foreground">
              Industry-specific solutions tailored to your sector
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-lg text-center hover:border-primary hover:tech-glow transition-all duration-300 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <p className="font-heading text-lg font-medium">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how we can help you leverage technology to achieve your goals
            </p>
            <Button size="lg" className="tech-glow-strong font-heading text-lg" asChild>
              <Link to="/contact">
                Contact Us Today <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
