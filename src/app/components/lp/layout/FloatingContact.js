"use client"

import { useEffect, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import gsap from "gsap"

export default function FloatingContact() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.getElementById('contact');
            const footerTop = footer ? footer.getBoundingClientRect().top : Infinity;

            // Show after 400px, but hide once we reach the footer content
            if (window.scrollY > 400 && footerTop > (window.innerHeight / 2)) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        if (isVisible) {
            gsap.to("#floating-contact", {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.5,
                ease: "back.out(1.7)",
            })
        } else {
            gsap.to("#floating-contact", {
                opacity: 0,
                y: 20,
                scale: 0.8,
                duration: 0.3,
                ease: "power2.in",
            })
        }
    }, [isVisible])

    const scrollToContact = (e) => {
        e.preventDefault()
        const contactSection = document.getElementById("contact")
        if (contactSection) {
            const targetPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            })
        }
    }

    return (
        <div
            id="floating-contact"
            className="fixed bottom-8 right-8 z-[100] pointer-events-none opacity-0 translate-y-5 scale-75"
        >
            <a
                href="#contact"
                onClick={scrollToContact}
                className="pointer-events-auto flex items-center gap-3 group cursor-pointer"
            >
                <div className="bg-secondary text-white p-4 rounded-3xl shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-secondary/50 flex items-center justify-center">
                    <ArrowUpRight className="w-8 h-8" />
                </div>
                <div className="bg-white text-black py-2 px-4 rounded-full font-semibold shadow-lg opacity-0 -translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden md:block">
                    Enquiry Form
                </div>
            </a>
        </div>
    )
}
