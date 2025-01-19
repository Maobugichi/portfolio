import ListItem from "./ListItem"
import Paragraph from "./ProjectPara"
import UnorderedList from "./UnorderedList"
import AnchorTag from "./Anchor"
import { Link } from "react-router-dom"
import { motion } from "motion/react"
const Intro = () => {   
    return(
        <motion.div
         initial={{opacity:0,x:-200}}
         whileInView={{opacity:1,x:0}}
         transition={{type:"tween"}}
         className=" h-auto min-h-[60vh] w-full lg:w-1/2 grid">
            <div className="grid">
                <h1 className="text-2xl font-bold">Hello,</h1>
                <Paragraph
                className="text-sm w-[95%]"
                content={<>Hello, I'm <span>Maobu</span>, a frontend engineer with a passion for building scalable, responsive, and visually stunning websites. I'm dedicated to delivering exceptional user experiences. I'm always in a constant state of learning, growing, and pushing the boundaries of what's possible.Explore my projects and let my work speak for itself.</>}
                />
            </div>     

            <UnorderedList className="flex flex-col gap-3">
                <Link to="/portfolio/skillset">
                    <ListItem
                    className="hover:text-[#61b2e4] transition-colors duration-700 ease-linear flex items-center gap-1"
                    content="Skills"
                    pointer={<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-4 h-4 group-hover:text-purple-300 transition-all duration-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.25 15.5a.75.75 0 0 1-.75-.75V7.56L7.28 17.78a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L16.44 6.5H9.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75Z"></path></svg>}
                    />
                </Link>
                <Link to="/portfolio/allprojects">
                    <ListItem
                    className="hover:text-[#61b2e4] transition-colors duration-700 ease-linear flex items-center gap-1"
                    content="All Projects"
                    pointer={<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-4 h-4 group-hover:text-purple-300 transition-all duration-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.25 15.5a.75.75 0 0 1-.75-.75V7.56L7.28 17.78a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L16.44 6.5H9.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75Z"></path></svg>}
                    />
                </Link>
                <Link to="/portfolio/aboutme">
                    <ListItem
                    className="hover:text-[#61b2e4] transition-colors duration-700 ease-linear flex items-center gap-1"
                    content="More about Me"
                    pointer={<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-4 h-4 group-hover:text-purple-300 transition-all duration-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.25 15.5a.75.75 0 0 1-.75-.75V7.56L7.28 17.78a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L16.44 6.5H9.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75Z"></path></svg>}
                    />
                 </Link> 
            </UnorderedList>

            <UnorderedList className="flex w-[90%]  lg:w-[70%] justify-between cursor-pointer">
                
                <AnchorTag
                 href="https://www.linkedin.com/in/emekaemman-maobugichi-986a05276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                >
                    <ListItem
                    className="flex text-sm items-center gap-1 transition-colors duration-150 ease-out hover:text-[#61b2e4]"
                    img={<svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 72 72">
                        <rect width={50} height={50} x={11} y={11} fill="#61b2e4" rx={3}></rect>
                        <path fill="#fff" d="M20 30h6v21h-6z"></path>
                        <circle cx={23} cy={22} r={3.5} fill="#fff"></circle>
                        <path fill="#fff" d="M42.5 35c-2.209 0-4 1.168-4 4.5V51h-6V30h6v2.21h-.002A7.98 7.98 0 0 1 44.5 29.5c4.418 0 8 3.3 8 9V51h-6V39.5c0-3.332-1.79-4.5-4-4.5"></path>
                        <g fill="none" stroke="#000" strokeWidth={2}>
                            <rect width={50} height={50} x={11} y={11} strokeMiterlimit={10} rx={3}></rect>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20 30h6v21h-6z"></path>
                            <circle cx={23} cy={22} r={3.5} strokeLinecap="round" strokeLinejoin="round"></circle>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M42.5 35c-2.209 0-4 1.168-4 4.5V51h-6V30h6v2.21h-.002A7.98 7.98 0 0 1 44.5 29.5c4.418 0 8 3.3 8 9V51h-6V39.5c0-3.332-1.79-4.5-4-4.5"></path>
                        </g>
                    </svg>}
                    content="Linkedln"
                    pointer={<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-4 h-4 group-hover:text-purple-300 transition-all duration-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.25 15.5a.75.75 0 0 1-.75-.75V7.56L7.28 17.78a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L16.44 6.5H9.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75Z"></path></svg>}
                    />
                </AnchorTag>
                <AnchorTag
                  href="https://github.com/Maobugichi" 
                >
                    <ListItem
                    className="flex text-sm items-center gap-1  transition-colors duration-150 ease-out hover:text-[#61b2e4]"
                    img={<svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 48 48">
                            <g fill="#fff" clipRule="evenodd">
                            <path d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"></path>
                            <path d="M19.1833 45.4716C18.9898 45.2219 18.9898 42.9973 19.1833 38.798C17.1114 38.8696 15.8024 38.7258 15.2563 38.3667C14.437 37.828 13.6169 36.1667 12.8891 34.9959C12.1614 33.8251 10.5463 33.64 9.89405 33.3783C9.24182 33.1165 9.07809 32.0496 11.6913 32.8565C14.3044 33.6634 14.4319 35.8607 15.2563 36.3745C16.0806 36.8883 18.0515 36.6635 18.9448 36.2519C19.8382 35.8403 19.7724 34.3078 19.9317 33.7007C20.1331 33.134 19.4233 33.0083 19.4077 33.0037C18.5355 33.0037 13.9539 32.0073 12.6955 27.5706C11.437 23.134 13.0581 20.2341 13.9229 18.9875C14.4995 18.1564 14.4485 16.3852 13.7699 13.6737C16.2335 13.3589 18.1347 14.1343 19.4734 16.0001C19.4747 16.0108 21.2285 14.9572 24.0003 14.9572C26.772 14.9572 27.7553 15.8154 28.5142 16.0001C29.2731 16.1848 29.88 12.7341 34.5668 13.6737C33.5883 15.5969 32.7689 18.0001 33.3943 18.9875C34.0198 19.9749 36.4745 23.1147 34.9666 27.5706C33.9614 30.5413 31.9853 32.3523 29.0384 33.0037C28.7005 33.1115 28.5315 33.2855 28.5315 33.5255C28.5315 33.8856 28.9884 33.9249 29.6465 35.6117C30.0853 36.7362 30.117 39.948 29.7416 45.247C28.7906 45.4891 28.0508 45.6516 27.5221 45.7347C26.5847 45.882 25.5669 45.9646 24.5669 45.9965C23.5669 46.0284 23.2196 46.0248 21.837 45.8961C20.9154 45.8103 20.0308 45.6688 19.1833 45.4716Z"></path>
                            </g>
                        </svg>}
                    content="Github"
                    pointer={<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-4 h-4 group-hover:text-purple-300 transition-all duration-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.25 15.5a.75.75 0 0 1-.75-.75V7.56L7.28 17.78a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L16.44 6.5H9.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75Z"></path></svg>}
                    />
                </AnchorTag>    

                <AnchorTag
                 href="mailto:immansamuel846@gmail.com"
                >
                    <ListItem
                    className="flex text-sm items-center gap-1  transition-colors duration-150 ease-out hover:text-[#61b2e4]"
                    img={ <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 24 24">
                            <g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} color="#000">
                                <path d="m7 7.5l2.942 1.74c1.715 1.014 2.4 1.014 4.116 0L17 7.5"></path>
                                <path d="M10.5 19.5a116 116 0 0 1-1.401-.027c-3.149-.079-4.723-.118-5.854-1.255c-1.131-1.136-1.164-2.67-1.23-5.737a69 69 0 0 1 0-2.953c.066-3.067.099-4.6 1.23-5.737C4.376 2.655 5.95 2.616 9.099 2.537a115 115 0 0 1 5.802 0c3.149.079 4.723.118 5.854 1.254s1.164 2.67 1.23 5.737c.009.455.014.668.015.972"></path>
                                <path d="M19 17a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m0 0v.5a1.5 1.5 0 0 0 3 0V17a4.5 4.5 0 1 0-4.5 4.5"></path>
                            </g>
                        </svg>}
                    content="Email"
                    pointer={<svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-4 h-4 group-hover:text-purple-300 transition-all duration-300" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.25 15.5a.75.75 0 0 1-.75-.75V7.56L7.28 17.78a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L16.44 6.5H9.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75Z"></path></svg>}
                    />
                 </AnchorTag>
            </UnorderedList>
        </motion.div>
    )
}

export default Intro