import { TypeAnimation } from 'react-type-animation';
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai';
import profile from './assets/img1.png';

const Hero = () => {
  return (
    <div className="my-7 md:my-0 max-w-[1300px] md:h-[100vh] mx-auto grid md:grid-cols-4 place-items-center">
      <div className='max-w-[400px] flex flex-row md:flex-col'>
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
          <a href="./downloads/MyCV_2024.pdf" download="AmadouMarong_CV_2024" title='Download CV'>
            <button className='mt-6 p-2 bg-gray-700 rounded-xl max-w-[280px] text-white'>
              Download CV
            </button>
          </a>
        </div>
      </div>
      <div className='md:col-span-2 md:ml-28'>
        <img src={profile} alt="profile" className='w-[200px] md:w-[400px] h-auto rounded-full backdrop-invert bg-white/30'/>
      </div>
      <div className='text-5xl flex flex-row md:flex-col gap-10'>
        <a href="https://github.com/Amadou-Marong"><AiFillGithub /></a>
        <a href="https://www.linkedin.com/in/amadou-marong-b27008291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><AiFillLinkedin /></a>
        <a href="marongamadou6@gmail.com"><AiFillMail /></a>
      </div>
    </div>
  );
};

export default Hero;
