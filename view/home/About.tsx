/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <div className="pt-12 lg:pt-24 text-slate-400">
      <h1 className="block font-bold text-sm text-slate-300 lg:hidden">
        ABOUT
      </h1>
      <p className="mt-8 lg:mt-0">
        I am thrilled to present to you a comprehensive collection of my skills,
        projects, and experiences as a Full Stack Developer. With a passion for
        creating innovative and efficient web applications, I have dedicated my
        career to mastering both front-end and back-end technologies to deliver
        seamless user experiences.
      </p>

      <br />

      <p>
        My main focus these days is building applications for our clients and
        staff at{' '}
        <a
          className="transition-all text-slate-300 font-bold hover:text-teal-400"
          href="https://affinitycorp.net/"
          target="_blank"
        >
          Affinity Capital Corp
        </a>
        . Throughout my journey, I have cultivated expertise in a wide range of
        programming languages, frameworks, and tools.
      </p>

      <br />

      <p>
        I invite you to explore my{' '}
        <a
          className="transition-all text-slate-300 font-bold hover:text-teal-400"
          href="https://affinitycorp.net/"
          target="_blank"
        >
          projects
        </a>{' '}
        and witness firsthand my dedication to creating innovative and impactful
        digital solutions
      </p>
    </div>
  );
};

export default About;
