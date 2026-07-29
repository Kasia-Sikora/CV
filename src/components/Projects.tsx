import { useState, useCallback, Fragment, type ReactElement } from 'react';
import Modal from './Modal';
import './Projects.scss';
import Cv from './ProjectsContent/CV';
import Foodstuff from './ProjectsContent/Foodstuff';
import LifeOfAnts from './ProjectsContent/LifeOfAnts';
import ApiWars from './ProjectsContent/ApiWars';
import Arkanoid from './ProjectsContent/Arkanoid';
import MemoryGame from './ProjectsContent/MemoryGame';
import FrontendChallenges from './ProjectsContent/FrontendChallenges';

type Project = {
  key: string;
  title: string;
  date: string;
  description: string;
  stack: string[];
  img: string;
  alt: string;
  isLogo?: boolean;
  Content: () => ReactElement;
};

const projects: Project[] = [
  {
    key: 'cv',
    title: 'CV',
    date: 'Aug 2020',
    description: 'Interactive resume site with animated sections.',
    stack: ['HTML', 'CSS', 'Angular'],
    img: 'https://raw.githubusercontent.com/Kasia-Sikora/Web-CV/master/src/assets/Screenshot.png',
    alt: 'CV',
    Content: Cv,
  },
  {
    key: 'foodstuff',
    title: 'FoodStuff',
    date: 'Apr 2020',
    description: 'Recipe-sharing app with user accounts and search.',
    stack: ['Spring', 'Angular'],
    img: 'https://raw.githubusercontent.com/Kasia-Sikora/ShoppingListDemo-UI/master/src/assets/screenshots/foodstuff1.png',
    alt: 'Foodstuff',
    Content: Foodstuff,
  },
  {
    key: 'lifeofants',
    title: 'Life of ants',
    date: 'Mar 2020',
    description: 'Desktop colony simulation exploring ant behaviour',
    stack: ['Java FX'],
    img: 'https://raw.githubusercontent.com/Kasia-Sikora/LifeOfAnts/master/src/main/resources/Screenshot.png',
    alt: 'Life of ants',
    Content: LifeOfAnts,
  },
  {
    key: 'apiwars',
    title: 'API Wars',
    date: 'Oct 2019',
    description: 'Data table pulling from public APIs.',
    stack: ['Python', 'JavaScript', 'HTML', 'CSS'],
    img: 'https://raw.githubusercontent.com/Kasia-Sikora/API-WARS/master/static/img/Screenshot.png',
    alt: 'API Wars',
    Content: ApiWars,
  },
  {
    key: 'arkanoid',
    title: 'Arkanoid',
    date: 'Oct 2019',
    description: 'A canvas-based Arkanoid clone with paddle physics and level progression.',
    stack: ['JavaScript', 'CSS', 'HTML'],
    img: 'https://raw.githubusercontent.com/Kasia-Sikora/arkanoid/master/static/img/Screenshot.png',
    alt: 'Arkanoid',
    Content: Arkanoid,
  },
  {
    key: 'memorygame',
    title: 'Memory Game',
    date: 'Oct 2019',
    description: 'Classic card-matching game.',
    stack: ['JavaScript', 'Python'],
    img: 'https://raw.githubusercontent.com/Kasia-Sikora/MemoryGame/master/MemoryGame.jpg',
    alt: 'Memory Game',
    Content: MemoryGame,
  },
  {
    key: 'frontend-challenges',
    title: 'Frontend Mentor Challenges',
    date: '2020',
    description:
      'A collection of Frontend Mentor challenge solutions — responsive layouts built pixel-precise from design specs',
    stack: ['JavaScript', 'SCSS', 'HTML'],
    img: 'https://www.frontendmentor.io/images/logo-desktop.svg',
    alt: 'Frontend Mentor logo',
    isLogo: true,
    Content: FrontendChallenges,
  },
];

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

  return (
    <>
      <section className="projects sectionVerticalRhythm" id="projects">
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
