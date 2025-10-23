import AnchorTag from "./Anchor"
import Paragraph from "./ProjectPara"
import { motion } from "motion/react"
import AnimatedLetter from "./AnimatedLetters"
import { useState } from "react"

const ProjectItem = ({ content }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [hasInteracted, setHasInteracted] = useState(false)
    
    const handleClick = (e) => {
        // On mobile (touch devices), prevent navigation on first tap
        if (!hasInteracted && window.matchMedia('(hover: none)').matches) {
            e.preventDefault()
            setIsHovered(true)
            setHasInteracted(true)
        }
    }
    
    return(
        <AnchorTag href={content.link}>                  
            <motion.div 
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onClick={handleClick}
                className="relative border-b-2 py-5 grid gap-2 h-fit font-display"
            >
                <AnimatedLetter letters={content.title} />
                
                <motion.img
                    initial={{ scale: 0, rotate: 0 }}
                    animate={isHovered ? { 
                        scale: 0.5, 
                        rotate: 10, 
                        x: -150, 
                        y: -80 
                    } : { 
                        scale: 0 
                    }}
                    transition={{
                        type: "spring", 
                        duration: 0.5, 
                        bounce: 0.25
                    }}
                    className="absolute z-50 w-[200px] h-[600px] right-0 rounded-md pointer-events-none" 
                    src={content.src} 
                    alt={content.title}
                />
                
                <Paragraph
                    className="text-lg"
                    content={<><b className="text-[#61b2e4] font-sans">desc:</b> {content.description}</>}
                />
                <Paragraph
                    className="text-lg"
                    content={<><b className="text-[#61b2e4] font-sans">feature:</b> {content.features}</>}
                />
                <span className="text-lg">
                    <b className="text-[#61b2e4] font-sans">tools:</b> {content.tools}
                </span>
            </motion.div>
        </AnchorTag>
    )
}

const Projects = ({content}) => {
    return(
        <motion.div className="lg:w-[60%] overflow-hidden h-auto min-h-[70vh] grid gap-3">
            {content.map(item => (
                <ProjectItem key={item.link} content={item} />
            ))}
        </motion.div>
    )
}

export default Projects