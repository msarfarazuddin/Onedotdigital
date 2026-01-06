import Header from './components/lp/layout/Header';
import FloatingContact from './components/lp/layout/FloatingContact';
import { Montserrat } from 'next/font/google';
import "./globals.css";

export const metadata = {
    title: 'OneDotDigital | Premium Digital Marketing Services',
    description: 'Empower your business with OneDotDigital. We offer expert social media marketing, web design, app development, and SEO solutions to grow your brand fast.',
    keywords: 'digital marketing, social media marketing, web design, app development, SEO, OneDotDigital',
};

// Configure Montserrat font
const montserrat = Montserrat({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Specify the weights you need
    subsets: ['latin'], // Specify the subsets you need
    display: 'swap', // Optional: 'swap' for better performance
});


export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={montserrat.className}>
                <Header />
                {children}
                <FloatingContact />
            </body>
        </html>
    );
}
