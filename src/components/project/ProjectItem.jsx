import PropTypes from "prop-types"
import { useRef, useState, useEffect } from "react"
import { motion } from "motion/react"
import AnimatedLetter from '../AnimatedLetters'

export const ProjectItem = ({ content, index }) => {
    const scrollRef = useRef(null)
    const [hasOverflow, setHasOverflow] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const el = scrollRef.current
        if (!el) return
        setHasOverflow(el.scrollHeight > el.clientHeight)
    }, [])

    const handleScroll = () => {
        const el = scrollRef.current
        if (!el) return
        setIsScrolled(el.scrollTop > 20)
    }

    return (
        <motion.a
            href={content.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.01 }}
            transition={{ delay: index * 0.1 }}
            className="group relative block px-4 rounded-3xl border border-slate-700/50 
                       hover:border-[#61b2e4]/40 transition-colors duration-300 h-[95%]"
        >
          
            <div
                ref={scrollRef}
                onScroll={handleScroll}
                className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 
                           scrollbar-track-transparent py-6"
            >
              
                <div className="relative overflow-hidden rounded-lg mb-6 aspect-video bg-slate-900">
                    <motion.img
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                        src={content.src}
                        alt={content.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

              
                <div className="font-display text-3xl font-bold mb-3 text-white 
                                group-hover:text-[#61b2e4] transition-colors duration-300">
                    <AnimatedLetter letters={content.title} />
                </div>

              
                <div className="space-y-2 text-slate-400 text-sm md:text-base">
                    <p className="leading-relaxed">
                        <span className="text-[#61b2e4] font-sans font-semibold">desc: </span>
                        {content.description}
                    </p>
                    <p className="leading-relaxed">
                        <span className="text-[#61b2e4] font-sans font-semibold">feature: </span>
                        {content.features}
                    </p>
                </div>

               
                <div className="mt-3 pt-3 border-t border-slate-800">
                    <span className="text-[#61b2e4] font-sans font-semibold text-sm">tools: </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {(content.tools ?? "").split(",").filter(Boolean).map((tool) => (
                            <span
                                key={tool}
                                className="text-xs px-3 py-1 rounded-full bg-[#61b2e4]/10 
                                           text-[#61b2e4] border border-[#61b2e4]/20 
                                           font-mono tracking-wide"
                            >
                                {tool.trim()}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

          
            {hasOverflow && (
                <div
                    className="absolute bottom-0 left-0 right-0 h-20 rounded-b-3xl 
                               pointer-events-none transition-opacity duration-500"
                    style={{ opacity: isScrolled ? 0 : 1 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-b-3xl" />
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5">
                        <motion.div
                            animate={{ y: [0, 4, 0] }}
                            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke="#61b2e4" strokeWidth="2" strokeLinecap="round">
                                <path d="M6 9l6 6 6-6" />
                            </svg>
                        </motion.div>
                        <span className="text-[10px] text-[#61b2e4]/60 font-mono tracking-widest uppercase">
                            scroll
                        </span>
                    </div>
                </div>
            )}

          
            <motion.div
                initial={{ x: -5, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                className="absolute top-6 -left-2 text-[#61b2e4]"
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </motion.div>
        </motion.a>
    )
}

ProjectItem.propTypes = {
    index: PropTypes.number.isRequired,
    content: PropTypes.shape({
        link: PropTypes.string,
        src: PropTypes.string,
        title: PropTypes.string,
        description: PropTypes.string,
        features: PropTypes.string,
        tools: PropTypes.string,
    }).isRequired,
}