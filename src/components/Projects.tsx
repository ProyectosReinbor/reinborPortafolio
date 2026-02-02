import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
    {
        slug: "licorcity",
        title: "LicorCity",
        desc: "Pagina web para la licorera LicorCity, con catalogo de productos. Administraccion de manejo de mesas y facturación.",
        tech: ["React", "Tailwind", "TypeScript"],
    },
    {
        slug: "fileexporter",
        title: "File exporter",
        desc: "Herramientas para vibecoding, contexto en txt de los archivos de tu proyecto con sus rutas para copiar, Aplicacion .exe y pagina web",
        tech: ["Nodejs", "html", "electron"],
    },
];

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
};

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Proyectos</h2>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-10"
            >
                {projects.map((p) => (
                    <motion.div
                        key={p.slug}
                        variants={item}
                        whileHover={{ rotateX: 6, rotateY: -6 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="transform-gpu rounded-2xl bg-zinc-900 p-6 border border-purple-500/20 hover:border-purple-500 shadow-[0_0_30px_#a855f7]"
                    >
                        <h3 className="text-xl font-semibold">{p.title}</h3>
                        <p className="text-gray-400 mt-2">{p.desc}</p>

                        <div className="flex gap-2 mt-4 flex-wrap">
                            {p.tech.map((t) => (
                                <span
                                    key={t}
                                    className="text-sm px-3 py-1 rounded-full bg-purple-500/10 text-purple-400"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        <Link
                            to={`/projects/${p.slug}`}
                            className="inline-block mt-6 text-purple-400 hover:underline"
                        >
                            Ver proyecto →
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
