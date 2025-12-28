const About = () => {
    return (
        <div className="mt-20">
            {/* ABOUT ME */}
            <div className="flex flex-wrap items-center gap-20 justify-center">
                <div className="flex flex-col text-center max-w-[50%] ">
                    <h1 className="text-4xl font-bold mb-6 text-[#0F172A]">Hey! I'm Shiroru</h1>
                    <p className="text-left text-2xl text-[#495057] leading-relaxed">
                        I am a software engineer who designs and maintains
                        software based in Vietnam. I love traveling around the world and enjoying scenic views from the sky
                        . I'm also passionate about photography and videography.
                    </p>
                </div>
                <img
                    src="/fuko.png"
                    alt="fuko"
                    className="w-2/5 min-w-[300px] object-contain rounded-xl shadow-lg"
                />
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
    );
}
export default About