
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Search, 
  MessageSquare, 
  PenTool, 
  MousePointer, 
  Mail, 
  Palette, 
  Award,
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  Globe,
  Shield,
  Zap,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  MapPin
} from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your search rankings with data-driven SEO strategies that deliver results.",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      icon: MessageSquare,
      title: "Social Media Management",
      description: "Engage your audience across all platforms with compelling social media campaigns.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description: "Craft compelling content that resonates with your audience and drives conversions.",
      color: "from-yellow-400 to-blue-500"
    },
    {
      icon: MousePointer,
      title: "PPC Advertising",
      description: "Maximize ROI with targeted pay-per-click campaigns across Google and social platforms.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Build lasting relationships with personalized email campaigns that convert.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Palette,
      title: "Web Design & Branding",
      description: "Create stunning digital experiences that reflect your brand's unique identity.",
      color: "from-blue-400 to-cyan-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      text: "DigitalPe transformed our online presence completely. Our leads increased by 300% in just 3 months!",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-Commerce Plus",
      text: "The most professional digital marketing team I've worked with. Their strategies are cutting-edge and results-driven.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Local Business Co.",
      text: "From local to national recognition - DigitalPe made it possible. Outstanding ROI on every campaign.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: TrendingUp, number: "250%", label: "Average ROI Increase" },
    { icon: Globe, number: "50+", label: "Countries Served" },
    { icon: Award, number: "100+", label: "Awards Won" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white cyber-grid">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold gradient-text">
                DigitalPe
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-yellow-400 transition-colors">Services</a>
              <a href="#about" className="hover:text-yellow-400 transition-colors">About</a>
              <a href="#testimonials" className="hover:text-yellow-400 transition-colors">Testimonials</a>
              <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
            </div>
            <Button className="bg-gradient-to-r from-yellow-400 to-blue-500 hover:from-yellow-500 hover:to-blue-600 text-black font-semibold">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Digital Marketing</span>
              <br />
              <span className="text-white">Reimagined for</span>
              <br />
              <span className="gradient-text">The Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge digital strategies that drive real results. 
              We're not just another agency – we're your growth partners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-blue-500 hover:from-yellow-500 hover:to-blue-600 text-black font-semibold text-lg px-8 py-6 animate-glow">
                Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-black" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Our Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed to elevate your brand and accelerate your growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="glow-card hover:scale-105 transition-all duration-300 group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg mb-6 group-hover:animate-float`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Why Choose DigitalPe?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're not just keeping up with digital trends – we're setting them. Our team of experts combines 
                creativity with data-driven insights to deliver campaigns that don't just look good, but perform exceptionally.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-full flex items-center justify-center">
                    <Shield className="h-4 w-4 text-black" />
                  </div>
                  <span className="text-lg">100% Transparent Reporting</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-full flex items-center justify-center">
                    <Zap className="h-4 w-4 text-black" />
                  </div>
                  <span className="text-lg">AI-Powered Campaign Optimization</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-black" />
                  </div>
                  <span className="text-lg">Dedicated Account Management</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-blue-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
                <div className="text-center">
                  <div className="text-6xl font-bold gradient-text mb-4">97%</div>
                  <div className="text-xl text-gray-300 mb-6">Client Retention Rate</div>
                  <p className="text-gray-400">
                    Our results speak for themselves. Join hundreds of businesses that trust us with their digital growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">What Our Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300">Real stories from real businesses we've helped transform</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glow-card animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-full flex items-center justify-center text-black font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-yellow-400/10 to-blue-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="gradient-text">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't let your competitors get ahead. Start your digital transformation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-blue-500 hover:from-yellow-500 hover:to-blue-600 text-black font-semibold text-lg px-12 py-6 animate-glow">
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-12 py-6">
              View Pricing Plans
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black/40 py-16 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-3xl font-bold gradient-text mb-4">DigitalPe</div>
              <p className="text-gray-300 mb-6 max-w-md">
                Transforming businesses through innovative digital marketing strategies. 
                Your success is our mission.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <Facebook className="h-5 w-5 text-black" />
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <Twitter className="h-5 w-5 text-black" />
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <Instagram className="h-5 w-5 text-black" />
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                  <Linkedin className="h-5 w-5 text-black" />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-yellow-400 transition-colors">SEO Optimization</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Social Media</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Content Creation</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">PPC Advertising</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition-colors">Email Marketing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Contact Info</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-yellow-400" />
                  <span className="text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-yellow-400" />
                  <span className="text-gray-300">hello@digitalpe.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-yellow-400" />
                  <span className="text-gray-300">123 Digital Ave, Tech City</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DigitalPe. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
