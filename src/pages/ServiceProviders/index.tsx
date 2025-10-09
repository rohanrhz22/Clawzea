import React, { useEffect } from 'react';
import styles from './styles.module.css';

const ServiceProviders = () => {

    useEffect(() => {
        document.body.classList.add(styles.serviceProvidersBody);

        return () => {
            document.body.classList.remove(styles.serviceProvidersBody);
        };
    }, []);

    return (
        <div>
            {/* Navigation */}
            <nav>
                <div className={styles["nav-container"]}>
                    <div className={styles["logo-nav"]}>
                        <div className={styles["logo-icon"]}></div>
                        <span>Clawzea</span>
                    </div>
                    <ul className={styles["nav-links"]}>
                        <li><a href="#aboutus">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#join" className={styles["cta-button"]}>Join Us</a></li>
                    </ul>
                </div>
            </nav>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles["hero-container"]}>
                    <div className={styles["hero-content"]}>
                        <h1>Grow Your Pet Care Business with<span> Clawzea</span></h1>
                        <p className={styles["hero-subtitle"]}>Connect with pet parents actively searching for your services. No upfront costs, secure payments, and simple booking management.</p>
                        <div className={styles["hero-buttons"]}>
                            <a href="#join" className={styles["btn-primary"]}>Join Us</a>
                        </div>
                    </div>
                    <div className={styles["hero-image"]}>
                        <img src="/img/service-providers/happy_pets_and_parents.png" alt="Happy dog with owner" />
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className={styles["stats-bar"]}>
                <div className={styles["stats-container"]}>
                    <div className={styles["stat-item"]}>
                        <div className={styles["stat-number"]}>1K+</div>
                        <div className={styles["stat-label"]}>Pet Parents Waiting</div>
                    </div>
                    <div className={styles["stat-item"]}>
                        <div className={styles["stat-number"]}>50+</div>
                        <div className={styles["stat-label"]}>Cities Covered</div>
                    </div>
                    <div className={styles["stat-item"]}>
                        <div className={styles["stat-number"]}>0%</div>
                        <div className={styles["stat-label"]}>Upfront Costs</div>
                    </div>
                    <div className={styles["stat-item"]}>
                        <div className={styles["stat-number"]}>24/7</div>
                        <div className={styles["stat-label"]}>Support Available</div>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className={styles.aboutus} id="aboutus">
                <div className={styles["section-header"]}>
                    <h2>Your Business Deserves to Thrive</h2>
                    <p>At Clawzea, we understand that running a pet care business is more than just a job—it's your passion. You pour your heart into caring for every furry client, but finding new customers and managing bookings shouldn't be a constant struggle.<br /><br />

                    That's why we built Clawzea. To connect dedicated service providers like you with pet parents actively searching for trusted, quality care. No expensive ads, no missed calls, no complicated systems—just a simple platform that helps you grow.<br /><br />

                    Whether you're a groomer, vet, dog walker, pet sitter, or run a boarding facility, Clawzea gives you the tools to reach more clients, manage bookings effortlessly, and get paid securely—all while you focus on what you do best: caring for pets.

                    <br /><br />Join a community where your expertise is valued, your business grows, and pet parents can finally find the quality care their furry family members deserve.</p>
                </div>
            </section>

            {/* Services Section */}
            <section className={styles.services} id="services">
                <div className={styles["section-header"]}>
                    <h2>Why Partner with Clawzea?</h2>
                    <p>Everything you need to grow your pet care business, with zero upfront costs, and maximum support.</p>
                </div>
                <div className={styles["services-layout"]}>
                    <div className={`${styles["services-column"]} ${styles.left}`}>
                        <div className={styles["service-item"]}>
                            <div className={styles["service-text"]}>
                                <h3>Free Promotion at Launch</h3>
                                <p>Get discovered by new clients without paying for expensive ads. We bring pet parents to you.</p>
                            </div>
                            <div className={styles["service-icon"]}>
                                <img src="/img/service-providers/pet_spa_icon.png" alt="Service Icon" />
                            </div>
                        </div>
                        <div className={styles["service-item"]}>
                            <div className={styles["service-text"]}>
                                <h3>New Client Flow</h3>
                                <p>Reach Ottawa pet parents actively searching for your services. Quality leads, not cold calls.</p>
                            </div>
                            <div className={styles["service-icon"]}>
                                <img src="/img/service-providers/pet_health_passport.png" alt="Service Icon" />
                            </div>
                        </div>
                        <div className={styles["service-item"]}>
                            <div className={styles["service-text"]}>
                                <h3>Simple Booking Management</h3>
                                <p>Reduce missed calls and last-minute cancellations with easy-to-use scheduling tools.</p>
                            </div>
                            <div className={styles["service-icon"]}>
                                <img src="/img/service-providers/vet_care_icon.png" alt="Service Icon" />
                            </div>
                        </div>
                    </div>
                    <div className={styles["central-image-column"]}>
                        <img src="/img/service-providers/pet_service.png" alt="Happy dog with owner" />
                    </div>
                    <div className={`${styles["services-column"]} ${styles.right}`}>
                        <div className={styles["service-item"]}>
                            <div className={styles["service-icon"]}>
                                <img src="/img/service-providers/pet_grooming_icon.png" alt="Service Icon" />
                            </div>
                            <div className={styles["service-text"]}>
                                <h3>Secure Payments</h3>
                                <p>Stripe-powered payments, instant receipts, and less cash handling. Get paid on time, every time.</p>
                            </div>
                        </div>
                        <div className={styles["service-item"]}>
                            <div className={styles["service-icon"]}>
                                <img src="/img/service-providers/pet_boarding_icon.png" alt="Service Icon" />
                            </div>
                            <div className={styles["service-text"]}>
                                <h3>No Upfront Costs</h3>
                                <p>Pay only when you earn with our commission-per-booking model at MVP. Zero risk to get started.</p>
                            </div>
                        </div>
                        <div className={styles["service-item"]}>
                            <div className={styles["service-icon"]}>
                                <img src="/img/service-providers/pet_walk_icon.png" alt="Service Icon" />
                            </div>
                            <div className={styles["service-text"]}>
                                <h3>Build Your Reputation</h3>
                                <p>Collect verified reviews and grow visibility. Let satisfied customers speak for your quality.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["section-header"]} style={{ marginTop: '60px' }}>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--dark)', marginBottom: '1rem' }}>Coming Soon: Future Upgrades</h3>
                    <p style={{ fontSize: '1rem' }}>Premium listings, featured ads, and advanced client management tools to take your business to the next level.</p>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles["cta-section"]} id="join">
                <div className={styles["cta-container"]}>
                    <h2>Ready to Grow Your Business?</h2>
                    <p>Join Clawzea and start connecting with pet parents in your area. Be among the first service providers when we launch!</p>

                    <div className={styles["email-forms"]}>
                        <div className={styles["form-card"]}>
                            <p>Get early access and exclusive launch benefits</p>
                            <form id="ownerForm">
                                <input type="email" className={styles["email-input"]} id="ownerEmail" placeholder="Enter your business email" required />
                                <button type="submit" className={styles["submit-btn"]}>Join as Provider</button>
                                <div className={styles["success-msg"]} id="ownerSuccess"> Welcome aboard! We'll be in touch soon.</div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Party Popper Overlay */}
            <div className={styles["party-popper-overlay"]} id="partyPopper"></div>
            <div className={styles["celebration-emoji"]} id="celebrationEmoji"></div>

            {/* Footer */}
            <footer>
                <div className={styles["footer-content"]}>
                    <div className={styles["footer-links"]}>
                        <a href="#aboutus">About Us</a>
                        <a href="#services">Services</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <p>&copy; 2025 Clawzea. Made with ❤️ for pets and their humans.</p>
                    <p style={{ marginTop: '10px', opacity: '0.8' }}>Coming soon ...</p>
                </div>
            </footer>
        </div>
    );
};

export default ServiceProviders;