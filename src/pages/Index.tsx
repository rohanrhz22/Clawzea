import "@copilotkit/react-ui/styles.css";
import { CopilotKit, useCopilotAction } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import { useCopilotReadable } from "@copilotkit/react-core";
import { useState, useEffect, FormEvent } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const ClawzeaContent = () => {
  const [knowledge, setKnowledge] = useState([]);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetch('/kb.json')
      .then(response => response.json())
      .then(data => setKnowledge(data));
  }, []);

  useCopilotReadable({
    description: "The application's knowledge base",
    value: JSON.stringify(knowledge),
  });

  const triggerConfetti = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const colors = ["#FFD93D", "#6BCF7D", "#FF6B6B", "#2B2D42", "#FFBF00"];

    const frame = () => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) return;

      const particleCount = 3;
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement("div");
        particle.style.position = "fixed";
        particle.style.left = Math.random() * window.innerWidth + "px";
        particle.style.top = "-20px";
        particle.style.width = "10px";
        particle.style.height = "10px";
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = "50%";
        particle.style.pointerEvents = "none";
        particle.style.zIndex = "9999";
        particle.style.animation = "confettiFall 3s linear forwards";
        document.body.appendChild(particle);

        setTimeout(() => particle.remove(), 3000);
      }

      requestAnimationFrame(frame);
    };

    frame();
  };

  const signUp = async (email: string) => {
    setIsSubmitting(true);

    // IMPORTANT: Replace this with your actual Google Form URL and entry ID
    const GOOGLE_FORM_URL =
      "https://docs.google.com/forms/d/e/1FAIpQLSctyC2L1co7pCAMjJ1uOwbKQ33_x4-HnsQKyXzBZiPaAqdGgw/formResponse";
    const EMAIL_ENTRY_ID = "entry.1884265043";

    const formData = new FormData();
    formData.append(EMAIL_ENTRY_ID, email);

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      triggerConfetti();
      toast.success(`🎉 Welcome, ${email}! We'll notify you soon.`);
      setEmail(email);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setTimeout(() => setIsSubmitting(false), 1000);
    }
  };

  useCopilotAction({
    name: "signUpForEarlyAccess",
    description: "Signs up a user for early access to Clawzea.",
    parameters: [
      {
        name: "email",
        type: "string",
        description: "The user's email address.",
        required: true,
      },
    ],
    handler: async ({ email }) => {
      await signUp(email);
    },
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    await signUp(email);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      {/* <StatsBar /> */}
      <AboutUs />
      <Services />
      <CTASection
        email={email}
        setEmail={setEmail}
        isSubmitting={isSubmitting}
        handleSubmit={handleSubmit}
      />
      <Footer />
      
      <CopilotPopup
        labels={{
          title: "Clawzea Assistant 🐾",
          initial: "Hi! I'm your Clawzea assistant. I can help you learn about all our pet care services, explain how they work, and answer any questions you have about keeping your furry friend happy and healthy! What would you like to know?",
        }}
      />
    </div>
  );
};

const Index = () => {
  return (
    <CopilotKit publicApiKey="ck_pub_f7153a4d79abdae0665e6a0ae94a2e58">
      <ClawzeaContent />
    </CopilotKit>
  );
};

export default Index;