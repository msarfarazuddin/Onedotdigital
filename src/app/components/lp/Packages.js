"use client"
import { platform } from "node:os";
import { useState } from "react"

export default function Packages() {

    const [activeTab, setActiveTab] = useState("social-media")

    const services = [
        { id: "social-media", name: "Social Media Growth & Management" },
        { id: "web-design", name: "Website Design & Development" },
        { id: "app-dev", name: "Mobile App Development" },
        { id: "seo", name: "Search Engine Optimization (SEO)" },
        { id: "marketing", name: "Performance Marketing & Advertising" },
        { id: "branding", name: "Brand Identity & Creative Design" },
    ]

    const packages = [
        {
            name: "Launch Plan",
            price: "999",
            line: "Perfect for new & small businesses",
            features: [
                "Social strategy setup (goal + audience)",
                "12 custom post graphics monthly",
                "Bio & profile optimization",
                "Platform scheduling & posting",
                "Basic engagement monitoring",
                "Monthly performance summary",
            ],
            service: "social-media",
        },
        {
            name: "Grow Plan",
            price: "1,599",
            line: "For brands ready to grow faster",
            features: [
                "Multi-platform posting (FB, IG)",
                "20 content posts + carousel designs",
                "Hashtag & topic strategy",
                "Comment & DM engagement support",
                "Weekly analytics review",
                "Community sentiment check-ins",
            ],
            service: "social-media",
        },
        {
            name: "Scale Plan",
            price: "2,999",
            line: "Designed to build consistency & engagement",
            features: [
                "30 content pieces + stories",
                "Multi-platform posting (FB, IG, LinkedIn)",
                "Trend & competitive insights",
                "Dedicated social media manager",
                "Audience growth & retention strategy",
                "Bi-weekly performance calls",
            ],
            service: "social-media",
        },
        {
            name: "Premium Plan",
            price: "2,999",
            line: "Designed for aggressive growth & market leadership",
            features: [
                "Full content calendar + campaign themes",
                "Video + motion graphics support",
                "Paid social media guidance (not spend)",
                "Real-time engagement management",
                "Weekly performance reporting",
                "Brand community cultivation strategy",
            ],
            service: "social-media",
        },

        {
            name: "Launch Plan",
            price: "999",
            line: "Perfect for new & small businesses",
            features: [
                "Custom 5-page responsive website build",
                "Mobile-optimized user experience",
                "Contact & lead capture form setup",
                "Basic SEO structure (titles, metadata)",
                "CMS integration (WordPress/Shopify)",
                "2 weeks of launch support",
            ],
            service: "web-design",
        },
        {
            name: "Grow Plan",
            price: "1,599",
            line: "For brands ready to grow faster",
            features: [
                "Custom UI/UX design and layout",
                "Multi-device responsive coding",
                "Enhanced SEO setup (tags + site crawl optimization)",
                "Integrated contact + newsletter form",
                "Blog or insights section configured",
                "Standard support up to 4 weeks post launch",
            ],
            service: "web-design",
        },
        {
            name: "Scale Plan",
            price: "2,999",
            line: "Designed to build consistency & engagement",
            features: [
                "Bespoke 10+ page design and architecture",
                "CMS + blog setup with content guidance",
                "Advanced on-page SEO configuration",
                "Analytics tracking (Google Analytics setup)",
                "Social & share integration",
                "2 months of post-launch performance support",
            ],
            service: "web-design",
        },
        {
            name: "Premium Plan",
            price: "2,999",
            line: "Designed for aggressive growth & market leadership",
            features: [
                "Full strategic website blueprint & customer journey mapping",
                "Custom visual elements & interactive design",
                "E-commerce or conversion funnel pages",
                "Technical optimization (speed + security)",
                "Heatmap & user behavior tracking setup",
                "Priority support & analytics insights dashboard",
            ],
            service: "web-design",
        },

        {
            name: "Launch Plan",
            price: "999",
            line: "Perfect for new & small businesses",
            features: [
                "Basic app concept & planning session",
                "UI/UX wireframe design",
                "Starter app build (Android or iOS)",
                "Basic navigation & screens",
                "Simple contact/lead feature",
                "2 weeks of support after launch",
            ],
            service: "app-dev",
        },
        {
            name: "Grow Plan",
            price: "1,599",
            line: "For brands ready to grow faster",
            features: [
                "Full UI/UX design screens",
                "Android & iOS build",
                "Core feature integrations",
                "App store submission guidance",
                "Standard analytics setup",
                "4 weeks post-launch support",
            ],
            service: "app-dev",
        },
        {
            name: "Scale Plan",
            price: "2,999",
            line: "Designed to build consistency & engagement",
            features: [
                "Custom experience design",
                "Push notifications integration",
                "Backend dashboard setup",
                "QA testing & optimization",
                "Analytics & user tracking",
                "2 months post-launch support",
            ],
            service: "app-dev",
        },
        {
            name: "Premium Plan",
            price: "2,999",
            line: "Designed for aggressive growth & market leadership",
            features: [
                "Feature roadmap & strategy session",
                "Database & API integrations",
                "In-app messaging / advanced functions",
                "Performance optimization",
                "App analytics & retention tools",
                "Priority development partner support",
            ],
            service: "app-dev",
        },


        {
            name: "Launch Plan",
            price: "999",
            line: "Perfect for new & small businesses",
            features: [
                "Keyword research & mapping",
                "On-page optimization (titles/meta)",
                "Technical site crawl setup",
                "Local SEO setup (Google Business)",
                "Monthly performance snapshot",
                "Competitor SEO overview",
            ],
            service: "seo",
        },
        {
            name: "Grow Plan",
            price: "1,599",
            line: "For brands ready to grow faster",
            features: [
                "Full keyword strategy & content suggestions",
                "On-page SEO implementation",
                "Off-page backlink analysis",
                "Technical site health audit",
                "Monthly ranking reporting",
                "Core web vitals optimization",
            ],
            service: "seo",
        },
        {
            name: "Scale Plan",
            price: "2,999",
            line: "Designed to build consistency & engagement",
            features: [
                "Strategic keyword roadmap",
                "Content optimization guidance",
                "Backlink strategy & development",
                "Local + national SEO coverage",
                "SEO performance dashboard",
                "Monthly strategy review call",
            ],
            service: "seo",
        },
        {
            name: "Premium Plan",
            price: "2,999",
            line: "Designed for aggressive growth & market leadership",
            features: [
                "Competitor SEO + keyword gap analysis",
                "Advanced technical SEO fixes",
                "Content creation briefing support",
                "Authority building backlinks campaign",
                "Conversion rate SEO insights",
                "Priority performance and reporting",
            ],
            service: "seo",
        },


        {
            name: "Launch Plan",
            price: "999",
            line: "Perfect for new & small businesses",
            features: [
                "Initial paid media strategy setup",
                "Audience targeting setup",
                "Campaign launch (Meta/Google)",
                "Ad copy + creative guidance",
                "Basic conversion tracking",
                "Monthly results summary",
            ],
            service: "marketing",
        },
        {
            name: "Grow Plan",
            price: "1,599",
            line: "For brands ready to grow faster",
            features: [
                "Multi-platform ad setup",
                "Custom audience segmentation",
                "A/B ad creative testing",
                "Daily performance checks",
                "ROI & conversion reporting",
                "Optimization recommendations",
            ],
            service: "marketing",
        },
        {
            name: "Scale Plan",
            price: "2,999",
            line: "Designed to build consistency & engagement",
            features: [
                "Full funnel performance strategy",
                "Retargeting audience campaigns",
                "Conversion pixel & analytics setup",
                "Campaign refinement weekly",
                "Attribution and spend suggestions",
                "Growth performance insights",
            ],
            service: "marketing",
        },
        {
            name: "Premium Plan",
            price: "2,999",
            line: "Designed for aggressive growth & market leadership",
            features: [
                "High-intent audience building",
                "Lookalike / advanced segmentation",
                "Creative iteration & optimization",
                "Cross-platform budget strategy",
                "Weekly results calls",
                "Priority campaign optimization",
            ],
            service: "marketing",
        },


        {
            name: "Launch Plan",
            price: "999",
            line: "Perfect for new & small businesses",
            features: [
                "Brand discovery questionnaire",
                "Primary logo design (2 concepts)",
                "Color palette & typography setup",
                "Basic brand guidelines PDF",
                "Social profile graphic kit",
                "Standard delivery timeline",
            ],
            service: "branding",
        },
        {
            name: "Grow Plan",
            price: "1,599",
            line: "For brands ready to grow faster",
            features: [
                "Competitor brand landscape analysis",
                "Multiple logo lockups & versioning",
                "Visual asset collection (icons + patterns)",
                "Extended brand guidelines",
                "Messaging tone & voice primer",
                "Priority revisions included",
            ],
            service: "branding",
        },
        {
            name: "Scale Plan",
            price: "2,999",
            line: "Designed to build consistency & engagement",
            features: [
                "Brand strategy development workshop",
                "Full suite of logos & visual assets",
                "Brand application examples (web, social)",
                "Comprehensive typography + color systems",
                "Messaging & tagline refinement",
                "Source files delivered (AI/PNG/JPG/PDF)",
            ],
            service: "branding",
        },
        {
            name: "Premium Plan",
            price: "2,999",
            line: "Designed for aggressive growth & market leadership",
            features: [
                "Market positioning + audience profiling",
                "Full brand book (30+ pages)",
                "Brand personality & voice guide",
                "Template suite (social + presentation)",
                "Launch campaign concept visuals",
                "Dedicated design partner support",
            ],
            service: "branding",
        },

    ];

    const scrollToContact = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="w-full flex flex-col items-center justify-center" style={{
            background: 'linear-gradient(90deg, rgba(4, 83, 98, 1) 36%, rgba(13, 106, 123, 1) 61%, rgba(14, 109, 127, 1) 100%)',
            minHeight: '100vh',
            color: 'white',
            padding: '40px 20px 80px',
        }}>


            <div className="lg:w-full md:full  mx-auto sm:px-4 md:mt-2 mt-0 lg:mt-2 lg:mb-10 md:scale-[0.8] lg:scale-[0.75] xl:scale-[0.5] 2xl:scale-[0.9] origin-top">
                {/* <h2 className="text-5xl md:text-7xl lg:text-9xl mb-2 sm:-mb-6 tracking-widest font-black text-white text-center">
                    PACKAGES
                </h2> */}


                <div className="flex flex-wrap gap-4 lg:mb-10 mb-5 justify-center lg:w-full mx-auto">
                    {services.map((service) => (
                        <button
                            key={service.id}
                            className={`transition ease-in-out delay-150 px-2 py-0 rounded-xl border-2 text-xs sm:text-lg duration-300 ${activeTab === service.id ? "bg-secondary border-secondary" : "bg-transparent text-white hover:bg-secondary hover:border-secondary  hover:text-white"
                                }`}
                            onClick={() => setActiveTab(service.id)}
                        >
                            {service.name}
                        </button>
                    ))}
                </div>


                {services.map((service) => (
                        <div key={service.id} className={activeTab === service.id ? "block" : "hidden"}  >
                            <div className="grid grid-cols-1 gap-3 box-content w-full sm:grid-cols-2 lg:grid-cols-4">
                                {packages
                                    .filter((pkg) => pkg.service === service.id) // Filter packages based on service
                                    .map((pkg, index) => (
                                    <div key={index} className="w-full max-w-full  bg-slate-50/20 backdrop-blur-lg text-white rounded-3xl border-2 py-3 px-4 flex flex-col justify-between min-h-auto">
                                        <div className="w-full">
                                            <h3 className="text-4xl font-bold mb-2">{pkg.name}</h3>
                                            <p className="text-6xl font-thin mb-2"><span>{pkg.price}</span> <sup className="text-3xl font-bold -top-6">AED</sup></p>
                                            {/* <p className="mb-4 font-semibold">AED Billed Monthly</p> */}
                                             <p className="mb-4 font-semibold">{pkg.line}</p>
                                            {pkg.features ? (
                                                <div className="mb-4 space-y-1">
                                                    {pkg.features.map((feature, featureIdx) => (
                                                        <p key={featureIdx} className="text-sm leading-relaxed">
                                                            - {feature}
                                                        </p>
                                                    ))}
                                                </div>
                                            ) : (
                                                <p>{pkg.platforms}</p>
                                            )}
                                        </div>
                                        <div className="text-center w-full mt-5">
                                            {/* <button className="group rounded-full bg-primary px-2 py-1 text-base font-semibold text-white transition-colors hover:bg-neutral-700 focus:outline-none focus:ring-0 focus:bg-neutral-700 focus:ring-offset-2 focus:ring-offset-neutral-700">
                                                Get Started
                                            </button> */}
                                            <a
                                                href="#contact"
                                                onClick={scrollToContact}
                                                className="group relative inline-flex items-center overflow-hidden rounded-full px-6 py-2 text-base  font-semibold transition-colors focus:outline-none"
                                            >
                                                {/* Expanding Circle Effect */}
                                                <span className="absolute left-0 top-0 h-full w-10 bg-three transition-all duration-500 ease-in-out group-hover:w-full group-hover:bg-secondary rounded-full z-0"></span>

                                                {/* Text Content */}
                                                <span className="relative z-10 ">
                                                    <span className="inline-block relative z-10 ">Get</span> Started
                                                </span>
                                            </a>


                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                ))}

                <div className="flex flex-col  items-center  mx-auto mt-5 lg:mt-10 md:mt-10">
                    <h2 className="text-4xl font-extralight font-glancyr lg:text-[45px] text-[30px]">Not sure which plan fits your business goals?</h2>
                    <p>Talk to our experts and get a custom recommendation..!</p>
                    <a
                        href="tel:+92 327 363 0329"
                        className="group relative inline-flex items-center overflow-hidden rounded-full mt-5 px-6 py-2 text-base text-xl  font-semibold transition-colors focus:outline-none"
                    >
                        {/* Expanding Circle Effect */}
                        <span className="absolute left-0 top-0 h-full w-11 bg-three transition-all duration-500 ease-in-out group-hover:w-full group-hover:bg-secondary rounded-full z-0"></span>

                        {/* Text Content */}
                        <span className="relative z-10 ">
                            <span className="inline-block relative z-10 ">Book </span> a Free Strategy Call
                        </span>
                    </a>
                </div>

            </div>
        </div>
    );
}
