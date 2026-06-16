import localFont from "next/font/local";

const asimovian = localFont({
  src: "../app/fonts/Asimovian-Regular.ttf",
});


export default function Navbar() {
  return (
    <header className={`${asimovian.className} flex justify-between items-center px-[90px] py-[20px] border-b border-[#E2E8F0]/50 text-white`}>

      {/* LOGO */}
      <h1 className="text-3xl" >
        <a href="#herosection">zErick93op</a>
      </h1>

      {/* NAV LINKS */}
      <nav className="flex gap-6 text-sm">
        <a href="#aboutme">Sobre mí</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contáctame</a>
      </nav>


      {/*Logo Whastapp*/}
      <a href="" target="_blank">
      <img src="/whatsapp.png" alt="WhatsApp" className="w-7 h-7"/>
      </a>
    </header>
  );
}


``