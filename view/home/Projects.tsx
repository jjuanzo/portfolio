/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

import { FiArrowUpRight } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      key: 1,
      img: '/todoist.png',
      project: 'Todoist Clone',
      link: 'https://affinitycorp.net/',
      description: `A web app todoist clone project that organize your work and life. Todoist makes it easy to go as simple or as complex as you want. Using MERN stack.`,
      techs: ['MongoDB', 'Express', 'React', 'Node'],
    },
    {
      key: 2,
      img: '/todoist.png',
      project: 'Crypto Tracker',
      link: 'https://affinitycorp.net/',
      description: `Crypto Tracker is a web application that helps you track crypto currencies prices, to make your trading easier.`,
      techs: ['MongoDB', 'Express', 'React', 'Node'],
    },
    {
      key: 3,
      img: '/todoist.png',
      project: 'Crypto Tracker',
      link: 'https://affinitycorp.net/',
      description: `Crypto Tracker is a web application that helps you track crypto currencies prices, to make your trading easier.`,
      techs: ['MongoDB', 'Express', 'React', 'Node'],
    },
    {
      key: 4,
      img: '/todoist.png',
      project: 'Crypto Tracker',
      link: 'https://affinitycorp.net/',
      description: `Crypto Tracker is a web application that helps you track crypto currencies prices, to make your trading easier.`,
      techs: ['MongoDB', 'Express', 'React', 'Node'],
    },
    {
      key: 5,
      img: '/todoist.png',
      project: 'Crypto Tracker',
      link: 'https://affinitycorp.net/',
      description: `Crypto Tracker is a web application that helps you track crypto currencies prices, to make your trading easier.`,
      techs: ['MongoDB', 'Express', 'React', 'Node'],
    },
    {
      key: 6,
      img: '/todoist.png',
      project: 'Crypto Tracker',
      link: 'https://affinitycorp.net/',
      description: `Crypto Tracker is a web application that helps you track crypto currencies prices, to make your trading easier.`,
      techs: ['MongoDB', 'Express', 'React', 'Node'],
    },
  ];

  return (
    <div className="pt-12 rounded-sm text-slate-400 lg:pt-24">
      <h1 className="block font-bold text-sm text-slate-300 mb-4 lg:hidden">
        PROJECTS
      </h1>

      {projects.map((item) => (
        <a
          className="transition-all mb-4 group grid grid-cols-8 rounded-sm cursor-pointer lg:p-4 lg:hover:bg-slate-50/5"
          href={item.link}
          key={item.key}
          target="_blank"
        >
          <div className="relative w-52 h-40 col-span-8 mt-1 py-12 order-2 sm:order-1 sm:col-span-2 sm:py-0 sm:w-full sm:h-20">
            <Image
              src={`/portfolio${item.img}`}
              alt="logo"
              fill
              className="top-0 left-0 object-contain float-left w-full"
            />
          </div>
          <div className="col-span-8 order-1 sm:col-span-6 ml-4 sm:order-2">
            <div className="flex">
              <h1 className="transition-all font-semibold text-slate-200 group-hover:text-teal-400">
                {item.project}
              </h1>
              <FiArrowUpRight className="transition-all mt-2 ml-1 group-hover:mt-0 group-hover:ml-2 group-hover:text-teal-400" />
            </div>
            <p className="text-sm mt-2">{item.description}</p>

            <div className="flex flex-wrap mt-6">
              {item.techs.map((tech) => (
                <button
                  key={tech}
                  className="rounded-full bg-teal-400/10 text-xs px-4 py-1.5 text-teal-400 font-semibold m-1"
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Projects;
