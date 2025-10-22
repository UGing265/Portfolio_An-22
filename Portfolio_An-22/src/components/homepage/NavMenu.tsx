// src/components/NavMenu.tsx
export default function NavMenu() {
    return (
        <nav className="flex justify-center gap-x-8">
            <div className="group relative cursor-pointer">
                <span className=" group  cursor-pointer font-semibold text-white relative 
                    after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                    after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                    Commercial Aviation
                </span>
            </div>

            <div className="group relative cursor-pointer">
                <span className="group  cursor-pointer font-semibold text-white relative 
                    after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                    after:bg-white after:transition-all after:duration-300 group-hover:after:w-full
                ">Defense & Sercurity </span>

            </div>
            <div className="group relative cursor-pointer">
                <span className="group  cursor-pointer font-semibold text-white relative 
                    after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                    after:bg-white after:transition-all after:duration-300 group-hover:after:w-full
                ">Excutive Jets</span>
            </div>
            <div className="group relative cursor-pointer">
                <span className="group  cursor-pointer font-semibold text-white relative 
                    after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                    after:bg-white after:transition-all after:duration-300 group-hover:after:w-full
                ">Services Support</span>
            </div>
            <div className="group relative cursor-pointer">
                <span className="group  cursor-pointer font-semibold text-white relative 
                    after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 
                    after:bg-white after:transition-all after:duration-300 group-hover:after:w-full
                ">More Bussiness</span>
            </div>
        </nav>
    );
}
