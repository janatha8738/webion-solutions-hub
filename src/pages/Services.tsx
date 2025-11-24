import { Database, Cloud, Brain, Code, Smartphone, Settings, BarChart3, ShoppingCart, DollarSign, GraduationCap, Heart, Building2, Factory, Radio, Users, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const technicalServices = [
    {
      icon: Database,
      title: "Data Engineering",
      description: "Design and implement scalable data pipelines, ETL processes, and data warehousing solutions.",
      features: ["Data Pipeline Architecture", "ETL Development", "Data Warehousing", "Real-time Processing"]
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with advanced analytics and visualization.",
      features: ["Business Intelligence", "Predictive Analytics", "Data Visualization", "Custom Dashboards"]
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Comprehensive cloud solutions including migration, optimization, and managed services.",
      features: ["Cloud Migration", "Infrastructure as Code", "Multi-cloud Strategy", "Cost Optimization"]
    },
    {
      icon: Brain,
      title: "AI & ML",
      description: "Implement intelligent solutions using machine learning, deep learning, and AI technologies.",
      features: ["Custom ML Models", "NLP Solutions", "Computer Vision", "AI Integration"]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, scalable web applications built with cutting-edge technologies.",
      features: ["Full-stack Development", "Progressive Web Apps", "API Development", "Microservices"]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["Native Apps", "React Native", "Flutter", "App Store Deployment"]
    },
    {
      icon: Settings,
      title: "Managed Services",
      description: "24/7 support, monitoring, and management of your technology infrastructure.",
      features: ["Infrastructure Management", "Security Monitoring", "Performance Optimization", "Incident Response"]
    },
  ];

  const domainExpertise = [
    { icon: Factory, title: "Supply Chain & Logistics", description: "Optimize operations and tracking" },
    { icon: ShoppingCart, title: "E-commerce", description: "Build scalable online platforms" },
    { icon: DollarSign, title: "Financial Services", description: "Secure fintech solutions" },
    { icon: GraduationCap, title: "Education", description: "Digital learning platforms" },
    { icon: Heart, title: "Healthcare", description: "HIPAA-compliant systems" },
    { icon: Building2, title: "Real Estate", description: "Property management solutions" },
    { icon: Factory, title: "Manufacturing", description: "Industry 4.0 implementations" },
    { icon: Radio, title: "Telecommunications", description: "Network optimization" },
  ];

  const otherServices = [
    {
      icon: Users,
      title: "Consulting",
      description: "Strategic technology consulting to align IT with business objectives",
      features: ["Technology Strategy", "Digital Transformation", "Architecture Design", "Best Practices"]
    },
    {
      icon: Briefcase,
      title: "Staff Augmentation",
      description: "Skilled professionals to complement your existing team",
      features: ["Expert Talent Pool", "Flexible Engagement", "Quick Onboarding", "Quality Assurance"]
    },
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
              Our <span className="text-primary text-glow">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-center mb-12">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalServices.map((service, index) => (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary transition-all duration-300 group hover:tech-glow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <service.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
                  <h3 className="font-heading text-2xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Expertise */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-center mb-12">
            Domain Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {domainExpertise.map((domain, index) => (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:tech-glow cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6 text-center space-y-3">
                  <domain.icon className="w-10 h-10 text-primary mx-auto" />
                  <h3 className="font-heading text-lg font-semibold">{domain.title}</h3>
                  <p className="text-sm text-muted-foreground">{domain.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold text-center mb-12">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {otherServices.map((service, index) => (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary transition-all duration-300 group hover:tech-glow animate-fade-in"
              >
                <CardContent className="p-8 space-y-4">
                  <service.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
                  <h3 className="font-heading text-2xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-tech opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="font-heading text-4xl font-bold">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to leverage our expertise for your next project?
            </p>
            <Button size="lg" className="tech-glow-strong font-heading" asChild>
              <Link to="/contact">Start a Conversation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
