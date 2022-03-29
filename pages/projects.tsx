import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectsNavbar from '../components/ProjectsNavbar';
import { my_projects } from '../data';
import { Category } from '../types';
import { motion } from 'framer-motion';
import { fadeInFadeOut, fadeInUp, stagger } from '../animation';
import Head from 'next/head';

const Projects = () => {
  const [projects, setProjects] = useState(my_projects);
  const [active, setActive] = useState('all');
  const [showDetail, setShowDetail] = useState<number | null>(null);

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
    <motion.div
      className="px-5 py-2 overflow-y-scroll"
      style={{ height: '65vh' }}
      variants={fadeInFadeOut}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Web Developer | Projects | lfmnovaes</title>
      </Head>
      <ProjectsNavbar categoryFilter={categoryFilter} active={active} />
      <motion.div
        className="relative grid grid-cols-12 gap-4 my-3"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {projects.map((project, i) => (
          <motion.div
            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
            key={i}
            variants={fadeInUp}
          >
            <ProjectCard
              project={project}
              showDetail={showDetail}
              setShowDetail={setShowDetail}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
