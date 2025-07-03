import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Activity, Thermometer, Pill, Calendar, Ambulance } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Cardiology",
    description: "Comprehensive heart care with advanced diagnostic tools and treatment options.",
    features: ["ECG & Echo", "Heart Surgery", "Preventive Care"]
  },
  {
    icon: Activity,
    title: "Emergency Care",
    description: "24/7 emergency medical services with rapid response and expert care.",
    features: ["Trauma Center", "Critical Care", "Ambulance Service"]
  },
  {
    icon: Thermometer,
    title: "General Medicine",
    description: "Primary healthcare services for routine check-ups and preventive care.",
    features: ["Health Screening", "Vaccinations", "Chronic Care"]
  },
  {
    icon: Pill,
    title: "Pharmacy",
    description: "On-site pharmacy with prescription medications and health supplements.",
    features: ["Prescription Filling", "Consultation", "Home Delivery"]
  },
  {
    icon: Calendar,
    title: "Preventive Care",
    description: "Comprehensive wellness programs focused on prevention and early detection.",
    features: ["Health Checkups", "Screening Tests", "Wellness Plans"]
  },
  {
    icon: Ambulance,
    title: "Specialist Care",
    description: "Expert specialists across multiple medical disciplines and subspecialties.",
    features: ["Neurology", "Orthopedics", "Dermatology"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-light/20 rounded-full px-4 py-2 mb-4">
            <Heart className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive Healthcare Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From routine check-ups to specialized treatments, we offer a full range of medical services 
            with state-of-the-art technology and compassionate care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="bg-card hover:shadow-medium transition-all duration-300 group border-border">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-health-green rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-card rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Need Immediate Medical Attention?
          </h3>
          <p className="text-muted-foreground mb-6">
            Our emergency department is open 24/7 with experienced medical professionals ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg">
              Book Emergency Appointment
            </Button>
            <Button variant="health" size="lg">
              Call Emergency: 911
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;