import ContactInfoCard from "../features/contactus/components/ContactInfoCard";
import ContactForm from "../features/contactus/components/ContactForm";
import { Card } from "../components/ui/card";

const ContactUsPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="/schoolfront.jpg"
          alt="School"
          className="w-full h-72 object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Contact Us</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <ContactInfoCard />
        <Card className="mt-10 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-4">General Enquiry</h2>
          <ContactForm />
        </Card>
      </div>
    </div>
  );
};

export default ContactUsPage;
