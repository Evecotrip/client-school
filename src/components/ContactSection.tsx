import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { postQuery } from "@/api/api";
const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      await postQuery(form);
      setSuccess(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            First Name
          </label>
          <Input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Last Name
          </label>
          <Input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Email Address
        </label>
        <Input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Phone Number
        </label>
        <Input
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Subject
        </label>
        <Input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="What is this regarding?"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Message
        </label>
        <Textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us more about your inquiry..."
          className="min-h-[120px]"
          required
        />
      </div>
      {success && (
        <div className="text-green-600 text-center font-medium">
          Message sent successfully!
        </div>
      )}
      {error && (
        <div className="text-red-600 text-center font-medium">{error}</div>
      )}
      <Button className="btn-hero w-full" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details:
        "Road No. 1, Kanaka Durga Colony, Karwan, Hyderabad, Telangana 500006",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "095812 19373",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@jjhighschool.com\ncontact@jjhighschool.com",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon - Sat: 9:00 AM - 8:00 PM",
    },
  ];

  return (
    <section id="reach-us" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Get In{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our programs or admission process? We're here
            to help! Reach out to us and let's start a conversation about your
            child's educational journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-heading font-bold text-foreground mb-8">
              Contact Information
            </h3>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-educational">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <info.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-heading font-semibold text-foreground mb-3">
                      {info.title}
                    </h4>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">
                      {info.details}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Google Maps */}
            <div className="bg-gradient-subtle rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.700200181559!2d78.42909647591034!3d17.37815330306961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97f73f82120b%3A0x43aa8bbebc517d8e!2sJJ%20High%20School(Al-%20IMRAN)!5e0!3m2!1sen!2sin!4v1755619391922!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="JJ High School Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-3xl font-heading font-bold text-foreground mb-8">
              Send us a Message
            </h3>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
