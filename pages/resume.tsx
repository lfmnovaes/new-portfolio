import Bar from '../components/Bar';
import { languages, tools } from '../data';

const resume = () => {
  return (
    <div className="px-6 py-2">
      {/* edu & exp */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Computer Science</h5>
            <p className="font-semibold">
              Federal University of Rio de Janeiro (UFRJ)
            </p>
            <p className="my-3">Lorem ipsum dolor sit</p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Intern</h5>
            <p className="font-semibold">COPPE-UFRJ</p>
            <p className="my-3">Lorem ipsum dolor sit</p>
          </div>
        </div>
      </div>
      {/* lang & tools */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages and Frameworks</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar data={language} key={i} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools and Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar data={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
