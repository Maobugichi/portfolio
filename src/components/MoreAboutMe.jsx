import Nav from "./Nav"
import Container from "./Container"
import Main from "./Main"
import Paragraph from "./ProjectPara"
import pfp from "../assets/pfp.jpg"
import Button from "./Button"
import { AnimatedParagraph } from "./highlight"
const MoreAboutMe = () => {
    return(
        <Container>
            <Nav/>
            <Main>
                <div className=" flex font-display text-left py-10 flex-col items-center gap-11 mx-auto w-[90%] lg:w-[80%]">
                    <div className="flex lg:flex-row flex-col items-center justify-between w-full">
                        <img className=" w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full" src={pfp} alt="my photo" />
                        <AnimatedParagraph
                        className="lg:w-1/2  text-xl leading-8 tracking-wide"
                        content="Welcome! I’m so glad you stopped by. My journey into tech began in an unexpected way  as a law student at the University of Nigeria, I never imagined I’d end up building scalable, production-level web applications. But in 2023, I discovered my passion for software development and enrolled in Angela Yu’s bootcamp in early 2024. Since then, I’ve gone from learning the basics to developing and deploying real-world projects  from e-commerce platforms to digital payment dashboards  using modern tools like React, Node.js, Express, and PostgreSQL. I also had the privilege of participating in the HNG11 cohort, where I collaborated with talented developers and learned to build efficiently under real-world constraints. Today, I’m focused on refining my craft, exploring new technologies, and contributing to impactful projects that solve real problems. My goal as a developer is to create intuitive, scalable applications that improve everyday life and leave a lasting impact. I call myself a forever noob because I believe growth never stops — there’s always something new to learn, a better way to build, and an opportunity to improve. Take a look around  you’ll find some of my favorite projects showcased here. I’m always open to collaborating, learning, and creating something extraordinary together. 🚀💡
                                                        "   
                        />
                    </div>
                    <Button/>
                </div>
                
            </Main>
        </Container>
    )
}

export default MoreAboutMe