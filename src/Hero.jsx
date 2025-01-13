import { TypeAnimation } from 'react-type-animation';
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai';
import { motion } from 'framer-motion';
import profile from './assets/img1.png';
import AnimatedSection from './Components/AnimatedSection';

const Hero = () => {
  return (
    <AnimatedSection>
    <div className="my-7 md:my-0 max-w-[1300px] md:h-[100vh] mx-auto grid md:grid-cols-4 place-items-center">
      {/* Animated intro text */}
      <motion.div 
        className="max-w-[400px] flex flex-row md:flex-col"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <p className="md:text-5xl sm:text-3xl text-xl tracking-tight mr-2">
          Hi, I Am <span className='font-extrabold italic'>Amadou Marong </span><br />
          <TypeAnimation 
            sequence={[
              "Web Developer",
              1000,
              "Web Designer",
              1000,
              "IT Support",
              1000
            ]}
            speed={50}
            repeat={Infinity}
          />
        </p>
        <div>
          {/* <a href="./downloads/Amadou_Marong_CV_2024.pdf" download="Amadou_Marong_CV_2024" title='Download CV'> */}
          <a href="./downloads/MyCV_2024.pdf" download="Amadou_Marong_CV_2024" title='Download CV'>
            <motion.button 
              className='mt-6 p-2 bg-gray-700 rounded-xl max-w-[280px] text-white'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.button>
          </a>
        </div>
      </motion.div>

      {/* Animated profile image */}
      <motion.div 
        className='md:col-span-2 md:ml-28'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <img src={profile} alt="profile" className='w-[200px] md:w-[400px] h-auto rounded-full backdrop-invert bg-white/30'/>
      </motion.div>

      {/* Animated social icons */}
      <motion.div 
        className='text-5xl flex flex-row md:flex-col gap-10'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
      >
        <a href="https://github.com/Amadou-Marong"><AiFillGithub /></a>
        <a href="https://www.linkedin.com/in/amadou-marong-b27008291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><AiFillLinkedin /></a>
        <a href="marongamadou6@gmail.com"><AiFillMail /></a>
      </motion.div>
    </div>
    </AnimatedSection>
  );
};

export default Hero;
