'use client'
import localFont from "next/font/local";
import { useState } from "react";

const asimovian = localFont({
  src: "../app/fonts/Asimovian-Regular.ttf",
});

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`${asimovian.className} flex justify-between px-[20px] py-[20px] items-center sm:px-[90px] sm:py-[20px] border-b border-[#E2E8F0]/50 text-white`}>

      {/* LOGO */}
      <h1 className="text-3xl" >
        <a href="#herosection">zErick93op</a>
      </h1>

      {/* NAV LINKS */}
        <nav className="relative">
          <ul className=" hidden gap-6 text-sm md:flex gap-6 text-sm ">
            <li><a href="#aboutme">Sobre mí</a></li>
            <li><a href="#projects">Proyectos</a></li>
            <li><a href="#contact">Contáctame</a></li>
          </ul>

          {/*Boton de Barra de Hamburguesa*/}
          <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>{isOpen ? "✕" : "☰"}</button>
          
          {isOpen && (           
            <ul className="flex flex-col gap-4 px-6 py-4 md:hidden absolute top-[2.5rem] right-[-100px] bg-white/10 rounded-sm z-50">
              <li><a href="#aboutme">Sobre mí</a></li>
              <li><a href="#projects">Proyectos</a></li>
              <li><a href="#contact">Contáctame</a></li>
            </ul>
          )}
        </nav>


      {/*Logo Whastapp*/}
      <a href="" target="_blank">
      <img src="/whatsapp.png" alt="WhatsApp" className="w-7 h-7"/>
      </a>
    </header>
  );
}


``