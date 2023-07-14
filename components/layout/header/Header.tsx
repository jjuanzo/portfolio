/* eslint-disable react/no-unescaped-entities */
import { AiOutlineFacebook } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { FaGoogle, FaLinkedinIn } from 'react-icons/fa';

import './Header.css';

interface HeaderInterface {
  activeNav: string;
}

const Header = ({ activeNav }: HeaderInterface) => {
  return (
    <div className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-slate-200 text-4xl font-bold sm:text-5xl">
          Joshua Juanzo
        </h1>
        <h2 className="mt-3 text-base font-lg text-slate-200 sm:text-xl">
          Full Stack Developer.
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-400">
          Hi! I'm Joshua Juanzo. A Full Stack Developer based in Makati,
          Philippines.
        </p>

        <nav className="nav hidden lg:block">
          <ul className="mt-6 w-max">
            <li>
              <a
                className={`group flex items-center py-3 ${
                  activeNav === 'about' && 'active'
                }`}
                href="#about"
              >
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                  About
                </span>
              </a>
            </li>
            <li>
              <a
                className={`group flex items-center py-3 ${
                  activeNav === 'exp' && 'active'
                }`}
                href="#experience"
              >
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                  Experience
                </span>
              </a>
            </li>
            <li>
              <a
                className={`group flex items-center py-3 ${
                  activeNav === 'projects' && 'active'
                }`}
                href="#projects"
              >
                <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                  Projects
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <ul className="ml-1 mt-8 flex items-center">
        <li className="mr-5 text-xs">
          <a href="https://github.com/jjuanzo" target="_blank">
            <BsGithub className="block hover:text-slate-200 text-xl text-slate-400" />
          </a>
        </li>
        <li className="mr-5 text-xs">
          <a href="https://www.facebook.com/jajuanzo/" target="_blank">
            <AiOutlineFacebook className="block hover:text-slate-200 text-2xl text-slate-400" />
          </a>
        </li>
        <li className="mr-5 text-xs">
          <a href="mailto:juanzojosh@gmail.com" target="_blank">
            <FaGoogle className="block hover:text-slate-200 text-xl text-slate-400" />
          </a>
        </li>
        <li className="mr-5 text-xs">
          <a
            href="https://www.linkedin.com/in/joshua-juanzo-401025219/"
            target="_blank"
          >
            <FaLinkedinIn className="block hover:text-slate-200 text-xl text-slate-400" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
