'use client';
import localFont from "next/font/local";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";

const asimovian = localFont({ 
    src: "../app/fonts/Asimovian-Regular.ttf"
})

export default function Contact() {
    useEffect(()=> {
    AOS.init(); }, [])
    return (
        <section id="contact" className={`${asimovian.className} h-screen flex items-center justify-center`}>
            <div className="relative bg-[#541557] flex items-center justify-center h-[40%] w-[100%] flex-col gap-[10px]">
                <div className="absolute inset-0 bg-gradient-to-b from-black to-[#C355C9] opacity-50" />
                <h3 className="relative text-white font-bold text-[2rem] md:text-[2.5rem] lg:text-[2.5rem] text-center"  data-aos="fade-right" data-aos-duration="3000">¿Listo para llevar tu idea al siguiente nivel?</h3>
                <p className="relative text-white lg:text-[1.3rem] md:text-[1.3rem] text-center"  data-aos="fade-left" data-aos-duration="3000">Diseñemos una experiencia moderna y profesional.</p>
                <a href="https://wa.me/51982471341" target="_blank" className="relative text-white text-[2rem] lg:text-[2.2rem] md:text-[2.5rem] font-bold bg-[#ffff]/10 rounded px-[25px] py-[1px] border-[1px] border-[#E2E8F0]/20 text-center"  data-aos="fade-right" data-aos-duration="3000">Trabajemos juntos</a>
            </div>
        </section>
    )
}
