import AnchorTag from "./Anchor"
import Paragraph from "./ProjectPara"
import { motion } from "motion/react"
import AnimatedLetter from "./AnimatedLetters"

const ProjectItem = ({ content, index }) => {
    return(
        <AnchorTag href={content.link}>                  
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              
                className="group relative border-l-2 border-transparent  pl-4 py-6 transition-all duration-300"
            >
              
                <div className="relative mb-4 overflow-hidden rounded-lg aspect-video bg-slate-900">
                    <motion.img
                       
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-fill opacity-80 group-hover:opacity-100 transition-opacity" 
                        src={content.src} 
                        alt={content.title}
                    />
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Title */}
                <div className="font-display text-2xl md:text-3xl font-bold mb-3 text-white group-hover:text-[#61b2e4] transition-colors">
                    <AnimatedLetter letters={content.title} />
                </div>
                
                {/* Description */}
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

                {/* Tools */}
                <div className="mt-3 pt-3 border-t border-slate-800">
                    <span className="text-[#61b2e4] font-sans font-semibold text-sm">tools: </span>
                    <span className="text-slate-400 text-sm">{content.tools}</span>
                </div>

               
                <motion.div
                    initial={{ x: -5, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                    className="absolute top-6 -left-2 text-[#61b2e4]"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </motion.div>
            </motion.div>
        </AnchorTag>
    )
}

const Projects = ({content}) => {
    return(
        <motion.div 
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "tween" }}
            className="w-full lg:w-1/2 h-auto lg:h-[190vh] py-16 flex flex-col"
        >
           
            <div className="mb-6 flex-shrink-0">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-2">
                    Featured Work
                </h2>
                <div className="h-1 w-20 bg-[#61b2e4] rounded-full"></div>
            </div>

           
            <div className="flex-1 scrollbar-thin overflow-y-auto pr-4 space-y-4  scrollbar-thin  scrollbar-track-slate-900 lg:max-h-[calc(200vh-12rem)]">
                {content.map((item, index) => (
                    <ProjectItem key={item.link} content={item} index={index} />
                ))}
            </div>
        </motion.div>
    )
}

export default Projects