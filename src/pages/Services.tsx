import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Zap,
  Shield,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Services = () => {
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

      {/* Industry Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-muted-foreground">
              Tailored technology solutions for your industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <h3 className="font-heading text-xl font-semibold mb-3">
                  Retail & E-commerce
                </h3>
                <p className="text-muted-foreground mb-4">
                  Complete POS systems, inventory management, and online storefronts to streamline your retail operations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">POS Systems</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">E-commerce</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Inventory</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <h3 className="font-heading text-xl font-semibold mb-3">
                  Manufacturing
                </h3>
                <p className="text-muted-foreground mb-4">
                  ERP systems for production planning, supply chain management, and quality control automation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">ERP</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Supply Chain</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Automation</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <h3 className="font-heading text-xl font-semibold mb-3">
                  Healthcare
                </h3>
                <p className="text-muted-foreground mb-4">
                  Patient management systems, appointment scheduling, and HIPAA-compliant mobile applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Healthcare IT</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Mobile Apps</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Security</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <h3 className="font-heading text-xl font-semibold mb-3">
                  Financial Services
                </h3>
                <p className="text-muted-foreground mb-4">
                  Secure banking applications, payment gateways, and financial management platforms.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Fintech</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Payments</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Security</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <h3 className="font-heading text-xl font-semibold mb-3">
                  Education
                </h3>
                <p className="text-muted-foreground mb-4">
                  Learning management systems, student portals, and interactive educational mobile apps.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">LMS</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">E-learning</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Mobile</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <h3 className="font-heading text-xl font-semibold mb-3">
                  Logistics
                </h3>
                <p className="text-muted-foreground mb-4">
                  Fleet management, route optimization, and real-time tracking systems for logistics operations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Tracking</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Fleet</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Optimization</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Technology Expertise
            </h2>
            <p className="text-xl text-muted-foreground">
              We use modern, proven technologies to build robust solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-heading text-2xl font-semibold mb-6 text-center">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="px-4 py-2 bg-card border rounded-lg text-sm font-medium">React</span>
                <span className="px-4 py-2 bg-card border rounded-lg text-sm font-medium">Vue.js</span>
                <span className="px-4 py-2 bg-card border rounded-lg text-sm font-medium">Angular</span>
                <span className="px-4 py-2 bg-card border rounded-lg text-sm font-medium">TypeScript</span>
                <span className="px-4 py-2 bg-card border rounded-lg text-sm font-medium">Next.js</span>
                <span className="px-4 py-2 bg-card border rounded-lg text-sm font-medium">Tailwind CSS</span>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-2xl font-semibold mb-6 text-center">
                Backend
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="px-4 py-2 bg-card border rounded-lg text-sm font-medium">Node.js</span>
                <span className="px-4 py-2 bg-card border rounded-lg text-sm font-medium">Python</span>
                <span className="px-4 py-2 bg-card border rounded-lg text-sm font-medium">.NET</span>
                <span className="px-4 py-2 bg-card border rounded-lg text-sm font-medium">Java</span>
                <span className="px-4 py-2 bg-card border rounded-lg text-sm font-medium">PHP</span>
                <span className="px-4 py-2 bg-card border rounded-lg text-sm font-medium">PostgreSQL</span>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-2xl font-semibold mb-6 text-center">
                Mobile
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="px-4 py-2 bg-card border rounded-lg text-sm font-medium">React Native</span>
                <span className="px-4 py-2 bg-card border rounded-lg text-sm font-medium">Flutter</span>
                <span className="px-4 py-2 bg-card border rounded-lg text-sm font-medium">Swift</span>
                <span className="px-4 py-2 bg-card border rounded-lg text-sm font-medium">Kotlin</span>
                <span className="px-4 py-2 bg-card border rounded-lg text-sm font-medium">iOS</span>
                <span className="px-4 py-2 bg-card border rounded-lg text-sm font-medium">Android</span>
              </div>
            </div>
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
