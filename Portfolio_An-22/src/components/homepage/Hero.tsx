import { useEffect, useState } from "react";

export default function Hero() {
     const [scrolled, setScrolled] = useState(false);
        useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);
    
    return (
        <section className="relative min-h-screen overflow-hidden">
            <video
                className="object-cover w-full h-full"
                src="/747-2.mp4"
                autoPlay
                loop
                muted
            />
             <div className={`${scrolled ? 
             "bg-transparent transition duration-1000 ease-in-out"
             : "absolute inset-x-0 top-0 h-[33vh] bg-gradient-to-b from-blue-950/80 via-blue-950/30 to-transparent to-100% z-10 transition duration-1000 ease-in-out "}`} />
            <div className="absolute inset-x-0 bottom-0 text-center py-[40%]">
                <h1 className="absolute bottom-60 left-20 text-7xl font-bold text-white drop-shadow-lg">
                    Beautiful Sky
                </h1>
            </div>
        </section>
    );
}