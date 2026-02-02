import { motion } from "framer-motion";

export default function AnimatedGrid() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Grid */}
            <motion.div
                initial={{ backgroundPositionY: "0%" }}
                animate={{ backgroundPositionY: "100%" }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="
          absolute inset-0
          bg-[linear-gradient(rgba(168,85,247,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.15)_1px,transparent_1px)]
          bg-[size:40px_40px] 
        "
            />

            {/* Fade inferior */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/40 to-black" />
        </div>
    );
}
