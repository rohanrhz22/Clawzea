import "@copilotkit/react-ui/styles.css";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import { useCopilotReadable } from "@copilotkit/react-core";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const FetchyContent = () => {
  // Provide comprehensive app information to Copilot
  useCopilotReadable({
    description: "Complete information about Fetchy - the all-in-one pet care platform",
    value: {
      appName: "Fetchy",
      tagline: "Your pet, our priority",
      mission: "Connecting pet parents with trusted professionals for grooming, walking, boarding, training, and veterinary care.",
      launchStatus: "Coming soon to Mumbai and major cities across India",
      coverage: "50+ cities planned",
      stats: {
        verifiedProviders: "500+",
        happyPetParents: "1000+",
        citiesCovered: "50+",
        support: "24/7 available"
      }
    }
  });

  // Provide detailed services information
  useCopilotReadable({
    description: "All services offered by Fetchy with detailed descriptions",
    value: {
      services: [
        {
          name: "All-in-One Super App",
          icon: "📱",
          category: "Platform",
          description: "Everything your pet needs in one place: grooming, vet care, walking, sitting, training, and shopping.",
          benefits: [
            "Centralized pet care management",
            "Easy access to all services",
            "Integrated shopping experience",
            "One app for all pet needs"
          ]
        },
        {
          name: "Digital Health Passport",
          icon: "📋",
          category: "Health Management",
          description: "Store vaccines, prescriptions, lab results, and share instantly with vets.",
          benefits: [
            "Secure storage of medical records",
            "Easy sharing with veterinarians",
            "Vaccine tracking and reminders",
            "Prescription history management"
          ]
        },
        {
          name: "Vet Care Anytime",
          icon: "🏥",
          category: "Veterinary Services",
          description: "Online consultations, offline bookings, and quick prescription refills.",
          benefits: [
            "Virtual vet consultations",
            "Schedule in-person appointments",
            "Quick prescription renewals",
            "Expert veterinary advice"
          ]
        },
        {
          name: "Grooming Made Easy",
          icon: "✂️",
          category: "Grooming",
          description: "Compare stations, check prices, and book grooming in seconds.",
          benefits: [
            "Compare multiple grooming stations",
            "Transparent pricing",
            "Fast booking process",
            "Professional groomers only"
          ]
        },
        {
          name: "Boarding & Daycare",
          icon: "🏠",
          category: "Pet Care",
          description: "Find safe, trusted spaces for your pet when you're away.",
          benefits: [
            "Verified and safe facilities",
            "Flexible booking options",
            "Peace of mind while traveling",
            "24/7 pet monitoring available"
          ]
        },
        {
          name: "Walking & Sitting",
          icon: "🚶",
          category: "Daily Care",
          description: "Book trusted walkers and sitters nearby, on-demand.",
          benefits: [
            "Background-checked walkers",
            "On-demand availability",
            "GPS tracking during walks",
            "Flexible scheduling"
          ]
        }
      ]
    }
  });

  // Provide why choose us information
  useCopilotReadable({
    description: "Key features and benefits of choosing Fetchy",
    value: {
      features: [
        {
          name: "Trusted Professionals",
          icon: "🛡️",
          description: "All service providers are verified and background-checked for your peace of mind.",
          details: "We conduct thorough verification and background checks on all our service providers to ensure your pet's safety."
        },
        {
          name: "Best Prices",
          icon: "💰",
          description: "Compare prices from multiple providers and choose what fits your budget.",
          details: "Our platform allows you to compare prices across different service providers, ensuring you get the best value for your money."
        },
        {
          name: "Easy Booking",
          icon: "📱",
          description: "Book services in just a few taps with our user-friendly mobile app.",
          details: "Our intuitive interface makes booking any pet service quick and hassle-free, saving you time and effort."
        },
        {
          name: "Top Rated",
          icon: "⭐",
          description: "Join thousands of satisfied pet parents who trust us with their furry friends.",
          details: "With a 4.9/5 rating and over 1000 happy pet parents, we're the trusted choice for pet care."
        }
      ],
      rating: "4.9/5",
      trustIndicators: [
        "1000+ trusted by pet owners",
        "Verified service providers",
        "Background checked professionals",
        "24/7 customer support"
      ]
    }
  });

  // Provide instructions for the Copilot
  useCopilotReadable({
    description: "Instructions for the Fetchy AI Assistant on how to help users",
    value: {
      role: "You are the Fetchy AI Assistant, an expert on all pet care services offered by Fetchy.",
      guidelines: [
        "Be friendly, helpful, and enthusiastic about pet care",
        "When users ask about services, provide detailed explanations with benefits",
        "Help users understand how Fetchy can solve their pet care needs",
        "Encourage users to sign up for early access",
        "If asked about pricing, explain that users can compare prices across providers",
        "Always emphasize safety, trust, and convenience",
        "Use pet-related emojis to keep conversations warm and friendly 🐾"
      ],
      commonQuestions: [
        "What services does Fetchy offer?",
        "How does the Digital Health Passport work?",
        "Can I book a vet appointment?",
        "How much do grooming services cost?",
        "Are the service providers verified?",
        "When will Fetchy launch?",
        "How do I sign up for early access?"
      ]
    }
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <StatsBar />
      <Services />
      <WhyChooseUs />
      <CTASection />
      <Footer />
      
      <CopilotPopup
        labels={{
          title: "Fetchy Assistant 🐾",
          initial: "Hi! I'm your Fetchy assistant. I can help you learn about all our pet care services, explain how they work, and answer any questions you have about keeping your furry friend happy and healthy! What would you like to know?",
        }}
      />
    </div>
  );
};

const Index = () => {
  return (
    <CopilotKit publicApiKey="ck_pub_f7153a4d79abdae0665e6a0ae94a2e58">
      <FetchyContent />
    </CopilotKit>
  );
};

export default Index;
