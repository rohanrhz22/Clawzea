import React, { useEffect, useState, FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { CopilotKit, useCopilotAction } from "@copilotkit/react-core";
import { CopilotPopup } from "@copilotkit/react-ui";
import { useCopilotReadable } from "@copilotkit/react-core";

const ServiceProvidersContent = () => {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [knowledge, setKnowledge] = useState([]);

    useEffect(() => {
        fetch('/kb-sp.json')
            .then(response => response.json())
            .then(data => setKnowledge(data));
    }, []);

    useCopilotReadable({
        description: "The service provider knowledge base",
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

        // Google Form submission endpoint
        const GOOGLE_FORM_URL =
            "https://docs.google.com/forms/d/e/1FAIpQLSdR6wRkgy9v5NMtxkbPBAXscKJocJtcR67xlJzY3OVAlAPogQ/formResponse";
        const EMAIL_ENTRY_ID = 'entry.1774101018';

        const formData = new FormData();
        formData.append(EMAIL_ENTRY_ID, email);

        try {
            // Using no-cors mode - we won't get a response, but the form will submit
            await fetch(GOOGLE_FORM_URL, {
                method: "POST",
                mode: "no-cors",
                body: formData,
            });

            // With no-cors, we assume success if no error is thrown
            toast.success(`🎉 Welcome aboard, ${email}! We'll be in touch soon.`);
            setEmail("");  // Clear the input field
            triggerConfetti();
        } catch (error) {
            console.error("Form submission error:", error);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setTimeout(() => setIsSubmitting(false), 1000);
        }
    };

    useCopilotAction({
        name: "signUpAsServiceProvider",
        description: "Signs up a user as a service provider for Clawzea.",
        parameters: [
            {
                name: "email",
                type: "string",
                description: "The service provider's email address.",
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


    useEffect(() => {
        document.body.classList.add("font-reddit-sans");

        return () => {
            document.body.classList.remove("font-reddit-sans");
        };
    }, []);

    return (
        <div className="font-reddit antialiased bg-light text-text leading-relaxed overflow-x-hidden">
            {/* Navigation */}
            <nav className="bg-white shadow-md fixed w-full top-0 z-50 animate-slideDown">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
                    <div className="flex items-center gap-2.5 text-3xl font-extrabold text-dark">
                        <img
                            src="/img/logobasenobg.png"        // replace with your logo file path
                            alt="Clawzea Logo"
                            className="w-10 h-10 object-contain rounded-xl" // adjust size & styling as needed
                        />
                        <span className="font-baahr text-3xl font-extrabold text-gray-800 tracking-wide ml-1.5">Clawzea</span>
                    </div>
                    <ul className="hidden md:flex items-center gap-8 list-none">
                        <li><a href="#aboutus" className="text-text font-medium transition-colors duration-300 hover:text-primary-dark">About Us</a></li>
                        <li><a href="#services" className="text-text font-medium transition-colors duration-300 hover:text-primary-dark">Services</a></li>
                        <li><a href="#join" className="bg-primary text-dark py-2.5 px-6 rounded-full font-semibold transition-all duration-300 hover:bg-primary-dark hover:-translate-y-0.5">Join Us</a></li>
                    </ul>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="mt-16 pt-20 px-8 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="animate-fadeInLeft z-10">
                        <h1 className="font-reddit-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800  leading-tight mb-6">Grow Your Pet Care Business with<span className="text-primary-dark relative"> Clawzea</span></h1>
                        <p className="text-xl text-text mb-8 opacity-90">Connect with pet parents actively searching for your services. No upfront costs, secure payments, and simple booking management.</p>
                        <div className="flex gap-4 flex-wrap">
                            <a href="#join" className="bg-primary text-dark py-3.5 px-8 rounded-full font-semibold inline-block transition-all duration-300 border-2 border-primary hover:bg-primary-dark hover:-translate-y-1 hover:shadow-lg">Join Us</a>
                        </div>
                    </div>
                    <div className="relative animate-fadeInRight z-0">
            <img
              src="/img/yellow-heart.png"
              alt="Background heart"
              className="absolute top-1/2 left-1/2 w-[700px] max-w-none h-auto -translate-x-1/2 -translate-y-1/2 z-0 rotate-[15deg]"
            />
                        <img src="/img/service-providers/happy_pets_and_parents.png" alt="Happy dog with owner" className="relative block z-10 w-full h-auto" />
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="py-20 px-8 bg-white" id="aboutus">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Your Business Deserves to Thrive</h2>
                    <p className="text-lg text-text opacity-80">At Clawzea, we understand that running a pet care business is more than just a job,it's your passion. You pour your heart into caring for every furry client, but finding new customers and managing bookings shouldn't be a constant struggle.<br /><br />

                    That's why we built Clawzea. To connect dedicated service providers like you with pet parents actively searching for trusted, quality care. No expensive ads, no missed calls, no complicated systems,just a simple platform that helps you grow.<br /><br />

                    Whether you're a groomer, vet, dog walker, pet sitter, or run a boarding facility, Clawzea gives you the tools to reach more clients, manage bookings effortlessly, and get paid securely. all while you focus on what you do best: caring for pets.

                    <br /><br />Join a community where your expertise is valued, your business grows, and pet parents can finally find the quality care their furry family members deserve.</p>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 px-8 bg-white" id="services">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-5xl font-extrabold text-gray-800 mb-4">Why Partner with Clawzea?</h2>
                    <p className="text-lg text-text opacity-80">Everything you need to grow your pet care business, with zero upfront costs and maximum support.</p>
                </div>
                <div className="max-w-7xl mx-auto mt-16 flex flex-col md:flex-row justify-center items-center gap-8">
                    <div className="flex flex-col gap-12 flex-1 md:items-end items-center">
                        <div className="flex items-center gap-6 max-w-sm md:text-right text-center flex-col-reverse md:flex-row">
                            <div className="mr-0 md:mr-4">
                                <h3 className="text-lg font-semibold text-dark mb-2">Free Promotion at Launch</h3>
                                <p className="text-sm text-text opacity-80">Get discovered by new clients without paying for expensive ads. We bring pet parents to you.</p>
                            </div>
                            <div className="bg-primary rounded-full flex-shrink-0">
                                <img src="/img/service-providers/promo_offers.png" alt="Service Icon" className="w-44 h-44" />
                            </div>
                        </div>
                        <div className="flex items-center gap-6 max-w-sm md:text-right text-center flex-col-reverse md:flex-row">
                            <div className="mr-0 md:mr-4">
                                <h3 className="text-lg font-semibold text-dark mb-2">New Client Flow</h3>
                                <p className="text-sm text-text opacity-80">Reach Ottawa pet parents actively searching for your services. Quality leads, not cold calls.</p>
                            </div>
                            <div className="bg-primary rounded-full flex-shrink-0">
                                <img src="/img/service-providers/clients_new.png" alt="Service Icon" className="w-44 h-44" />
                            </div>
                        </div>
                        <div className="flex items-center gap-6 max-w-sm md:text-right text-center flex-col-reverse md:flex-row">
                            <div className="mr-0 md:mr-4">
                                <h3 className="text-lg font-semibold text-dark mb-2">Simple Booking Management</h3>
                                <p className="text-sm text-text opacity-80">Reduce missed calls and last-minute cancellations with easy-to-use scheduling tools.</p>
                            </div>
                            <div className="bg-primary rounded-full flex-shrink-0">
                                <img src="/img/service-providers/booking_management.png" alt="Service Icon" className="w-44 h-44" />
                            </div>
                        </div>
                    </div>
                    <div className="flex-[1.5] text-center order-first md:order-none mb-12 md:mb-0">
                        <img src="/img/service-providers/pets_care_dogsncats.png" alt="Happy dog with owner" className="max-w-full rounded-3xl" />
                    </div>
                    <div className="flex flex-col gap-12 flex-1 md:items-start items-center">
                        <div className="flex items-center gap-6 max-w-sm text-center md:text-left flex-col md:flex-row">
                            <div className="bg-primary rounded-full flex-shrink-0">
                                <img src="/img/service-providers/secure_payments.png" alt="Service Icon" className="w-44 h-44" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-dark mb-2">Secure Payments</h3>
                                <p className="text-sm text-text opacity-80">Stripe-powered payments, instant receipts, and less cash handling. Get paid on time, every time.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 max-w-sm text-center md:text-left flex-col md:flex-row">
                            <div className="bg-primary rounded-full flex-shrink-0">
                                <img src="/img/service-providers/no_cost.png" alt="Service Icon" className="w-44 h-44" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-dark mb-2">No Upfront Costs</h3>
                                <p className="text-sm text-text opacity-80">Pay only when you earn with our commission-per-booking model at MVP. Zero risk to get started.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 max-w-sm text-center md:text-left flex-col md:flex-row">
                            <div className="bg-primary rounded-full flex-shrink-0">
                                <img src="/img/service-providers/reputation_brand.png" alt="Service Icon" className="w-44 h-44" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-dark mb-2">Build Your Reputation</h3>
                                <p className="text-sm text-text opacity-80">Collect verified reviews and grow visibility. Let satisfied customers speak for your quality.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center max-w-2xl mx-auto mt-16">
                    <h3 className="text-2xl text-gray-800 mb-4">Coming Soon: Future Upgrades</h3>
                    <p className="text-base text-text opacity-80">Premium listings, featured ads, and advanced client management tools to take your business to the next level.</p>
                </div>
            </section>

            {/* CTA Section */}
            <section id="join" className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden text-center">
                        <div className="absolute top-0 right-0 text-9xl opacity-10 select-none pointer-events-none transform -rotate-12">
                             partner with clawzea
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4">
                                Ready to Grow Your Business?
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-800/90 mb-8 max-w-3xl mx-auto">
                                Join Clawzea and start connecting with pet parents in your area. Be among the first service providers when we launch!
                            </p>

                            <div className="max-w-md mx-auto bg-white rounded-2xl p-6 shadow-lg">
                                <p className="text-gray-600 mb-4">Get early access and exclusive launch benefits</p>
                                <form onSubmit={handleSubmit} className="flex items-center">
                                    <Input
                                        type="email"
                                        placeholder="Enter your business email"
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
                                        {isSubmitting ? "..." : "Join as Provider"}
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>


                        <div className="w-full bg-white-200 pt-20">
                        <div className="max-w-4xl mx-auto flex justify-center items-center">
                        <img src="/img/service-providers/proudly_canadian.jpg" alt="Canada Flag" className="w-20 h-20 object-contain mr-2" />
                        </div>
                        </div>




                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#2b2d42] text-white py-10 px-8 text-center">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-center gap-8 mb-8 flex-wrap">
                        <a href="#aboutus" className="text-white opacity-80 transition-opacity duration-300 hover:opacity-100">About Us</a>
                        <a href="#services" className="text-white opacity-80 transition-opacity duration-300 hover:opacity-100">Services</a>
                        <a href="#contact" className="text-white opacity-80 transition-opacity duration-300 hover:opacity-100">Contact</a>
                    </div>
                    <p>&copy; 2025 Clawzea. Made with ❤️ for pets and their humans.</p>
                    <p className="mt-2.5 opacity-80">Coming soon ...</p>
                </div>
            </footer>
            <CopilotPopup
                labels={{
                    title: "Service Provider Assistant 🐾",
                    initial: "Hi! I'm your assistant. I can help you with questions about joining Clawzea, managing your business, and attracting new clients. What would you like to know?",
                }}
            />
        </div>
    );
};

const ServiceProviders = () => {
    return (
        <CopilotKit publicApiKey="ck_pub_f7153a4d79abdae0665e6a0ae94a2e58">
            <ServiceProvidersContent />
        </CopilotKit>
    );
};

export default ServiceProviders;

const style = document.createElement('style');
style.innerHTML = `
@keyframes confettiFall {
  0% { transform: translateY(0) rotate(0deg); opacity: 1; }
  100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
}
`;
document.head.appendChild(style);