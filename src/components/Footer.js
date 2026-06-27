import localFont from "next/font/local";

const asimovian = localFont({
    src: "../app/fonts/Asimovian-Regular.ttf"    
})

export default function Footer() {
    return (
        <footer className={`${asimovian.className} flex items-center justify-center px-[90px] py-[20px] border-t border-[#E2E8F0]/50 text-white`}>
                <p className="text-white text-center">©2026 Erick. Todos los Derechos Reservados.</p>
        </footer>
    )
}