import type { FC } from "react";

const Hero: FC = () => {
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
            <div className="text-center py-[40%]">
                <h1 className="text-4xl font-bold text-white drop-shadow-lg">
                    Beautiful Sky
                </h1>
            </div>
        </section>
    );
}
export default Hero;