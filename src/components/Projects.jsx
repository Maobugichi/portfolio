import PropTypes from "prop-types"
import { motion } from "motion/react"
import { ProjectItem } from "./project/projectItem"

const Projects = ({content = []}) => {
    return(
        <motion.div 
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "tween" }}
            className="w-full  h-auto py-10 md:py-16 flex flex-col"
        >
           
            <div className="mb-6 flex-shrink-0">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-2">
                    Featured Work
                </h2>
                <div className="h-1 w-20 bg-[#61b2e4] rounded-full"></div>
            </div>

           
            <div className=" grid grid-cols-1 md:grid-cols-3 h-auto min-h-[90%]  gap-6">
                {content.map((item, index) => (
                    <ProjectItem key={item.link} content={item} index={index} />
                ))}
            </div>
        </motion.div>
    )
}

export default Projects

Projects.propTypes = {
    content: PropTypes.shape({
            link: PropTypes.string,
            src: PropTypes.string,
            title: PropTypes.string,
            description: PropTypes.string,
            features: PropTypes.string,
            tools: PropTypes.string,
    }).isRequired,
}