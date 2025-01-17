import content from "../contents"
import Projects from "./Projects"
import Nav from "./Nav"
import Container from "./Container"
import Main from "./Main"
import Button from "./Button"
const AllProjects = () => {
    return(
        <Container>
            <Nav/>
            <Main>
                <div className=" w-[90%] mx-auto flex flex-col gap-8 h-auto pb-3 items-center">
                    <Projects
                     content={content}
                    />
                    <Button/>
                </div>
            </Main>
        </Container>
    )
}

export default AllProjects