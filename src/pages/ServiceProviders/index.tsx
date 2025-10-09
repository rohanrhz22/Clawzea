import React, { useEffect, useState, FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const ServiceProviders = () => {
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
            const userData = {
                email,
                role: "service_provider",
                timestamp: new Date().toISOString(),
            };

            const users = JSON.parse(localStorage.getItem("ClawzeaUsers") || "[]");
            users.push(userData);
            localStorage.setItem("ClawzeaUsers", JSON.stringify(users));

            triggerConfetti();
            toast.success("🎉 Welcome aboard! We'll be in touch soon.");
            setEmail("");
        } catch (error) {
            toast.error("Something went wrong. Please try again.");
        } finally {
            setTimeout(() => setIsSubmitting(false), 1000);
        }
    };


    useEffect(() => {
        document.body.classList.add("font-reddit-sans");

        return () => {
            document.body.classList.remove("font-reddit-sans");
        };
    }, []);

    return (
        <div className="font-reddit-sans antialiased bg-light text-text leading-relaxed overflow-x-hidden">
            {/* Navigation */}
            <nav className="bg-white shadow-md fixed w-full top-0 z-50 animate-slideDown">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
                    <div className="flex items-center gap-2.5 text-3xl font-extrabold text-dark">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-2xl">🐾</div>
                        <span className="font-rocknroll text-3xl font-semibold tracking-wide ml-1.5">Clawzea</span>
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
                        <h1 className="font-reddit-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark leading-tight mb-6">Grow Your Pet Care Business with<span className="text-primary-dark relative"> Clawzea</span></h1>
                        <p className="text-xl text-text mb-8 opacity-90">Connect with pet parents actively searching for your services. No upfront costs, secure payments, and simple booking management.</p>
                        <div className="flex gap-4 flex-wrap">
                            <a href="#join" className="bg-primary text-dark py-3.5 px-8 rounded-full font-semibold inline-block transition-all duration-300 border-2 border-primary hover:bg-primary-dark hover:-translate-y-1 hover:shadow-lg">Join Us</a>
                        </div>
                    </div>
                    <div className="relative animate-fadeInRight z-0">
                        <img src="/img/service-providers/happy_pets_and_parents.png" alt="Happy dog with owner" className="relative block z-10 w-full h-auto" />
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            {/* <section className="bg-primary py-8 px-8 -mt-0.5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div className="animate-fadeInUp">
                        <div className="text-4xl font-extrabold text-dark">1K+</div>
                        <div className="text-base text-dark opacity-80">Pet Parents Waiting</div>
                    </div>
                    <div className="animate-fadeInUp">
                        <div className="text-4xl font-extrabold text-dark">50+</div>
                        <div className="text-base text-dark opacity-80">Cities Covered</div>
                    </div>
                    <div className="animate-fadeInUp">
                        <div className="text-4xl font-extrabold text-dark">0%</div>
                        <div className="text-base text-dark opacity-80">Upfront Costs</div>
                    </div>
                    <div className="animate-fadeInUp">
                        <div className="text-4xl font-extrabold text-dark">24/7</div>
                        <div className="text-base text-dark opacity-80">Support Available</div>
                    </div>
                </div>
            </section> */}

            {/* About Us Section */}
            <section className="py-20 px-8 bg-white" id="aboutus">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-5xl font-extrabold text-dark mb-4">Your Business Deserves to Thrive</h2>
                    <p className="text-lg text-text opacity-80">At Clawzea, we understand that running a pet care business is more than just a job—it's your passion. You pour your heart into caring for every furry client, but finding new customers and managing bookings shouldn't be a constant struggle.<br /><br />

                    That's why we built Clawzea. To connect dedicated service providers like you with pet parents actively searching for trusted, quality care. No expensive ads, no missed calls, no complicated systems—just a simple platform that helps you grow.<br /><br />

                    Whether you're a groomer, vet, dog walker, pet sitter, or run a boarding facility, Clawzea gives you the tools to reach more clients, manage bookings effortlessly, and get paid securely—all while you focus on what you do best: caring for pets.

                    <br /><br />Join a community where your expertise is valued, your business grows, and pet parents can finally find the quality care their furry family members deserve.</p>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 px-8 bg-white" id="services">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-5xl font-extrabold text-dark mb-4">Why Partner with Clawzea?</h2>
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
                                <img src="/img/service-providers/pet_spa_icon.png" alt="Service Icon" className="w-44 h-44" />
                            </div>
                        </div>
                        <div className="flex items-center gap-6 max-w-sm md:text-right text-center flex-col-reverse md:flex-row">
                            <div className="mr-0 md:mr-4">
                                <h3 className="text-lg font-semibold text-dark mb-2">New Client Flow</h3>
                                <p className="text-sm text-text opacity-80">Reach Ottawa pet parents actively searching for your services. Quality leads, not cold calls.</p>
                            </div>
                            <div className="bg-primary rounded-full flex-shrink-0">
                                <img src="/img/service-providers/pet_health_passport.png" alt="Service Icon" className="w-44 h-44" />
                            </div>
                        </div>
                        <div className="flex items-center gap-6 max-w-sm md:text-right text-center flex-col-reverse md:flex-row">
                            <div className="mr-0 md:mr-4">
                                <h3 className="text-lg font-semibold text-dark mb-2">Simple Booking Management</h3>
                                <p className="text-sm text-text opacity-80">Reduce missed calls and last-minute cancellations with easy-to-use scheduling tools.</p>
                            </div>
                            <div className="bg-primary rounded-full flex-shrink-0">
                                <img src="/img/service-providers/vet_care_icon.png" alt="Service Icon" className="w-44 h-44" />
                            </div>
                        </div>
                    </div>
                    <div className="flex-[1.5] text-center order-first md:order-none mb-12 md:mb-0">
                        <img src="/img/service-providers/pet_service.png" alt="Happy dog with owner" className="max-w-full rounded-3xl" />
                    </div>
                    <div className="flex flex-col gap-12 flex-1 md:items-start items-center">
                        <div className="flex items-center gap-6 max-w-sm text-center md:text-left flex-col md:flex-row">
                            <div className="bg-primary rounded-full flex-shrink-0">
                                <img src="/img/service-providers/pet_grooming_icon.png" alt="Service Icon" className="w-44 h-44" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-dark mb-2">Secure Payments</h3>
                                <p className="text-sm text-text opacity-80">Stripe-powered payments, instant receipts, and less cash handling. Get paid on time, every time.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 max-w-sm text-center md:text-left flex-col md:flex-row">
                            <div className="bg-primary rounded-full flex-shrink-0">
                                <img src="/img/service-providers/pet_boarding_icon.png" alt="Service Icon" className="w-44 h-44" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-dark mb-2">No Upfront Costs</h3>
                                <p className="text-sm text-text opacity-80">Pay only when you earn with our commission-per-booking model at MVP. Zero risk to get started.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 max-w-sm text-center md:text-left flex-col md:flex-row">
                            <div className="bg-primary rounded-full flex-shrink-0">
                                <img src="/img/service-providers/pet_walk_icon.png" alt="Service Icon" className="w-44 h-44" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-dark mb-2">Build Your Reputation</h3>
                                <p className="text-sm text-text opacity-80">Collect verified reviews and grow visibility. Let satisfied customers speak for your quality.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center max-w-2xl mx-auto mt-16">
                    <h3 className="text-2xl text-dark mb-4">Coming Soon: Future Upgrades</h3>
                    <p className="text-base text-text opacity-80">Premium listings, featured ads, and advanced client management tools to take your business to the next level.</p>
                </div>
            </section>

            {/* CTA Section */}
            <section id="join" className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden text-center">
                        <div className="absolute top-0 right-0 text-9xl opacity-10 select-none pointer-events-none transform -rotate-12">
                             🐕
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
                </div>
            </section>

            {/* Party Popper Overlay */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50 hidden" id="partyPopper"></div>
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl z-50 hidden animate-celebration-pop" id="celebrationEmoji"></div>

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
        </div>
    );
};

export default ServiceProviders;
