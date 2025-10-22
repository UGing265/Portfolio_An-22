export default function Project() {
    return (
        <section className="my-12 px-6">
            <h2 className="text-2xl font-bold">My Projects</h2>
            <div className="mt-6"></div>
            <div className="grid grid-cols-2 gap-16 justify-items-center items-stretch">
                <ProjectCard title="Fuko is mad" description="Fuko is mad so much because she lost her favorite toy." img="/fuko.png"/>
                <ProjectCard title="Fuko" description="Fuko Fuko Fuko Fuko Fuko Fuko Fuko Fuko Fuko" img="/fuko.png"/>
                <ProjectCard title="Fuko pick 100 stars" description="Fuko try hard to pick 100 stars" img="/fuko.png"/>
            </div>
        </section>


    );
}

function ProjectCard({ title, description, img }: { title: string; description: string; img: string }) {
    return ( 
        <div className="p-4 w-max max-w-3xl h-auto bg-white object-cover overflow-hidden rounded-2xl shadow hover:shadow-blue-500 transition">
            <h3 className="text-xl font-semibold text-center">{title}</h3>
            <p className="mt-2">{description}</p>
            {img && <img src={img} alt={title} className="mt-4 w-full h-80 rounded-lg" />}
        </div>
    );
}   