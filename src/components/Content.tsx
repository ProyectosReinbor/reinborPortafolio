

// 5. components/Content.tsx
export default function Content() {
    return (
        <section id="content" className="py-24 px-6 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Contenido</h2>
            <p className="text-gray-400 mt-4">
                Sigueme en mis redes sociales donde comparto desarrollo de proyectos y blogs divertidos.
            </p>
            <div className="flex justify-center gap-6 mt-8">
                <a className="text-purple-400 hover:underline" href="https://www.youtube.com/@reinbor_otvel" target="_blank">YouTube</a>
                <a className="text-purple-400 hover:underline" href="https://www.tiktok.com/@reinbor_otvel" target="_blank">TikTok</a>
            </div>
        </section>
    )
}