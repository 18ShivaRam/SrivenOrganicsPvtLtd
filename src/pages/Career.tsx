import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Briefcase, Mail, MessageCircle, FileText, User, Phone } from 'lucide-react';
import { useState } from 'react';

const Career = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
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
      const subject = encodeURIComponent('Job Application - ' + (formData.position || 'General'));
      const body = encodeURIComponent(
        `Dear Hiring Manager,\n\n` +
        `I hope you are doing well.\n\n` +
        `I am writing to express my interest in the ${formData.position || 'available'} position at your organization. ${formData.experience ? `With ${formData.experience} of experience, I have developed strong skills relevant to this role.` : 'I am excited about this opportunity and eager to contribute my skills.'}\n\n` +
        `I am confident that my experience and enthusiasm make me a suitable candidate for this role. I am eager to contribute to your team and help drive business growth.\n\n` +
        `Please find my details below for your reference:\n\n` +
        `Full Name: ${formData.fullName}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n` +
        `Position Applied: ${formData.position}\n` +
        (formData.experience ? `Experience: ${formData.experience}\n` : '') +
        (formData.message ? `\nAdditional Information:\n${formData.message}\n` : '') +
        `\nI would welcome the opportunity to discuss how my skills and experience align with your requirements. Thank you for considering my application.\n\n` +
        `Looking forward to your response.\n\n` +
        `Best regards,\n` +
        `${formData.fullName}`
      );
      
      const mailtoLink = `mailto:srivenorganicspvtltd@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      setSubmitMessage('Opening your email client... Please send the email to complete your application.');
      
    } catch (error) {
      setSubmitMessage('There was an error processing your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppSubmit = () => {
    const message = encodeURIComponent(
      `*Job Application*\n\n` +
      `Dear Hiring Manager,\n\n` +
      `I hope you are doing well.\n\n` +
      `I am writing to express my interest in the ${formData.position || 'available'} position at your organization. ${formData.experience ? `With ${formData.experience} of experience, I have developed strong skills relevant to this role.` : 'I am excited about this opportunity and eager to contribute my skills.'}\n\n` +
      `I am confident that my experience and enthusiasm make me a suitable candidate for this role. I am eager to contribute to your team and help drive business growth.\n\n` +
      `*Application Details:*\n` +
      `• Full Name: ${formData.fullName}\n` +
      `• Email: ${formData.email}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Position Applied: ${formData.position}\n` +
      (formData.experience ? `• Experience: ${formData.experience}\n` : '') +
      (formData.message ? `\n*Additional Information:*\n${formData.message}\n` : '') +
      `\nI would welcome the opportunity to discuss how my skills and experience align with your requirements. Thank you for considering my application.\n\n` +
      `Looking forward to your response.\n\n` +
      `Best regards,\n` +
      `${formData.fullName}`
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
              Join Our Team
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore exciting career opportunities at Sriven Organics and grow with us
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Application Form */}
            <Card>
              <CardHeader>
                <CardTitle>Apply for a Position</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleEmailSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input 
                      id="fullName" 
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Your full name" 
                      required 
                    />
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
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="position">Position Applying For</Label>
                    <Input 
                      id="position" 
                      value={formData.position}
                      onChange={handleInputChange}
                      placeholder="e.g., Sales Executive, Marketing Manager" 
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input 
                      id="experience" 
                      value={formData.experience}
                      onChange={handleInputChange}
                      placeholder="e.g., 2 years, 5+ years" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Additional Information / Cover Letter</Label>
                    <Textarea 
                      id="message" 
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about yourself, your skills, and why you'd like to join our team..." 
                      rows={5} 
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
                      {isSubmitting ? 'Processing...' : 'Apply via Email'}
                    </Button>
                    <Button 
                      type="button"
                      className="flex-1 bg-green-600 hover:bg-green-700"
                      onClick={handleWhatsAppSubmit}
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Apply via WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
            
            {/* Career Information */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Why Work With Us?</h3>
                      <p className="text-muted-foreground">
                        At Sriven Organics, we believe in fostering a culture of innovation, growth, and collaboration. Join us to make a difference in the agricultural industry.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Current Openings</h3>
                      <p className="text-muted-foreground">
                        We are always looking for talented individuals. Even if you don't see a specific opening listed, feel free to send us your resume!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">How to Apply</h3>
                      <p className="text-muted-foreground">
                        Fill out the application form and send it to us via email or WhatsApp. Our team will review your application and get back to you soon.
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
                      <h3 className="font-semibold text-foreground mb-2">Contact HR</h3>
                      <p className="text-muted-foreground">
                        Email: srivenorganicspvtltd@gmail.com<br />
                        Phone: +91 9392785600
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

export default Career;