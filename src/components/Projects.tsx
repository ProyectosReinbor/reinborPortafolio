import { motion } from "framer-motion";

const projects = [
    {
        slug: "eco-del-amanecer",
        title: "Eco del Amanecer",
        desc: "Videojuego hecho en Godot para la primer Game Jam de la Universidad de los Llanos, Villavicencio Colombia",
        tech: ["Godot", "Game Jam", "GDScript"],
        url: "https://reinbor.itch.io/eco-del-amanecer",
    },
    {
        slug: "3daodrag",
        title: "Reinos Ancestrales",
        desc: "Juego RPG multijugador con sistema de combate, inventario y tienda",
        tech: ["Node.js", "SQLite", "WebSocket", "React"],
    },
    {
        slug: "rematicos",
        title: "Remáticos Storefront",
        desc: "Tienda virtual de productos con catálogo, carrito y pasarela de pagos",
        tech: ["Next.js", "Prisma", "PostgreSQL", "TypeScript"],
        adminUrl: "https://rematicosadmin.reinbor.cloud/",
    },
    {
        slug: "tempo-noble",
        title: "Tempo Noble",
        desc: "Catalogo elegante de relojes 1.1, pedidos por Whatsapp",
        tech: ["React", "Tailwind", "TypeScript"],
    },
    {
        slug: "licorcity",
        title: "LicorCity",
        desc: "Catalogo de productos, carrito, domicilio mensaje por Whatsapp",
        tech: ["React", "Tailwind", "TypeScript"],
    },
    {
        slug: "fileexporter",
        title: "File exporter",
        desc: "Contexto para IA del codigo de tu proyecto, Aplicacion .exe y version web",
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
                className="grid md:grid-cols-2 gap-15"
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

                        <div className="flex gap-4 mt-6">
                            <button
                                onClick={() => window.open(p.url || `https://${p.slug}.reinbor.cloud`)}
                                className="text-purple-400 hover:underline"
                            >
                                Ver proyecto →
                            </button>
                            {p.adminUrl && (
                                <button
                                    onClick={() => window.open(p.adminUrl)}
                                    className="text-purple-400 hover:underline"
                                >
                                    Admin →
                                </button>
                            )}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
