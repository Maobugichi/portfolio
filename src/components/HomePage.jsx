import Projects from "./project/Projects"
import Nav from "./Nav"
import Intro from "./Intro"
import Main from "./Main"
import Container from "./Container"
import content from "../contents"
import Footer from "./footer"
const HomePage = () => {
    return(
     <Container className="overflow-hidden">
        <Nav/>
        <Main>
            <div className="w-[90%] overflow-hidden mx-auto flex flex-col justify-between h-auto min-h-[80vh]">
                <Intro/>
                <Projects
                 content={content.slice(0,3)}
                />
            </div>
        </Main>
        <Footer/>
     </Container> 
    )
}

export default HomePage