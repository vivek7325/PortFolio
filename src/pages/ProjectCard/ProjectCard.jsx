import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectCard.css'

const ProjectCard = ({ project }) => {
    console.log(project.name);
    console.log(project.description);
    return (
        <div className='project'>
            <h3>{project.name}</h3>
            {project.imgsrc && (<img src={project.imgsrc} alt= "img"/>)}
            <p className='project_description'>{project.description}</p>
            {project.stack && (
                <ul className='project_stack'>
                    {project.stack.map((item, index) => (
                        <li key={index} className='project_stack-item'>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
            {project.sourceCode && (
                <a
                    href={project.sourceCode}
                    aria-label='github'
                    className='link link--icon'
                >
                    <GitHubIcon />
                </a>
            )}
            
            {project.livePreview && (
                <a
                    href={project.livePreview}
                    aria-label='live preview'
                    className='link link--icon'
                >
                    <LaunchIcon />
                </a>
            )}
        </div>
    );
};

export default ProjectCard;