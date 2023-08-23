import { Fragment } from "react"
const ProjectDescription = ({isOpen, title, description, skills, link, slides}) => {
    return (
        <Fragment>
            {isOpen && (
                <div className='text-blue-600'>
                    Overlay
                </div>
            )}
        </Fragment>
    )
}

export default ProjectDescription