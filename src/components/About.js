'use client';
import localFont from "next/font/local";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const asimovian = localFont({
  src: "../app/fonts/Asimovian-Regular.ttf"
})

export default function About() {
  useEffect(() => {
    AOS.init;
  }, []);
  return (
    <section id="aboutme" className={`${asimovian.className} py-[50px] px-[40px] min-h-screen flex items-center gap-[156px] overflow-x-clip flex-col lg:flex-row`}>
      <div className=" w-auto lg:flex flex-col w-[780px]" data-aos="fade-right" data-aos-duration="3000">
        <h2 className="text-[40px] font-bold mb-[15px] text-white">
          Sobre mí
        </h2>

        <p className="text-white ml-[0px] text-[20px]  lg:text-[20px] lg:ml-[24%]">
          Hola, me llamo Erick. Soy estudiante de Ingeniería de Software y me apasiona el desarrollo web, especialmente el área de Frontend. Me enfoco en crear interfaces simples, funcionales, responsivas y fáciles de usar, buscando siempre una buena experiencia para el usuario.
        </p>

        <p className="text-white text-[20px] mt-4 ml-[0] lg:text-[20px] lg:ml-[24%]">
         Disfruto aprender constantemente sobre tecnología, diseño web e informática, y seguir mejorando mis habilidades en cada proyecto que desarrollo.
        </p>
      </div>
      <div className="" data-aos="fade-left" data-aos-duration="3000">
        <h2 className="max-w-2xl mx-auto text-white text-[40px] mb-[24px]">Mi Stack</h2>
        <div className="flex flex-col w-[300px] lg:flex-row md:flex-row flex-wrap gap-[90px] items-center justify-center bg-white/10 py-[20px] px-[20px] rounded-[30px] border-[1px] border-[#E2E8F0] lg:w-[687px] md:w-[687px]">
          <img data-aos="flip-up" src="/logos/Python.png" alt="Python"/>
          <img data-aos="flip-up" src="/logos/Astro.png" alt="Astro"/>
          <img data-aos="flip-up" src="/logos/Bootstrap.png" alt="Bootstrap"/>
          <img data-aos="flip-up" src="/logos/Figma.png" alt="Figma"/>
          <img data-aos="flip-up" src="/logos/Html.png" alt="Html"/>
          <img data-aos="flip-up" src="logos/Css.png" alt="Css"/>
          <img data-aos="flip-up" src="logos/Javascript.png" alt="JavaScript"/>
        </div>
      </div>
    </section>
  );
}