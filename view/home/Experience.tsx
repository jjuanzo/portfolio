/* eslint-disable react/no-unescaped-entities */
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      key: 1,
      img: '2020 - PRESENT',
      company: 'Affinity Capital Corp.',
      link: 'https://affinitycorp.net/',
      position: 'Full Stack Developer',
      description: `Develop and styled web apps for clients and agents to invest, redeem, fund switch and track investment, anytime and anywhere. Including the desktop app for admin to manage customer data, transactions and reports.`,
      techs: ['React', 'Next.js', 'Electron', 'Node.js', 'Strapi', 'AWS'],
    },
    {
      key: 2,
      img: 'MAR - JUN 2019',
      company: 'Corlife',
      link: 'https://www.linkedin.com/company/corlife-insurance-agency-inc-/about/',
      position: 'Internship',
      description: `Work with the UI team to engineer and improve major features of Corlife web app. Including the desktop app for admin to manage agents data, transactions and reports.`,
      techs: ['HTML', 'CSS', 'Javascript', 'jQuery', 'C#'],
    },
  ];

  return (
    <div className="pt-12 rounded-sm text-slate-400 lg:pt-24">
      <h1 className="block font-bold text-sm text-slate-300 lg:hidden">
        EXPERIENCE
      </h1>

      {experiences.map((item) => (
        <a
          className="transition-all mb-4 group grid grid-cols-8 rounded-sm cursor-pointer lg:p-4 lg:hover:bg-slate-50/5"
          href={item.link}
          key={item.key}
          target="_blank"
        >
          <p className="col-span-8 mt-1 text-xs mb-2 sm:col-span-2 sm:text-sm sm:mb-0">
            {item.img}
          </p>
          <div className="col-span-8 sm:col-span-6">
            <div className="flex">
              <h1 className="transition-all font-semibold text-slate-200 group-hover:text-teal-400">
                {item.company}
              </h1>
              <FiArrowUpRight className="transition-all mt-2 ml-1 group-hover:mt-0 group-hover:ml-2 group-hover:text-teal-400" />
            </div>
            <h2 className="text-sm text-slate-500">{item.position}</h2>
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

      <br />
      <a
        className="flex items-center group hover:text-slate-200"
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="border-solid border-teal-400 group-hover:border-b">
          View Full Résumé
        </span>{' '}
        <FiArrowRight className="transition-all ml-2 group-hover:ml-4" />
      </a>
    </div>
  );
};

export default Experience;
