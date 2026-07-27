
// 3. components/Navbar.tsx
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const sections = [
    { id: 'projects', label: 'Proyectos' },
    { id: 'content', label: 'Contenido' },
]

export default function Navbar() {
    const [active, setActive] = useState('')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50)
            if (window.scrollY < 50) setActive('')
            sections.forEach(s => {
                const el = document.getElementById(s.id)
                if (!el) return
                const rect = el.getBoundingClientRect()
                if (window.scrollY >= rect.top + 50) {
                    setActive(s.id)
                }
            })
        }

        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <motion.nav
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
        >
            <div
                className={`flex items-center gap-8 px-8 ${scrolled ? 'py-3' : 'py-4'} rounded-2xl bg-black/60 backdrop-blur-xl border border-purple-500/30 transition-all duration-300 shadow-[0_0_30px_#a855f7]`}
            >
                {/* Logo */}
                <img src="/logo.png" alt="reinbor" className="w-8 h-8" />

                {sections.map(s => (
                    <a
                        key={s.id}
                        href={`/#${s.id}`}
                        className={`text-sm transition-all duration-200 ${active === s.id
                            ? 'text-purple-400 drop-shadow-[0_0_8px_#a855f7]'
                            : 'text-gray-300 hover:text-purple-400 hover:drop-shadow-[0_0_12px_#a855f7]'
                            }`}
                    >
                        {s.label}
                    </a>
                ))}
            </div>
        </motion.nav>
    )
}