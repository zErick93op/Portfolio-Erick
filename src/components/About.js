import localFont from "next/font/local";

const asimovian = localFont({
  src: "../app/fonts/Asimovian-Regular.ttf"
})

export default function About() {
  return (
    <section id="aboutme" className={`${asimovian.className} py-[50px] px-[40px] min-h-screen flex items-center gap-[156px]`}>
      <div className="flex flex-col w-[780px]">
        <h2 className="text-[40px] font-bold mb-[15px] text-white">
          Sobre mí
        </h2>

        <p className="text-white text-[20px] leading-relaxed ml-[23%]">
          Hola, me llamo Erick. Soy estudiante de Ingeniería de Software y me apasiona el desarrollo web, especialmente el área de Frontend. Me enfoco en crear interfaces simples, funcionales, responsivas y fáciles de usar, buscando siempre una buena experiencia para el usuario.
        </p>

        <p className="text-white text-[20px] mt-4 ml-[24%]">
         Disfruto aprender constantemente sobre tecnología, diseño web e informática, y seguir mejorando mis habilidades en cada proyecto que desarrollo.
        </p>
      </div>
      <div className="">
        <h2 className="max-w-2xl mx-auto text-white text-[40px] mb-[24px]">Mi Stack</h2>
        <div className="flex flex-wrap gap-[90px] items-center justify-center bg-white/10 py-[20px] px-[20px] rounded-[30px] border-[1px] border-[#E2E8F0] w-[687px]">
          <img src="/logos/Python.png" alt="Python"/>
          <img src="/logos/Astro.png" alt="Astro"/>
          <img src="/logos/Bootstrap.png" alt="Bootstrap"/>
          <img src="/logos/Figma.png" alt="Figma"/>
          <img src="/logos/Html.png" alt="Html"/>
          <img src="logos/Css.png" alt="Css"/>
          <img src="logos/Javascript.png" alt="JavaScript"/>
        </div>
      </div>
    </section>
  );
}