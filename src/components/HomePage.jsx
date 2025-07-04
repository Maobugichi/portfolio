import Projects from "./Projects"
import Nav from "./Nav"
import Intro from "./Intro"
import Main from "./Main"
import Container from "./Container"
import content from "../contents"
const HomePage = () => {
    return(
     <Container>
        <Nav/>
        <Main>
            <div className="w-[90%] mx-auto flex lg:flex-row flex-col justify-between h-auto min-h-[80vh]">
                <Intro/>
                <Projects
                 content={content.slice(0,4)}
                />
            </div>
        </Main>
     </Container> 
    )
}

export default HomePage