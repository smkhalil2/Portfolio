
import ProjectCard from './ProjectCard'
import { projectData } from './data';

const Projects = () => {
    const projects = projectData.map(project =>(
        <ProjectCard title={project.title} description={project.description} link={project.gitHubLink} img={project.img} />
    ))
    return (
        <div id='projects' className='p-16'>
            <h1 className='ml-16 text-3xl font-bold mb-4'>Projects</h1>
            {/* Project List */}
            <div className='flex flex-wrap ml-12 '>
                {projects}
                {/* <ProjectCard title='LilyHoney' description='eCommerce Site UI' img='/images/slideshow/IribeCenter.jpg' link='https://www.figma.com/file/q9tbUjKEpxhwjOu3cShHQu/LilyHoney-eCom-V1?type=design&node-id=62%3A78&mode=design&t=KvRpr78gJwVsfAxC-1'/> */}
            </div>

        </div>
    )
}

export default Projects; 