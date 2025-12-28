import { useState, useEffect } from "react";

export default function Contact() {
  // State để lưu thời gian thực
  const [time, setTime] = useState(new Date());

  // Hiệu ứng đồng hồ chạy mỗi giây
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Hàm copy email
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("shiroru.dev@gmail.com");
    alert("Đã copy email vào bộ nhớ tạm!");
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto" id="contact">
      {/* Container chính: Màu tối, bo góc lớn */}
      <div className="bg-[#0F172A] text-white rounded-[2.5rem] p-8 md:p-16 flex flex-col justify-between min-h-[450px] relative overflow-hidden shadow-2xl">
        
        {/* === PHẦN TRÊN === */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 z-10">
          
          {/* CỘT TRÁI: Thông tin liên hệ */}
          <div className="space-y-6">
            
            {/* Email + Icon Copy */}
            <div 
                onClick={handleCopyEmail}
                className="group flex items-center gap-3 cursor-pointer w-fit transition-opacity hover:opacity-80"
            >
              {/* Icon Copy (SVG) */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5" />
              </svg>
              
              <h3 className="text-2xl md:text-4xl font-semibold">
                shiroru.dev@gmail.com
              </h3>
            </div>

            {/* Địa điểm & Giờ */}
            <div className="space-y-1 text-gray-400 text-lg md:text-xl font-light">
              <p>Ho Chi Minh City, Vietnam</p>
              {/* Hiển thị giờ real-time */}
              <p className="font-mono text-[#3B82F6]">
                {time.toLocaleTimeString("en-US", { hour12: true })}
              </p>
            </div>
          </div>

          {/* CỘT PHẢI: Social Links */}
          <div className="flex flex-col gap-6 text-xl font-medium">
            <SocialLink href="#" label="LinkedIn" />
            <SocialLink href="#" label="GitHub" />
            <SocialLink href="#" label="Resume" />
          </div>
        </div>

        {/* === PHẦN DƯỚI: Copyright === */}
        <div className="mt-auto pt-12 z-10 flex items-end justify-between text-gray-500 text-sm md:text-base">
          <p>© 2025 Shiroru. All rights reserved.</p>
          <p className="hidden md:block">Designed with ❤️</p>
        </div>

        {/* Trang trí nền (Glow Effect nhẹ) */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
      </div>
    </section>
  );
}

// Component con hiển thị từng link Social (cho gọn code)
function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      className="group flex items-center justify-between gap-4 md:justify-start hover:text-[#3B82F6] transition-colors"
    >
      <span>{label}</span>
      {/* Icon Mũi tên chéo (Arrow Up Right) */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
      </svg>
    </a>
  );
}