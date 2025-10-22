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
                <div className="mx-auto  max-w-7xl h-14 px-10 flex items-center gap-x-30">
                    {/* Logo bên trái */}
                    <a href="/" aria-label="Home" className="mr-6">
                        <span className="font-extrabold tracking-wider text-xl">⟪ SHIRORU ⟫</span>
                    </a>

                    {/* Menu ở giữa */}
                    <NavMenu />

                    {/* Search bên phải */}
                    <Search className="cursor-pointer" />
                </div>
            </div>
        </header>
    );
}
