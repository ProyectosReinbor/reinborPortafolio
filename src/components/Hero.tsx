
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-500 to-fuchsia-500 text-transparent bg-clip-text"
            >
                Reinbor
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 text-gray-400 max-w-xl"
            >
                Desarrollador web y creador de contenido. Construyo proyectos reales y enseño cómo hacerlos.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex gap-4 mt-10"
            >
                <a href="#projects" className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition">
                    Ver proyectos
                </a>
                <a href="https://youtube.com" target="_blank" className="px-6 py-3 rounded-xl border border-purple-500 hover:bg-purple-500/10 transition">
                    YouTube
                </a>
            </motion.div>
        </section>
    )
}