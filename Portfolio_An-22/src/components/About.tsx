const About = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">ABOUT ME</h2>
            <div className="flex flex-wrap justify-center gap-20">
                <p className="max-w-[40%] text-lg self-center">
                    hello there i'm shiro - a software engineer in design and maintain
                    software.
                    <br />
                    <br />
                    i live in vietnam. i love traveling in the world and sightseeing view
                </p>
                <img 
                src="/fuko.png"
                alt="fuko"
                className="w-2/5 min-w-[300px] object-contain"
                />
            </div>

            <div className="mt-12">
                <h3 className="text-xl font-semibold mt-4">THE WHAT</h3>
                <p>cecause i stuck today</p>
                <h3 className="text-xl font-semibold mt-4">THE HOW</h3>
                <p>cecause i stuck today</p>
                <h3 className="text-xl font-semibold mt-4">THE WHY</h3>
                <p>cecause i stuck today</p>
            </div>
        </div>
    );
}
export default About