const About = () => {
    return (
        <section className="w-full py-16 md:py-24 bg-[#ECF5FF]">
            <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                {/* ABOUT ME */}
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 justify-center max-w-7xl mx-auto">

                    {/* Phần Chữ */}
                    <div className="flex flex-col text-center md:text-left w-full md:w-1/2 space-y-6">
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-[#0F172A]">
                            Hey! I'm Shiroru
                        </h1>

                        {/* Giảm size xuống text-lg hoặc xl cho tinh tế, chỉnh màu sang Slate cho hợp tone */}
                        <p className="text-lg lg:text-xl text-[#334155] leading-relaxed">
                            I am a software engineer who designs and maintains
                            software, based in <span className="font-semibold text-[#2563EB]">Vietnam</span>.
                            I love traveling around the world and enjoying scenic views from the sky.
                            I'm also passionate about photography and videography.
                        </p>
                    </div>

                    {/* Phần Ảnh */}
                    <div className="w-full md:w-5/12 flex justify-center md:justify-end">
                        <img
                            src="/fuko.png"
                            alt="fuko"
                            /* Bỏ min-w-300px để tránh bị tràn màn hình điện thoại nhỏ */
                            className="w-full max-w-lg object-contain rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                </div>



                {/* <div className="mt-12">
                <h3 className="text-xl font-semibold mt-4">THE WHAT</h3>
                <p>cecause i stuck today</p>
                <h3 className="text-xl font-semibold mt-4">THE HOW</h3>
                <p>cecause i stuck today</p>
                <h3 className="text-xl font-semibold mt-4">THE WHY</h3>
                <p>cecause i stuck today</p>
            </div> */}
            </div>

        </section>
    );
}
export default About