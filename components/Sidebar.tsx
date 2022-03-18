import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';

const Sidebar = () => {
  return (
    <div>
      <img
        src="https://i.imgur.com/ZdZ5JOK.jpg"
        alt="my avatar"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green-600">Luis</span> Fernando
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Developer</p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
        href=""
        download="name"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>
      {/* social icon */}
      <div className="flex justify-around w-9/12 mx-auto my-5 md:w-full">
        <a href="https://github.com/lfmnovaes/">
          <AiFillGithub className="w-8 h-8 text-gray-700 cursor-pointer hover:text-gray-900" />
        </a>
        <a href="https://www.linkedin.com/in/lfmnovaes/">
          <AiFillLinkedin className="w-8 h-8 text-gray-700 cursor-pointer hover:text-gray-900" />
        </a>
        <a href="https://twitter.com/lfmnovaes">
          <AiFillTwitterCircle className="w-8 h-8 text-gray-700 cursor-pointer hover:text-gray-900" />
        </a>
      </div>
      {/* address */}
      <div
        className="py-4 my-5 bg-gray-200"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Rio de Janeiro, Brazil</span>
        </div>
        <p className="my-2">lfmnovaes@gmail.com</p>
        <p className="my-2">+55 21 99349-0642</p>
      </div>
      {/* email button */}
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => window.open('mailto:lfmnovaes@gmail.com')}
        type="button"
      >
        Email me
      </button>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400"
        type="button"
      >
        Toggle theme
      </button>
    </div>
  );
};

export default Sidebar;
