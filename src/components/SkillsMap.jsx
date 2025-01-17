import skills from "./Skills"
import SkillBox from "./SkillBox"
const SkillMap = () => {
    return(
      <>
        {skills.map(skill => (
          <SkillBox>
            {skill.icon}
            <span>{skill.tool}</span>
          </SkillBox>
        )) }
      </>
     
    )
}

export default SkillMap