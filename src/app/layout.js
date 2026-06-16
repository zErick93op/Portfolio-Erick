import "./globals.css";
import Navbar from "../components/Navbar"

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body>
        <div className="relative min-h-screen bg-black">

          {/*Glow Principal (Recuerda Erick tipo circulo Principal como en Figma*/}
         <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#541557] opacity-36 blur-[120px] rounded-full"></div>

          {/*Glow secundario (Recuerda Erick tipo circulo Principal como en Figma*/}
         <div className="absolute -top-40 -left-40 w-[300px] h-[300px] bg-[#C355C9] opacity-57 blur-[120px] rounded-full"></div>
          <div className="relative z-10">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}