import SkillMap from "./SkillsMap"
import Nav from "./Nav"
import Main from "./Main"
import Container from "./Container"
import Button from "./Button"
const SkillSet = () => {
    return(
        <Container>
         <Nav/>
         <Main>
            <div className="w-full flex flex-col items-center gap-14 h-[75vh]">
                <h1 className="text-2xl text-center">My skillset</h1>
                <div className="lg:w-1/2 w-[95%] justify-between flex flex-wrap mx-auto h-auto min-h-[40vh] ">
                    {<SkillMap/>}
                </div>
                <Button/>
            </div>
         </Main>
        </Container>
    )
}

export default SkillSet