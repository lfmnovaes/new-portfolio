import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Sidebar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <Image
        src="https://i.imgur.com/ZdZ5JOK.jpg"
        alt="my avatar"
        className="mx-auto rounded-full"
        height="128px"
        width="128px"
        quality="100"
      />
      <h2 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green-500 dark:text-green">Luis</span> Fernando
      </h2>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Web Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 hover:text-dark"
        href="/assets/Resume_lfmn.pdf"
        download="Resume_lfmn.pdf"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a>
      {/* socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 md:w-full">
        <a
          href="https://github.com/lfmnovaes/"
          target="_blank"
          rel="noreferrer"
          aria-label="github"
        >
          <AiFillGithub className="w-8 h-8 text-gray-800 cursor-pointer dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-500" />
        </a>
        <a
          href="https://www.linkedin.com/in/lfmnovaes/"
          target="_blank"
          rel="noreferrer"
          aria-label="linkedin"
        >
          <AiFillLinkedin className="w-8 h-8 text-gray-800 cursor-pointer dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-500" />
        </a>
        <a
          href="https://twitter.com/lfmnovaes"
          target="_blank"
          rel="noreferrer"
          aria-label="twitter"
        >
          <AiFillTwitterCircle className="w-8 h-8 text-gray-800 cursor-pointer dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-500" />
        </a>
      </div>
      {/* location */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Rio de Janeiro, Brazil</span>
        </div>
        <p className="my-2">lfmnovaes@gmail.com</p>
        <p className="my-2">+55 21 99349-0642</p>
      </div>
      {/* email/theme buttons */}
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400 focus:outline-none hover:bg-gradient-to-r hover:from-blue-400 hover:to-green-400"
        onClick={() => window.open('mailto:lfmnovaes@gmail.com')}
        type="button"
      >
        Email me
      </button>
      <button
        onClick={toggleTheme}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-400 hover:bg-gradient-to-r hover:from-blue-400 hover:to-green-400"
        type="button"
      >
        {theme === 'light' ? 'Dark ' : 'Light '}
        theme
      </button>
    </>
  );
};

export default Sidebar;
