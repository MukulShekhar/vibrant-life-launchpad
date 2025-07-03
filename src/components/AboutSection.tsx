import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users, Clock } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-health-green-light/20 rounded-full px-4 py-2 mb-6">
              <Heart className="h-4 w-4 text-health-green" />
              <span className="text-sm font-medium text-health-green">About Us</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Leading Healthcare Provider Since 1985
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              For over three decades, we have been committed to providing exceptional healthcare services 
              to our community. Our team of experienced medical professionals combines cutting-edge 
              technology with compassionate care to ensure the best possible outcomes for our patients.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe that quality healthcare should be accessible to everyone. That's why we offer 
              comprehensive services under one roof, from preventive care to specialized treatments, 
              all delivered with the highest standards of medical excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg">
                Learn More About Us
              </Button>
              <Button variant="outline" size="lg">
                Meet Our Team
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-white border-border shadow-soft">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">35+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </CardContent>
            </Card>

            <Card className="bg-white border-border shadow-soft">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">150+</div>
                <div className="text-sm text-muted-foreground">Medical Staff</div>
              </CardContent>
            </Card>

            <Card className="bg-white border-border shadow-soft">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">100K+</div>
                <div className="text-sm text-muted-foreground">Lives Touched</div>
              </CardContent>
            </Card>

            <Card className="bg-white border-border shadow-soft">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Care Available</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 bg-gradient-card rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Our Mission
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            To provide compassionate, high-quality healthcare services that promote wellness, 
            prevent disease, and restore health. We are committed to treating each patient with 
            dignity, respect, and the personalized attention they deserve, while continuously 
            advancing our medical knowledge and technology to serve our community better.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;