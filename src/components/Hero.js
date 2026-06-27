'use client';
import { useEffect } from 'react';
import { Inter } from "next/font/google"
import AOS from 'aos';
import 'aos/dist/aos.css';

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});


export default function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="herosection" className="min-h-screen flex flex-col items-center justify-between py-[50px] px-[40px] text-white overflow-x-clip sm:flex-col gap-[15px] lg:flex-row">

      {/*Texto la Izquierda*/}
      <div className="max-w-4xl" data-aos="fade-right" data-aos-duration="3000">
        <p className={`${inter.className} text-2xl lg:text-4xl mb-2 font-bold`}>Hola,</p>
        <h1 className={`${inter.className} text-2xl lg:text-4xl mb-2 font-bold`}>Me llamo Erick</h1>
        <h2 className={`${inter.className} text-2xl lg:text-4xl mb-2 font-bold`}>Desarrollador Frontend Jr.</h2>
        <p className={`${inter.className} text-2xl mb-[29px] lg:text-4xl mb-[39px] font-bold`}>Soy desarrollador frontend en formación y en constante aprendizaje y me enfoco en mejorar mis habilidades cada día para crear cosas simples, funcionales y experiencias web atractivas.</p>

      {/*Botones*/}
      <div className="flex items-center justify-center gap-3">

          <button className={`${inter.className} border border-white/50 px-4 py-2 text-sm rounded-[1rem] font-bold hover:shadow-[#541557] hover:shadow-lg`}>
            Sobre mí
          </button>

          <button className={`${inter.className} border border-white/50 px-4 py-2 text-sm rounded-[1rem] font-bold hover:shadow-[#541557] hover:shadow-lg`}>
            Contáctame
          </button>

      </div>

      </div>

      {/*Imagen a la derecha*/}
      <div className=" w-[100%] h-[430px] sm:w-[455px] sm:h-[618px] lg:w-[450px] lg:h-[657] rounded-xl" data-aos="fade-left" data-aos-duration="3000">
      <img src="/fotoportfolio.png" alt="Foto Portfolio" className="w-[100%] h-[100%]"/>
      </div>
    </section>
  );
}