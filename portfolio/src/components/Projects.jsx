
import ProjectCard from './ProjectCard'
import { projectData } from './data';

const Projects = () => {
    const projects = projectData.map(project =>(
        <ProjectCard key={project.id} title={project.title} description={project.description} link={project.gitHubLink} img={project.img} />
    ))
    return (
        <div id='projects' className='lg:p-16 p-4 lg:mt-0 mt-16'>
            <h1 className='ml-4 text-3xl font-bold mb-4 text-[#574ecc] dark:text-[#F0F0F0]'>Projects</h1>
            {/* Project List */}
            <div className='flex flex-wrap'>
                {projects}
                {/* <ProjectCard title='LilyHoney' description='eCommerce Site UI' img='/images/slideshow/IribeCenter.jpg' link='https://www.figma.com/file/q9tbUjKEpxhwjOu3cShHQu/LilyHoney-eCom-V1?type=design&node-id=62%3A78&mode=design&t=KvRpr78gJwVsfAxC-1'/> */}
            </div>

        </div>
    )
}

export default Projects; 