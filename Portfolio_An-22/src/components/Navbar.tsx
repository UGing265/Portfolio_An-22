import type { FC } from "react";

const Navbar: FC = () => {
    return(
        <header className="bg-black">
            <div className="flex flex-row-reverse items-center gap-3 mr-8 py-2">
                <a
                    href="/CV.html"
                    className="text-xl font-bold text-cyan-300 bg-red-600 px-3 py-2 rounded-lg hover:bg-red-900 hover:text-cyan-700 transition"
                > 
                CV
                </a>
                <a
                href="#contact"
                className="text-xl font-bold text-cyan-300 bg-red-600 px-3 py-2 rounded-lg hover:bg-red-900 hover:text-cyan-700 transition"
                >
                    Contact
                </a>
            </div>
        </header>
    );
}
export default Navbar;