import { Button } from "@/components/ui/button";
import { Heart, Calendar } from "lucide-react";
import heroImage from "@/assets/healthcare-hero.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-gradient-hero min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2 mb-6">
              <Heart className="h-4 w-4" />
              <span className="text-sm font-medium">Trusted Healthcare</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Health is Our 
              <span className="block text-health-green-light">Priority</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-xl">
              Providing compassionate, comprehensive healthcare services with cutting-edge technology and experienced professionals dedicated to your wellbeing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                <Calendar className="h-5 w-5" />
                Book Appointment
              </Button>
              <Button variant="ghost" size="lg" className="text-white hover:bg-white/10 text-lg px-8 py-4">
                Learn More
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">50K+</div>
                <div className="text-white/80 text-sm">Patients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">100+</div>
                <div className="text-white/80 text-sm">Expert Doctors</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">24/7</div>
                <div className="text-white/80 text-sm">Emergency Care</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="hidden lg:block">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Professional healthcare team" 
                className="rounded-2xl shadow-large w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-health-green/20 rounded-full blur-lg" />
    </section>
  );
};

export default HeroSection;