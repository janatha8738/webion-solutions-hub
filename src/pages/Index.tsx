import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Database,
  Cloud,
  Brain,
  Code,
  Smartphone,
  Settings,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Particles from "@/components/ui/Particles/Particles";

const Index = () => {
  const [openService, setOpenService] = useState(null);

  const technicalServices = [
    {
      icon: Code,
      title: "Web Development",
      description: "Modern, responsive web applications",
      details: [
        "Personal Websites",
        "Commercial Websites",
        "E-commerce Websites",
        "Portfolio Sites",
        "Landing Pages"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps",
      details: [
        "Android Apps",
        "iOS Apps",
        "Cross-platform Apps",
        "Mobile UI/UX Design"
      ]
    },
    {
      icon: Settings,
      title: "ERP Systems",
      description: "Enterprise resource planning solutions",
      details: ["Inventory Management", "Billing Systems", "HR Systems", "Admin Panels"]
    },
    {
      icon: Database,
      title: "POS Systems",
      description: "Point of sale and retail management systems",
      details: ["Billing", "Stock Management", "Receipt Printing", "Multi-Branch Support"]
    },
    {
      icon: Cloud,
      title: "Software Systems",
      description: "Custom software solutions for your business",
      details: ["Custom CRMs", "Business Automation", "Workflow Systems"]
    },
    {
      icon: Brain,
      title: "AI / ML Services",
      description: "Intelligent automation & machine learning solutions",
      details: ["Chatbots", "AI Prediction Models", "Process Automation", "Data Insights"]
    }
  ];

  const industries = [
    "Supply Chain & Logistics",
    "E-commerce",
    "Financial Services",
    "Education",
    "Healthcare",
    "Real Estate",
    "Manufacturing",
    "Telecommunications"
  ];

  const toggleService = (index) => {
    setOpenService(openService === index ? null : index);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Particles
        className="fixed inset-0 -z-10"
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleColors={["#ffffff", "#ffffff", "#ffffff"]}
        moveParticlesOnHover={true}
        particleHoverFactor={1}
      />

      <Navigation />

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight text-white">
              Advanced Technology Solutions for{" "}
              <span className="text-primary text-glow">Modern Business</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80">
              Transform your business with cutting-edge web development, mobile
              applications, ERP systems, POS platforms, and custom software
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="tech-glow-strong font-heading text-lg" asChild>
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-heading text-lg backdrop-blur-md border-white/30 text-white"
                asChild
              >
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL SERVICES WITH CLICK EXPAND */}
<section className="py-20 relative">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16 animate-slide-up">
      <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-white">
        Technical Expertise
      </h2>
      <p className="text-xl text-white/80">
        Comprehensive technology services to power your digital transformation
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {technicalServices.map((service, index) => (
        <Card
          key={index}
          onClick={() => toggleService(index)}
          className="bg-white/5 backdrop-blur-md border border-white/20 hover:border-primary transition-all duration-300 group hover:tech-glow animate-fade-in cursor-pointer"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <CardContent className="p-6 text-white">
            <div className="flex justify-between items-center">
              <service.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <ChevronDown
                className={`transition-transform ${openService === index ? "rotate-180" : ""}`}
              />
            </div>

            <h3 className="font-heading text-2xl font-semibold mb-2">
              {service.title}
            </h3>

            <p className="text-white/80 mb-4">{service.description}</p>

            {/* EXPANDING DETAILS */}
            {openService === index && (
              <div className="mt-4 border-t border-white/20 pt-4 space-y-2 animate-fade-in">
                {service.details.map((item, i) => (
                  <p
                    key={i}
                    className="text-white/70 text-base"  // ← FONT SIZE UPDATED
                  >
                    • {item}
                  </p>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* INDUSTRIES */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-white">
              Domain Expertise
            </h2>
            <p className="text-xl text-white/80">
              Industry-specific solutions tailored to your sector
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-md border border-white/20 rounded-lg text-center hover:border-primary hover:tech-glow transition-all duration-300 cursor-pointer animate-fade-in text-white"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <p className="font-heading text-lg font-medium">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/80">
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
