import localFont from "next/font/local"

const asimovian = localFont({
    src: "../app/fonts/Asimovian-Regular.ttf"
})

export default function Projects() {
    return (
        <section id="projects" className={`${asimovian.className} min-h-screen bg-000 px-[40px] py-[50px] flex flex-col`}>
            <h2 className="text-white text-[40px] font-bold mb-8">Proyectos</h2>
            <div className="mx-auto w-full max-w-[1200px]">
                <div className="grid gap-6 md:grid-cols-[300px_620px] w-fit mx-auto">
                    <div className="rounded-[30px] bg-[#541557] p-8 text-white w-[300px] h-[302] justify-self-end flex items-center justify-center text-center shadow-[inset_100px_0px_0px_rgba(0,0,0,0.35)]">
                        <h3 className="text-2xl font-semibold">Soon . .</h3>
                    </div>
                    <div className="rounded-[30px] bg-[#541557] p-8 text-white flex items-center justify-center text-center shadow-[inset_100px_0px_0px_rgba(0,0,0,0.35)]">
                        <h3 className="text-2xl font-semibold">Soon . .</h3>
                    </div>
                    <div className="rounded-[30px] bg-[#541557] p-8 text-white w-[300px] h-[302] justify-self-end flex items-center justify-center text-center shadow-[inset_100px_0px_0px_rgba(0,0,0,0.35)] ">
                        <h3 className="text-2xl font-semibold">Soon . .</h3>
                    </div>
                    <div className="rounded-[30px] bg-[#541557] p-8 text-white flex items-center justify-center text-center shadow-[inset_100px_0px_0px_rgba(0,0,0,0.35)]">
                        <h3 className="text-2xl font-semibold">Soon . .</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}