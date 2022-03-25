import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectsNavbar from '../components/ProjectsNavbar';
import { my_projects } from '../data';
import { Category } from '../types';

const projects = () => {
  const [projects, setProjects] = useState(my_projects);
  const [active, setActive] = useState('all');

  const categoryFilter = (category: Category | 'all') => {
    if (category === 'all') {
      setProjects(my_projects);
      setActive(category);
      return;
    }
    const newProjectsArray = my_projects.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newProjectsArray);
    setActive(category);
  };

  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: '65vh' }}>
      <ProjectsNavbar categoryFilter={categoryFilter} active={active} />
      <div className="relative grid grid-cols-12 gap-4 my-3">
        {projects.map((project, i) => (
          <div className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200">
            <ProjectCard project={project} key={i} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default projects;
