import { Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "webionsolutions@gmail.com",
      link: "mailto:webionsolutions@gmail.com"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Fri: 9AM - 6PM",
    },
    {
      icon: MapPin,
      title: "Global Presence",
      content: "Serving clients worldwide",
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
              Get in <span className="text-primary text-glow">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Let's discuss how we can help transform your business with technology
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h2 className="font-heading text-3xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      required 
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      required 
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <Input 
                      id="company" 
                      placeholder="Your company name" 
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project..." 
                      rows={5}
                      required 
                      className="bg-background border-border"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full tech-glow font-heading text-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Have a question or want to work together? We'd love to hear from you. 
                  Reach out using the form or contact us directly.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={index}
                    className="bg-card border-border hover:border-primary transition-all duration-300 hover:tech-glow animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <info.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-heading text-lg font-semibold mb-1">
                            {info.title}
                          </h3>
                          {info.link ? (
                            <a 
                              href={info.link}
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.content}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-secondary/50 border-border">
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-3">
                    Looking for a Specific Service?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Visit our services page to learn more about our technical expertise 
                    and domain-specific solutions.
                  </p>
                  <Button variant="outline" className="font-heading" asChild>
                    <a href="/services">View Services</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
