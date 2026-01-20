
// 4. components/Projects.tsx
const projects = [
    {
        title: 'Sistema de cuentas',
        desc: 'App para gestión de mesas y facturación',
        tech: ['React', 'Tailwind', 'TypeScript'],
        demo: '#',
        repo: '#'
    }
]

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Proyectos</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {projects.map(p => (
                    <div key={p.title} className="rounded-2xl bg-zinc-900 p-6 border border-purple-500/20 hover:border-purple-500 transition">
                        <h3 className="text-xl font-semibold">{p.title}</h3>
                        <p className="text-gray-400 mt-2">{p.desc}</p>
                        <div className="flex gap-2 mt-4 flex-wrap">
                            {p.tech.map(t => (
                                <span key={t} className="text-sm px-3 py-1 rounded-full bg-purple-500/10 text-purple-400">
                                    {t}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-4 mt-6">
                            <a href={p.demo} className="text-purple-400 hover:underline">Demo</a>
                            <a href={p.repo} className="text-purple-400 hover:underline">Código</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
