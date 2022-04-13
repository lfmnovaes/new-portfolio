import Bar from '../components/Bar';
import { languages, tools } from '../data';
import { motion } from 'framer-motion';
import { fadeInFadeOut, fadeInUp } from '../animation';
import Head from 'next/head';

const Resume = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={fadeInFadeOut}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Web Developer | Resume | lfmnovaes</title>
      </Head>
      {/* edu & exp */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h3 className="my-3 text-2xl font-bold">Education</h3>
          <div>
            <h4 className="my-2 text-xl font-bold">Microverse</h4>
            <p className="font-semibold">Online coding school</p>
          </div>
          <div className="py-2">
            <h4 className="my-2 text-xl font-bold">Computer Science</h4>
            <p className="font-semibold">
              Federal University of Rio de Janeiro (UFRJ)
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h3 className="my-3 text-2xl font-bold">Experience</h3>
          <div>
            <h4 className="my-2 text-xl font-bold">Intern</h4>
            <p className="font-semibold">COPPE-UFRJ</p>
            <p className="my-3">C# and ASP.Net Web Developer</p>
          </div>
        </motion.div>
      </div>
      {/* lang & tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="my-3 text-2xl font-bold">Languages and Frameworks</h3>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar data={language} key={i} />
            ))}
          </div>
        </div>
        <div>
          <h3 className="my-3 text-2xl font-bold">Other tech & software</h3>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar data={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
