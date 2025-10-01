import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      // Store in localStorage as backup
      const userData = {
        email,
        role: "pet_owner",
        timestamp: new Date().toISOString(),
      };

      const users = JSON.parse(localStorage.getItem("fetchyUsers") || "[]");
      users.push(userData);
      localStorage.setItem("fetchyUsers", JSON.stringify(users));

      triggerConfetti();
      toast.success("🎉 Welcome! We'll notify you soon.");
      setEmail("");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setTimeout(() => setIsSubmitting(false), 1000);
    }
  };

  return (
    <section id="join" className="py-20 bg-card">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-primary to-[hsl(var(--primary-dark))] rounded-[30px] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-[var(--shadow-medium)]">
          <div className="absolute top-0 right-0 text-9xl opacity-10 select-none pointer-events-none">
            🐕
          </div>

          <div className="relative z-10 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-4">
              Let's meet!
            </h2>
            <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Be the first to know when we launch — sign up with your email today for exclusive updates, early access perks, and tips to keep your pet purring with joy!
            </p>

            <div className="max-w-md mx-auto">
              <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-[var(--shadow-medium)]">
                <h3 className="text-2xl font-bold text-[hsl(var(--dark))] mb-2">
                  🐕 For Pet Parents
                </h3>
                <p className="text-muted-foreground mb-6">
                  Get exclusive early access to trusted pet services
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="rounded-full border-2 px-6 py-6 text-base"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[hsl(var(--dark))] text-white hover:bg-primary hover:text-primary-foreground font-semibold py-6 rounded-full transition-all hover:-translate-y-1"
                  >
                    {isSubmitting ? "Submitting..." : "Join as Pet Parent"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
