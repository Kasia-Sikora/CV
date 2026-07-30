import { useState, useCallback, Fragment } from 'react';
import Modal from './Modal';
import './Projects.scss';

import { useInView } from '../hooks/useActiveSection';
import { projects } from './ProjectsContent/ProjectsData';

const projectsByKey = new Map(projects.map((project) => [project.key, project]));

export const ProjectContent = ({ projectName }: { projectName: string }) => {
  const project = projectsByKey.get(projectName);
  if (!project) return <div></div>;
  const { Content } = project;
  return <Content />;
};

const Projects = () => {
  const [selectedKey, setSelectedKey] = useState<string>();
  const selected = selectedKey ? projectsByKey.get(selectedKey) : undefined;
  const closeModal = useCallback(() => setSelectedKey(undefined), []);
  const [ref, inView] = useInView<HTMLElement>()

  return (
    <>
      <section className='projects sectionVerticalRhythm' id="projects" ref={ref}>
        <div className={inView ? 'inView' : ''}>
          <p className="eyebrowLabel">Projects</p>
          <h2>Selected work</h2>
          <div className="cardsContainer">
            {projects.map((project) => (
              <div className="card" key={project.key}>
                <button onClick={() => setSelectedKey(project.key)}>
                  <img src={project.img} alt="" className={project.isLogo ? 'logo' : undefined} />
                  <div className="cardContent">
                    <div className="cardHeader">
                      <h4>{project.title}</h4>
                      <div className="meta">{project.date}</div>
                    </div>
                    <p>{project.description}</p>
                    <ul>
                      {project.stack.map((tech, index) => (
                        <Fragment key={tech}>
                          {index > 0 && <li aria-hidden="true">·</li>}
                          <li>{tech}</li>
                        </Fragment>
                      ))}
                    </ul>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {selected && (
        <Modal
          openModal={!!selected}
          onClose={closeModal}
          title={selected.title}
          wide={selected.key === 'frontend-challenges'}
        >
          <ProjectContent projectName={selected.key} />
        </Modal>
      )}
    </>
  );
};

export default Projects;
