import "@copilotkit/react-ui/styles.css";
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <CopilotKit publicApiKey="ck_pub_f7153a4d79abdae0665e6a0ae94a2e58">
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
            initial: "Hi! I'm your Fetchy assistant. How can I help you with pet care today?",
          }}
        />
      </div>
    </CopilotKit>
  );
};

export default Index;
