/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

import { FiArrowUpRight } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      key: 1,
      img: "/acc_web.png",
      project: "Affinity Capital Corp Website",
      link: "https://affinitycorp.net/",
      description: `Build a React.js website application for Affinity Capital Corp a SEC-Licensed Mutual Fund Distributor that received its license in October 2019.`,
      techs: ["React", "Ant Design", "AWS Lightsail", "Docker", "NGINX"],
    },
    {
      key: 1,
      img: "/nvestmo.png",
      project: "Nvestmo Portal",
      link: "https://affinity.nvestmo.com/home",
      description: `Build a client portal for Affinity Capital Corp using React.js framework. User can invest, redeem, fund switch and track their investment.`,
      techs: [
        "React",
        "Ant Design",
        "AWS Lightsail",
        "AWS S3",
        "Docker",
        "NGINX",
        "Strapi",
        "PostgreSQL",
      ],
    },
    {
      key: 2,
      img: "/path-finder.png",
      project: "Path Finder",
      link: "https://jjuanzo.github.io/path-finder/",
      description: `A visual and interactive tool to demonstrate graph pathfinding algorithms.`,
      techs: ["React.js", "Vite", "Typescript", "Tailwind CSS"],
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
