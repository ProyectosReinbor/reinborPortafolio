import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">
            {/* Glow central */}
            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.35, 0.7, 0.35] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[560px] h-[560px] bg-purple-600/30 rounded-full blur-3xl"
            />

            {/* Contenido */}
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-500 to-fuchsia-500 text-transparent bg-clip-text"
            >
                Reinbor
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="relative z-10 mt-6 text-gray-400 max-w-xl"
            >
                Desarrollador web y creador de contenido. Construyo proyectos reales y
                enseño cómo hacerlos.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="relative z-10 flex gap-4 mt-10"
            >
                <a
                    href="#projects"
                    className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition shadow-[0_0_25px_#a855f7]"
                >
                    Ver proyectos
                </a>
            </motion.div>
        </section>
    );
}
