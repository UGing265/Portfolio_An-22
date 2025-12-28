// src/components/NavMenu.tsx
import { Link } from "react-router-dom";

export default function NavMenu() {
    return (
        <nav className="flex justify-center gap-x-8">
            <div className="group relative cursor-pointer">
                <Link to="/commercial-aviation">
                    <span className=" group  cursor-pointer font-semibold text-white relative 
                        after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                        after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                        Home
                    </span>
                </Link>
            </div>

            <div className="group relative cursor-pointer">
                <span className="group  cursor-pointer font-semibold text-white relative 
                    after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                    after:bg-white after:transition-all after:duration-300 group-hover:after:w-full
                ">Tech </span>

            </div>
            <div className="group relative cursor-pointer">
                <span className="group  cursor-pointer font-semibold text-white relative 
                    after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                    after:bg-white after:transition-all after:duration-300 group-hover:after:w-full
                ">Lifestyle </span>
            </div>
            <div className="group relative cursor-pointer">
                <span className="group  cursor-pointer font-semibold text-white relative 
                    after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                    after:bg-white after:transition-all after:duration-300 group-hover:after:w-full
                ">About Me</span>
            </div>
            <div className="group relative cursor-pointer">
                <span className="group  cursor-pointer font-semibold text-white relative 
                    after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                    after:bg-white after:transition-all after:duration-300 group-hover:after:w-full
                ">Contact</span>
            </div>
        </nav>
    );
}
