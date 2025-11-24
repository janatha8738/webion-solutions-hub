import { Database, Cloud, Brain, Code, Smartphone, Settings, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Particles from "@/components/ui/Particles/Particles";

const Services = () => {
  const technicalServices = [
    { icon: Database, title: "Data Engineering", description: "Build robust data pipelines and architectures", features: ["ETL", "Data Warehousing", "Real-time", "Lakehouse"] },
    { icon: BarChart3, title: "Data Analytics", description: "Turn data into actionable insights", features: ["BI Dashboards", "Predictive", "Visualization", "Reporting"] },
    { icon: Cloud, title: "Cloud Services", description: "Scalable cloud infrastructure and migration", features: ["AWS/Azure/GCP", "IaC", "Migration", "Cost Optimization"] },
    { icon: Brain, title: "AI & ML", description: "Intelligent solutions powered by machine learning", features: ["LLMs", "Computer Vision", "NLP", "MLOps"] },
    { icon: Code, title: "Web Development", description: "Modern, responsive web applications", features: ["Next.js", "React", "TypeScript", "PWA"] },
    { icon: Smartphone, title: "Mobile Development", description: "Native and cross-platform mobile apps", features: ["iOS", "Android", "React Native", "Flutter"] },
    { icon: Settings, title: "Managed Services", description: "24/7 support and infrastructure management", features: ["Monitoring", "DevOps", "Security", "SLA"] },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* FULL PARTICLES BACKGROUND */}
      <Particles hue={240} hoverIntensity={0.3} className="fixed inset-0 -z-10" />

      <Navigation />

      {/* HERO */}
      <section className="relative pt-32 pb-24 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Advanced Technology Solutions<br />for Modern Business
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-4xl mx-auto">
            Transform your business with cutting-edge data engineering, cloud services, AI/ML, and custom software development
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">Get Started</Button>
            <Button size="lg" variant="outline" className="text-lg px-8 backdrop-blur-md border-white/30">Explore Services</Button>
          </div>
        </div>
      </section>

      {/* TECHNICAL EXPERTISE */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 drop-shadow-2xl">
            Technical Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {technicalServices.map((service, i) => (
              <Card
                key={i}
                className="bg-white/10 backdrop-blur-md border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-500 group shadow-2xl hover:shadow-primary/20"
              >
                <CardContent className="p-8 text-white">
                  <service.icon className="w-16 h-16 mb-6 text-primary group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/80 mb-6">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((f, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {f}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
