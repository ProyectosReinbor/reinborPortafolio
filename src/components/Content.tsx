export default function Content() {
    return (
        <section id="content" className="py-24 px-6 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold">Contenido</h2>
            <p className="text-gray-400 mt-4">
                Tutoriales de desarrollo web en YouTube y TikTok.
            </p>
            <div className="flex justify-center gap-6 mt-8">
                <a className="text-purple-400 hover:underline" href="https://youtube.com" target="_blank">YouTube</a>
                <a className="text-purple-400 hover:underline" href="https://tiktok.com" target="_blank">TikTok</a>
            </div>
        </section>
    )
}