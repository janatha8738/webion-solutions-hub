import { Link } from "react-router-dom";
import {
  ArrowRight,
  Code,
  Smartphone,
  Settings,
  Database,
  Cloud,
  CheckCircle2,
  Users,
  Zap,
  Shield
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies",
      features: [
        "Responsive & Mobile-First Design",
        "Progressive Web Apps (PWA)",
        "E-commerce Solutions",
        "Content Management Systems",
        "API Integration & Development",
        "Performance Optimization"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: [
        "iOS & Android Native Apps",
        "Cross-Platform Development",
        "App Store Deployment",
        "Push Notifications",
        "Offline Functionality",
        "Real-time Data Sync"
      ]
    },
    {
      icon: Settings,
      title: "ERP Systems",
      description: "Enterprise resource planning solutions to streamline your operations",
      features: [
        "Custom ERP Development",
        "Resource Management",
        "Financial Management",
        "Supply Chain Integration",
        "Reporting & Analytics",
        "Multi-Location Support"
      ]
    },
    {
      icon: Database,
      title: "POS Systems",
      description: "Point of sale and retail management systems for modern businesses",
      features: [
        "Sales Management",
        "Inventory Tracking",
        "Customer Management",
        "Payment Integration",
        "Real-time Reporting",
        "Multi-Store Support"
      ]
    },
    {
      icon: Cloud,
      title: "Software Systems",
      description: "Custom software solutions tailored to your business needs",
      features: [
        "Process Automation",
        "Workflow Management",
        "Data Analytics",
        "Integration Solutions",
        "Cloud-Based Systems",
        "Legacy System Migration"
      ]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project roadmap"
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Creating wireframes and prototypes to visualize the solution"
    },
    {
      step: "03",
      title: "Development",
      description: "Building your solution with best practices and modern technologies"
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Rigorous testing to ensure quality and performance"
    },
    {
      step: "05",
      title: "Deployment & Support",
      description: "Launching your solution and providing ongoing maintenance"
    }
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced developers and designers dedicated to your success"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Agile methodology for rapid development and iteration"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Comprehensive testing and quality control processes"
    },
    {
      icon: CheckCircle2,
      title: "Proven Track Record",
      description: "Successfully delivered projects across multiple industries"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive technology solutions to drive your business forward
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground">
              A proven approach to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div
                key={index}
                className="relative p-6 bg-card rounded-lg border hover:border-primary transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-5xl font-bold text-primary/20 mb-4">
                  {item.step}
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-muted-foreground">
              What sets us apart from the rest
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-6">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss your project and turn your vision into reality
            </p>
            <Button size="lg" className="font-heading text-lg" asChild>
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

export default Services;
