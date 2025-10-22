const About = () => {
    return (
        <div className="mt-20">
            {/* ABOUT ME */}
            <div className="flex flex-wrap items-center gap-20 justify-center">
                <div className="flex flex-col text-center max-w-[50%] ">
                    <h1 className="text-2xl font-bold mb-6">ABOUT ME</h1>
                    <p className="text-left text-lg">
                        Hello there i'm shiro - a software engineer which design and maintain
                        software. I live in vietnam. I love traveling in the world and sightseeing view
                        from the sky. I also love photography and making videos.
                    </p>
                </div>
                <img
                    src="/fuko.png"
                    alt="fuko"
                    className="w-2/5 min-w-[300px] object-contain"
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