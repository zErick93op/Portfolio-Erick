import localFont from "next/font/local";

const asimovian = localFont({ 
    src: "../app/fonts/Asimovian-Regular.ttf"
})

export default function Contact() {
    return (
        <section id="contact" className={`${asimovian.className} h-screen flex items-center justify-center`}>
            <div className="relative bg-[#541557] flex items-center justify-center h-[40%] w-[100%] flex-col gap-[10px]">
                <div className="absolute inset-0 bg-gradient-to-b from-black to-[#C355C9] opacity-50" />
                <h3 className="relative text-white font-bold text-[40px]">¿Listo para llevar tu idea al siguiente nivel?</h3>
                <p className="relative text-white text-[20px]">Diseñemos una experiencia moderna y profesional.</p>
                <a href="https://wa.me/51982471341" target="_blank" className="relative text-white text-[35px] font-bold bg-[#ffff]/10 rounded px-[25px] py-[1px] border-[1px] border-[#E2E8F0]/20">Trabajemos juntos</a>
            </div>
        </section>
    )
}
