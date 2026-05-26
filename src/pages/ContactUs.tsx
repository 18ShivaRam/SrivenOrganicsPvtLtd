import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const subject = encodeURIComponent(formData.subject || 'Contact Form Submission');
      const fullName = `${formData.firstName} ${formData.lastName}`.trim();
      const body = encodeURIComponent(
        `Dear Sir/Madam,\n\n` +
        `I hope you are doing well.\n\n` +
        `My name is ${fullName}, and I am reaching out to ${formData.subject ? `regarding: ${formData.subject}` : 'inquire about your products and services'}. ${formData.message ? `\n\n${formData.message}\n` : ''}\n\n` +
        `Please feel free to contact me using the details below for further discussion.\n\n` +
        `Name: ${fullName}\n` +
        `Email: ${formData.email}\n` +
        (formData.phone ? `Phone: ${formData.phone}\n` : '') +
        `\nThank you for your time and assistance. I look forward to your response.\n\n` +
        `Best regards,\n` +
        `${fullName}`
      );
      
      const mailtoLink = `mailto:srivenorganicspvtltd@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      setSubmitMessage('Opening your email client... Please send the email to complete your inquiry.');
      
    } catch (error) {
      setSubmitMessage('There was an error processing your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppSubmit = () => {
    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const message = encodeURIComponent(
      `*Contact Form Submission*\n\n` +
      `Dear Sir/Madam,\n\n` +
      `I hope you are doing well.\n\n` +
      `My name is ${fullName}, and I am reaching out to ${formData.subject ? `regarding: ${formData.subject}` : 'inquire about your products and services'}. ${formData.message ? `\n\n${formData.message}\n` : ''}\n\n` +
      `Please feel free to contact me using the details below for further discussion.\n\n` +
      `*Contact Details:*\n` +
      `• Name: ${fullName}\n` +
      `• Email: ${formData.email}\n` +
      (formData.phone ? `• Phone: ${formData.phone}\n` : '') +
      `\nThank you for your time and assistance. I look forward to your response.\n\n` +
      `Best regards,\n` +
      `${fullName}`
    );
    
    const whatsappLink = `https://wa.me/919392785600?text=${message}`;
    window.open(whatsappLink, '_blank');
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-accent/20">
      <Header />
      
      <main className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get in touch with our team for any inquiries about our products and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleEmailSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Your first name" 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Your last name" 
                        required 
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com" 
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input 
                      id="phone" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your phone number" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject of your inquiry" 
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your message..." 
                      rows={5} 
                      required 
                    />
                  </div>
                  {submitMessage && (
                    <div className="p-3 bg-primary/10 border border-primary/20 rounded-md">
                      <p className="text-sm text-primary">{submitMessage}</p>
                    </div>
                  )}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      className="flex-1 bg-primary hover:bg-primary-dark"
                      disabled={isSubmitting}
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      {isSubmitting ? 'Processing...' : 'Send via Email'}
                    </Button>
                    <Button 
                      type="button"
                      className="flex-1 bg-green-600 hover:bg-green-700"
                      onClick={handleWhatsAppSubmit}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Send via WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Head Office</h3>
                      <a
                        href="https://www.google.com/maps/dir//Flat+no+502,+Sriven+Organics+Pvt+Ltd,+Classic+Arcade,+Plot+no.492,+Road+No.+3%2F2,+Mathrusree+Nagar,+Hafeezpet,+Hyderabad,+Telangana+500049/@17.4948645,78.3625025,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bcb93dda9d4a76f:0xc9a6d4ed85d6bf05!2m2!1d78.3672661!2d17.4948645?entry=ttu&g_ep=EgoyMDI1MDkyNC4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Sriven Organics Pvt Ltd<br />
                        Flat no 502, Classic Arcade, Plot no.492, Road No. 3/2, Mathrusree Nagar, Hafeezpet, Hyderabad, Telangana 500049
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                      <p className="text-muted-foreground">
                        +919392785600<br />
                        
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Email</h3>
                      <p className="text-muted-foreground">
                        srivenorganicspvtltd@gmail.com<br />
                        {/* support@srivenorganics.com */}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactUs;


