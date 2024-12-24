import aboutImg from './assets/aboutImg.jpeg';
import AnimatedSection from './Components/AnimatedSection'; // Import your animated component

const About = () => {
  return (
    <AnimatedSection>
      <div className="py-10 text-white max-w-[1400px] mx-auto bg-gradient-to-b from-gray-500 to-gray-800" id="about">
        <div className="flex sm:flex-row flex-col-reverse items-center justify-between gap-6 px-10">
          <div className="text-gray-300 max-w-[500px]">
            <h3 className="text-5xl text-gray-200 font-semibold">
              About <span className="text-blue-400">Me</span>
            </h3>
            <p className="text-xl text-gray-400 my-8">
              Hi, I'm Amadou Marong, a Web Developer and Junior Software Engineer specializing in frontend development with Vue.js and React.js, with experience in UX/UI design and backend development with Laravel and Django.
            </p>
          </div>
          <div className="w-[500px]">
            <img src={aboutImg} alt="about img" className="object-cover rounded-full w-[40vw] bg-white/30 transition duration-200 hover:scale-110 cursor-pointer" />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
