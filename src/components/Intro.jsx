import { motion } from "motion/react"
import { AnimatedParagraph } from "./AnimatedParagraph"


const Intro = () => {   
    return(
        <motion.div
         initial={{opacity:0,x:-200}}
         whileInView={{opacity:1,x:0}}
         transition={{type:"tween"}}
         className=" h-auto font-display  w-full grid py-10">
            <div className="grid gap-7">
               
                <h1 className="text-5xl font-bold font-sans">
                  Hello <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
                </h1>
               <AnimatedParagraph
                className="text-lg  md:text-xl tracking-wide leading-loose  w-[95%]"
                content={
                    <>
                    Hey there! I&apos;m <span className="text-[#61B2E4] font-semibold">Maobu</span> , a passionate software engineer who loves crafting
                    <span className="text-[#61B2E4]"> scalable</span>,{" "}
                    <span className="text-[#61B2E4]">responsive</span>, and{" "}
                    <span className="text-[#61B2E4]">visually striking</span> web applications.
                    I thrive on turning ideas into smooth, high-performing digital experiences that not only work beautifully but <i>feel</i> right.
                    Every line of code is a step in my journey to learn, grow, and push the limits of what’s possible.
                    Dive into my projects  let the creativity, precision, and passion behind each one tell the story.
                    </>
                }
                />

            </div>     

           
        </motion.div>
    )
}

export default Intro