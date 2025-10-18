import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useCopilotAction } from "@copilotkit/react-core";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSePg-iM2spZiQpGw7wZpLNnhsVXyKfHCcBjLLuhg0M085HAhg/formResponse";
    const EMAIL_ENTRY_ID = 'entry.1774101018';

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
    <section id="join" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden text-center">
          <div className="absolute top-5 right-0 text-9xl opacity-10 select-none pointer-events-none transform -rotate-12">
            happy pets!
          </div>
          <div className="relative z-10">
            <h2 className="font-reddit text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4">
              Happiness starts here
            </h2>
            <p className="font-reddit text-lg sm:text-xl text-gray-800/90 mb-8 max-w-3xl mx-auto">
              Be the first to know when we launch and the first to enjoy everything Clawzea offers. no spam, just love.
            </p>

            <div className="font-reddit max-w-md mx-auto bg-white rounded-2xl p-6 shadow-lg">
              <p className="text-gray-600 mb-4">Get exclusive early access to trusted pet services</p>
              <form onSubmit={handleSubmit} className="flex items-center">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="rounded-full border-2 px-6 py-3 text-base w-full mr-2"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gray-800 text-white hover:bg-primary hover:text-gray-800 font-semibold py-3 px-6 rounded-full transition-all"
                >
                  {isSubmitting ? "..." : "I'm in"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Proudly Canadian Strip */}
      <div className="w-full bg-white-200 pt-20">
        <div className="max-w-4xl mx-auto flex justify-center items-center">
          <img src="/img/proudly_canadian.jpg" alt="Canada Flag" className="w-20 h-20 object-contain mr-2" />
        </div>
      </div>
    </section>
  );
};

export default CTASection;