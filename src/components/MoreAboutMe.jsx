import Nav from "./Nav"
import Container from "./Container"
import Main from "./Main"
import Paragraph from "./ProjectPara"
import pfp from "../assets/pfp.jpg"
import Button from "./Button"
const MoreAboutMe = () => {
    return(
        <Container>
            <Nav/>
            <Main>
                <div className=" flex flex-col items-center gap-11 mx-auto w-[90%] lg:w-[80%]">
                    <div className="flex lg:flex-row flex-col items-center justify-between w-full">
                        <img className=" w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full" src={pfp} alt="my photo" />
                        <Paragraph
                        className="lg:w-1/2 text-center lg:text-left"
                        content="Welcome! I'm thrilled you're interested in getting to know me better. As a law student at the University of Nigeria, I never expected to fall in love with web development. But, in 2023, I discovered my passion for coding and dove headfirst into Angela Yu's boot camp in January 2024.
                                Fast forward to July 2024, I built my first project, and it was exhilarating! I also had the privilege of attending the HNG11 cohorts, where I learned from talented developers and expanded my network.
                                Currently, I'm volunteering at Adom Labs, an innovative event planning agency that's revolutionizing the industry. My goal as a developer is to craft applications and software that simplify daily life and make a lasting impact on humanity.
                                I proudly call myself a 'forever noob' because I'm obsessed with learning and growth. I believe that there's always room for improvement, and I'm excited to continue learning and pushing the boundaries of what's possible.
                                Take a look around, and you'll find four of my favorite projects showcased here. I'm looking forward to collaborating with you and creating something amazing together! ❤💡
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