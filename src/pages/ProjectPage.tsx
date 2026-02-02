import { useParams, Link } from "react-router-dom";

const projects = {
    "licorcity": {
        title: "LicorCity",
        desc: "Pagina web para la licorera LicorCity, con catalogo de productos. Administraccion de manejo de mesas y facturación.",
        tech: ["React", "Tailwind", "TypeScript"],
        url: "licorcity.reinbor.cloud"
    },
    "fileexporter": {
        title: "File exporter",
        desc: "Herramientas para vibecoding, contexto en txt de los archivos de tu proyecto con sus rutas para copiar, Aplicacion .exe y pagina web",
        tech: ["Nodejs", "html", "electron"],
        url: "fileexporter.reinbor.cloud"
    },
};

export default function ProjectPage() {
    const { slug } = useParams();
    const project = projects[slug as keyof typeof projects];

    if (!project) {
        return <div className="p-20">Proyecto no encontrado</div>;
    }

    return (
        <section className="max-w-4xl mx-auto py-24 px-6">
            <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
            <p className="text-gray-400 mb-6">{project.desc}</p>

            <div className="flex gap-2 flex-wrap">
                {project.tech.map((t) => (
                    <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400"
                    >
                        {t}
                    </span>
                ))}
            </div>

            <a
                href={`https://${project.url}`}
                target="_blank"
                className="block mt-6 text-purple-400 hover:underline"
            >
                Ver proyecto →
            </a>

            <Link to="/" className="inline-block mt-10 text-purple-400 hover:underline">
                ← Volver
            </Link>
        </section>
    );
}
