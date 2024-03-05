import { projects } from '../../components/portfolio'
import ProjectCard from '../ProjectCard/ProjectCard'
import './Project.css'

const Project = () => {
  if (!projects.length) return null
  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project} // Pass the project object as the project prop
          />
        ))}
      </div>
    </section>
  );
};

export default Project