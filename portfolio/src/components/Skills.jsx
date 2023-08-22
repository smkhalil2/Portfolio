import { skills } from "./data";
import SkillBadge from "./SkillBadge";

const Skills =  () => {
    // console.log(skills);
    const skillBadges = skills.map(skill => (
            <SkillBadge key={skill.name} name={skill.name} logo={skill.logo} color={skill.color} img_classes={skill.img_classes} />
    ))
    return(
        <div>
            <ul className='flex lg:flex-row flex-wrap lg:justify-between '>
            {skillBadges}
            </ul>
        </div>
    )
}

export default Skills;