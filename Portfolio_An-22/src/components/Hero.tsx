import { useEffect, useState, type FC } from "react";

export default function Hero() {
     const [scrolled, setScrolled] = useState(false);
        useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }, []);
    
    return (
        <section
            // className="bg-no-repeat bg-cover bg-center min-w-[1000px] h-[1000px]"
            // style={{ backgroundImage: "url('background.jpg')" }}
        >
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
            <div className="text-center py-[40%]">
                <h1 className="text-4xl font-bold text-white drop-shadow-lg">
                    Beautiful Sky
                </h1>
            </div>
        </section>
    );
}