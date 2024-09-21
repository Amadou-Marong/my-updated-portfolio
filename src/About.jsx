import aboutImg from './assets/workplace.jpg';
import AnimatedSection from './Components/AnimatedSection'; // Import your animated component

const About = () => {
  return (
    <AnimatedSection>
      <div
        className="py-10 text-white h-auto max-w-[1400px] mx-auto bg-gradient-to-b from-gray-500 to-gray-800 left-1/2"
        id="about"
      >
        <div className="flex sm:flex-row flex-col-reverse items-center justify-between md:gap-6 gap-12 px-10 mx-auto">
          <div className="">
            <div className="p-2">
              <div className="text-gray-300 my-3 max-w-[500px]">
                <h3 className="text-5xl text-justify leading-7 text-gray-200 font-semibold">
                  About <span className="text-blue-400">Me</span>
                </h3>
                <p className="text-xl text-justify text-gray-400 my-8">
                Hello! I'm Amadou Marong, a passionate Web Developer | Junior
                Software Engineer with a knack for creating innovative
                solutions. With a background in computer science, IT Support, I
                have honed my skills in software engineering, frontend development using
                in-demand technologies like Vue.js, React.js, and UX/UI design,
                as well as some backend with Laravel. I've worked on a variety of exciting projects.
              </p>
              </div>
            </div>
          </div>
          <div>
            <div className="w-[500] h-full">
              <img
                src={aboutImg}
                alt="about img"
                className="object-cover rounded-full w-[40vw] backdrop-invert bg-white/30  object-top transition duration-200 hover:scale-110 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
