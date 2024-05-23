import { TypeAnimation } from 'react-type-animation'
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai';
import profile from './assets/img1.png'
const Hero = () => {
  return (
    <div className="my-7 md:my-0 max-w-[1300px] md:h-[100vh] mx-auto grid md:grid-cols-4 place-items-center">
      <div className='max-w-[400px] flex flex-row md:flex-col'>
        {/* <h1>Hi, I'm <span>Amadou Marong</span></h1> */}
        <p className="md:text-5xl sm:text-3xl text-xl tracking-tight mr-2">
            Hi, I Am <span className='font-extrabold italic'>Amadou Marong </span><br />
            <TypeAnimation 
                sequence={[
                    "Web developer",
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
            <button href="/" title='Download CV' className='mt-6 p-2 bg-gray-700 rounded-xl max-w-[280px] text-white'>Download CV</button>
        </div>
      </div>
      <div className='md:col-span-2 md:ml-28'>
        <img src={profile} alt="profile" className='w-[200px] md:w-[400px] h-auto rounded-full backdrop-invert bg-white/30'/>
      </div>
      <div className='text-5xl flex flex-row md:flex-col gap-10 '>
        <a href=""><AiFillGithub /></a>
        <a href=""><AiFillLinkedin /></a>
        <a href=""><AiFillMail /></a>
      </div>
    </div>
  );
};
export default Hero;
