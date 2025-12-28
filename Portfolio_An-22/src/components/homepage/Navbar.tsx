import { Search } from "lucide-react";
import NavMenu from "./NavMenu";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <header className="fixed left-0 right-0 top-0 z-50 text-white">
            <div className={`
            ${scrolled ?
            "bg-blue-950/90 backdrop-blur transition-all duration-1000 ease-out-in"
            : "transition duration-1000 ease-in-out"}
            `}>
                <div className="mx-auto max-w-7xl h-14 px-10 flex items-center justify-between relative">
                    {/* Logo bên trái */}
                    <a href="/" aria-label="Home" className="z-20 relative flex-shrink-0">
                        <span className="font-extrabold tracking-wider text-xl">⟪ SHIRORU ⟫</span>
                    </a>

                    {/* Menu ở giữa */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
                    <NavMenu />

                    </div>

                    {/* Search bên phải */}
                    <div className="z-20 relative flex-shrink-0">
                        <Search className="cursor-pointer w-6 h-6 hover:text-gray-300 transition-colors" />
                    </div>
                </div>
            </div>
        </header>
    );
}
