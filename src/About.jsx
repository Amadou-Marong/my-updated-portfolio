import { motion } from "framer-motion";
import aboutImg from "./assets/workplace.jpg";

const About = () => {
  return (
    <div
      className="py-10 text-white h-auto max-w-[1400px] mx-auto bg-gradient-to-b from-gray-500 to-gray-800 left-1/2"
      id="about"
    >
      <div className="flex sm:flex-row flex-col-reverse items-center justify-between md:gap-6 gap-12 px-10 mx-auto">
        {/* Text Section */}
        <motion.div
          className=""
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
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
              <p className="text-xl text-justify text-gray-400 my-8">
                I thrive in dynamic environments and enjoy collaborating with
                teams to bring ideas to life. My goal is to continually grow and
                push the boundaries of what's possible, delivering exceptional
                results that exceed expectations. When I'm not working, you can
                find me playing football, exploring new technologies, reading
                books, sketching, or chatting.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-[500] h-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <img
            src={aboutImg}
            alt="about img"
            className="object-cover rounded-full w-[40vw] backdrop-invert bg-white/30 object-top transition duration-200 hover:scale-110 cursor-pointer"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
