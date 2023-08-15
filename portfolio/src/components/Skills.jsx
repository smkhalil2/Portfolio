import { skills } from "./data";
import SkillBadge from "./SkillBadge";

const Skills =  () => {
    // console.log(skills);
    const skillBadges = skills.map(skill => (
            <SkillBadge key={skill.name} name={skill.name} logo={skill.logo} color={skill.color} />
    ))
    return(
        <div>
            <ul className='flex md:flex-row flex-wrap justify-evenly '>
            {skillBadges}
            </ul>
        </div>
    )
}

export default Skills;