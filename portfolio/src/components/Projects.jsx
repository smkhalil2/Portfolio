
import ProjectCard from './ProjectCard2'
import { projectData } from './data';

const Projects = () => {
    const projects = projectData.map(project =>(
        <ProjectCard key={project.id} title={project.title} description={project.description} category={project.category} link={project.gitHubLink} img={project.img} img_classes={project.img_classes} slides={project.slides} skills={project.skills} tech={project.tech}/>
    ))
    return (
        <div id='projects' className='flex flex-col lg:p-16 p-4 lg:mt-0 mt-16 items-center'>
            <h1 className='text-3xl font-semibold mb-4 text-[#000000] dark:text-[#F0F0F0]'>Projects</h1>
            {/* Project List */}
            <div className='flex flex-col w-auto items-center'>
                {projects}
                {/* <ProjectCard title='LilyHoney' description='eCommerce Site UI' img='/images/slideshow/IribeCenter.jpg' link='https://www.figma.com/file/q9tbUjKEpxhwjOu3cShHQu/LilyHoney-eCom-V1?type=design&node-id=62%3A78&mode=design&t=KvRpr78gJwVsfAxC-1'/> */}
            </div>

        </div>
    )
}

export default Projects; 