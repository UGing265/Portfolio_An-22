export default function Project() {
    return (
        <section className="py-20 px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0F172A]">My Projects</h2>
            
            <div className="mt-12">
                {/* Grid layout: Mobile 1 cột, PC 2 cột */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 justify-items-center items-stretch">
                    <ProjectCard 
                        title="Fuko is mad" 
                        description="Fuko is mad so much because she lost her favorite toy." 
                        img="/fuko.png"
                    />
                    <ProjectCard 
                        title="Fuko" 
                        description="Fuko Fuko Fuko Fuko Fuko Fuko Fuko Fuko Fuko" 
                        img="/fuko.png"
                    />
                    <ProjectCard 
                        title="Fuko pick 100 stars" 
                        description="Fuko try hard to pick 100 stars" 
                        img="/fuko.png"
                    />
                     <ProjectCard 
                        title="Another Project" 
                        description="Description placeholder to show the grid clearly." 
                        img="/fuko.png"
                    />
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ title, description, img }: { title: string; description: string; img: string }) {
    return ( 
        // Thay đổi: w-full (lấp đầy cột), h-full (để các thẻ cao bằng nhau)
        <div className="flex flex-col p-6 w-full h-full bg-white rounded-2xl shadow-lg hover:shadow-blue-200 hover:-translate-y-1 transition-all duration-300 border border-slate-100">
            
            {/* Tiêu đề */}
            <h3 className="text-xl font-bold text-[#0F172A] text-center mb-3">
                {title}
            </h3>
            
            {/* Mô tả */}
            <p className="text-[#334155] leading-relaxed flex-grow">
                {description}
            </p>
            
            {/* Ảnh: Thêm object-cover để ảnh không bị méo khi set height cố định */}
            {img && (
                <img 
                    src={img} 
                    alt={title} 
                    className="mt-6 w-full h-64 md:h-80 object-cover rounded-xl bg-slate-50" 
                />
            )}
        </div>
    );
}