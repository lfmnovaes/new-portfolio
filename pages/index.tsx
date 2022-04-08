import { NextPage } from 'next';
import { motion } from 'framer-motion';
import { fadeInFadeOut, fadeInUp, stagger } from '../animation';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data';
import Head from 'next/head';

const About: NextPage = () => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={fadeInFadeOut}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Web Developer | Portfolio | lfmnovaes</title>
      </Head>
      <h5 className="my-3 text-base font-medium">
        I have a degree in Computer Science from the Federal University of Rio
        de Janeiro (UFRJ), graduated from Microverse online school, and I also
        have more than 2 years of Web Development experience.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
        <motion.div
          className="grid gap-6 my-3 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service, i) => (
            <motion.div
              variants={fadeInUp}
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
              key={i}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
