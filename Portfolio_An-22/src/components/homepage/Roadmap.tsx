const Roadmap = () => {
    return (
        <section className="my-20 px-6 max-w-7xl mx-auto"> {/* Thêm max-w-7xl để thẳng hàng với phần trên */}
            <h2 className="text-3xl font-bold text-[#0F172A] mb-12">Timeline</h2>

            <div className="flex flex-col">
                {/* ITEM 1 */}
                <div className="flex flex-col md:flex-row gap-4 mb-8 pb-8 border-b border-gray-300">
                    {/* Cột 1: Thời gian - Màu xám nhẹ, font số rõ ràng */}
                    <p className="flex-1 text-slate-500 font-medium">
                        2023 - Now
                    </p>

                    {/* Cột 2: Tiêu đề - Màu đậm nhất, to rõ */}
                    <h3 className="flex-1 text-xl font-bold text-[#0F172A]">
                        FPT University
                    </h3>

                    {/* Cột 3: Mô tả - Màu dịu mắt */}
                    <p className="flex-1 text-[#334155] leading-relaxed">
                        I have a dream to go to FPT University because they have great potential for me.
                        I am ready to connect with people in a friendly environment.
                    </p>
                </div>

                {/* ITEM 2 */}
                <div className="flex flex-col md:flex-row gap-4 mb-8 pb-8 border-b border-gray-300">
                    <p className="flex-1 text-slate-500 font-medium">
                        1999 - 2100
                    </p>
                    <h3 className="flex-1 text-xl font-bold text-[#0F172A]">
                        ATC
                    </h3>
                    <p className="flex-1 text-[#334155] leading-relaxed">
                        I never know what happens in the future but I will try my best to do it.
                    </p>
                </div>

                {/* ITEM 3 */}
                <div className="flex flex-col md:flex-row gap-4 mb-8 pb-8 border-b border-gray-300">
                    <p className="flex-1 text-slate-500 font-medium">
                        1999 - 2100
                    </p>
                    <h3 className="flex-1 text-xl font-bold text-[#0F172A]">
                        ABC Project
                    </h3>
                    <p className="flex-1 text-[#334155] leading-relaxed">
                        I never know what happens in the future but I will try my best to do it.
                    </p>
                </div>

                {/* ITEM 4 - Item cuối cùng có thể bỏ border-b nếu muốn (thêm class last:border-none) */}
                <div className="flex flex-col md:flex-row gap-4 mb-8 pb-8 border-b border-gray-300 last:border-none">
                    <p className="flex-1 text-slate-500 font-medium">
                        1999 - 2010
                    </p>
                    <h3 className="flex-1 text-xl font-bold text-[#0F172A]">
                        Ú à
                    </h3>
                    <p className="flex-1 text-[#334155] leading-relaxed">
                        I never know what happens in the future but I will try my best to do it.
                    </p>
                </div>
            </div>
        </section>
    );
}
export default Roadmap;