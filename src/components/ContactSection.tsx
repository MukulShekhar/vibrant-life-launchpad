import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-light/20 rounded-full px-4 py-2 mb-4">
            <Heart className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Contact Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our services or need to schedule an appointment? 
            We're here to help and look forward to hearing from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Contact Information
            </h3>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="border-border hover:shadow-soft transition-shadow">
                <CardContent className="flex items-center p-6">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Emergency: 911</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-soft transition-shadow">
                <CardContent className="flex items-center p-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">info@healthcare.com</p>
                    <p className="text-sm text-muted-foreground">We reply within 24 hours</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-soft transition-shadow">
                <CardContent className="flex items-center p-6">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Address</h4>
                    <p className="text-muted-foreground">123 Healthcare Ave</p>
                    <p className="text-muted-foreground">Medical City, MC 12345</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-soft transition-shadow">
                <CardContent className="flex items-center p-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Hours</h4>
                    <p className="text-muted-foreground">Mon-Fri: 8:00 AM - 8:00 PM</p>
                    <p className="text-muted-foreground">Weekends: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm text-health-green">Emergency: 24/7</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-medium border-border">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name
                  </label>
                  <Input placeholder="John" className="bg-background" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input placeholder="Doe" className="bg-background" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <Input type="email" placeholder="john@example.com" className="bg-background" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Phone
                </label>
                <Input type="tel" placeholder="+1 (555) 123-4567" className="bg-background" />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell us how we can help you..." 
                  className="bg-background min-h-[120px]"
                />
              </div>
              
              <Button variant="default" size="lg" className="w-full">
                Send Message
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                For medical emergencies, please call 911 or visit our emergency department.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;