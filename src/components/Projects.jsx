import AnchorTag from "./Anchor"
import Paragraph from "./ProjectPara"
import { motion , useAnimation } from "motion/react"
import AnimatedLetter from "./AnimatedLetters"
const Projects = ({content}) => {
   
    return(
        <motion.div
         className="lg:w-[60%] h-auto min-h-[70vh] grid gap-3 ">
            {content.map(content => {
                const controls = useAnimation()
                return(
                   <AnchorTag 
                    key={content.link}
                    href={content.link}>                  
                    <motion.div 
                     onHoverStart={() => controls.start("hover")}
                     onHoverEnd={() => controls.start("rest")}
                     className="relative border-b-2 p-1 pb-5 grid  gap-2 h-auto min-h-[20vh]">
                        <AnimatedLetter
                         letters={content.title}
                        />
                         <motion.img
                         initial={{scale:0, rotate:0}}
                         animate={controls}
                         variants={{
                            hover:{ scale:1.3,rotate:10},
                            rest:{scale:0}
                         }}
                         transition={{type:"spring", visualDuration:0.5, bounce:0.25, damping:10 , stiffness:50}}
                         className="absolute w-[200px] right-0 rounded-md" 
                         src={content.src} 
                         alt="" />
                        <Paragraph
                         className="text-[12px] tracking-wide"
                         content={<><b className="text-[#61b2e4]">desc:</b> {content.description}</>}
                        />
                        <Paragraph
                         className="text-[12px] tracking-wide"
                         content={<><b className="text-[#61b2e4]">feature:</b> {content.features}</>}
                        />
                        <span className="text-[12px] tracking-wide">{<><b className="text-[#61b2e4]">tools:</b> {content.tools}</>}</span>
                    </motion.div>
                  </AnchorTag>
                )
            })}
        </motion.div>
    )
}

export default Projects