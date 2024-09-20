import project1 from './assets/gnpc-login-page.png'
import project2 from './assets/birthdays.png'
// import project3 from './assets/tours.png'
import project3 from './assets/AdminDashboard.png'
import project4 from './assets/strapi.png'
import project5 from './assets/menu.png'
import project6 from './assets/Nice-Website-Design.jpg'
import work from './assets/my-work.png'
import { AiFillChrome, AiFillGithub } from 'react-icons/ai'
const Portfolio = () => {
    return (
      <div className='pt-16 pb-10 sm:pb-16 lg:gb-16 max-w-[1400] mx-auto] px-10' id='projects'>
        <div className="grid md:grid-cols-2 mb-6">
          <div>
            <img src={work} className='w-[400px] mx-auto h-[300px]  object-cover object-top transition duration-200 hover:scale-110 rounded-lg cursor-pointer' alt="" />
          </div>
          <div className="text-gray-800 my-auto text-left">
            <h3 className="text-5xl text-center leading-7 text-gray-800 font-semibold mb-8 tracking-tight mt-10">
              My <span className="text-blue-400">Work</span>
            </h3>
            <p className="text-lg leading-relaxed max-w-[500px]">
              Welcome to my portfolio! Here, you'll find a selection of my recent projects, 
              showcasing my skills in design, development, and project management. Each project 
              highlights my ability to deliver high-quality results and my commitment to continuous improvement.
            </p>
          </div>
        </div>

        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6'>
          <div className="rounded-xl bg-gradient-to-b from-gray-500 to-gray-800 overflow-hidden shadow-xl z-10">
            <a href="https://ahmad-todos.netlify.app" className="group col-span-3">
              <img src={project1} alt="project 1" className='h-[200px] w-full object-cover object-top transition duration-200 group-hover:scale-110 rounded-lg'/>
            </a>
            <div className="p-4">
              <h2 className='text-gray-200'>Project #1</h2>
              <p className="text-gray-400">
                A user interface for a login page. of the GNPC Login Page
              </p>
            </div>

            <div className="flex flex-row gap-3 justify-end text-white mb-3 mr-3">
              <a href="#" className="cursor-pointer"><AiFillGithub className='w-[35px] h-auto'/> </a>
              <a href="https://ahmad-todos.netlify.app" className="cursor-pointer"><AiFillChrome className='w-[35px] h-auto'/> </a>
            </div>  
          </div>
          <div className="rounded-xl bg-gradient-to-b from-gray-500 to-gray-800 overflow-hidden shadow-xl z-10">
            <a href="https://ahmad-birthdays.netlify.app" className="group col-span-3">
              <img src={project2} alt="project 2" className='h-[200px] w-full object-cover object-top transition duration-200 group-hover:scale-110 rounded-lg'/>
            </a>
            <div className="p-4">
              <h2 className='text-gray-200'>Project #2</h2>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet.
              </p>
            </div>

            <div className="flex flex-row gap-3 justify-end text-white mb-3 mr-3">
              <a href="#" className="cursor-pointer"><AiFillGithub className='w-[35px] h-auto'/> </a>
              <a href="https://ahmad-birthdays.netlify.app" className="cursor-pointer"><AiFillChrome className='w-[35px] h-auto'/> </a>
            </div>  
          </div>
          
          <div className="rounded-xl bg-gradient-to-b from-gray-500 to-gray-800 overflow-hidden shadow-xl z-10">
            <a href="https://ef7-studious-hubble.circumeo-apps.net/" className="group col-span-3">
              <img src={project3} alt="project 1" className='h-[200px] w-full object-cover object-top transition duration-200 group-hover:scale-110 rounded-lg'/>
            </a>
            <div className="p-4">
              <h2 className='text-gray-200'>Ticketting Management System</h2>
              <p className="text-gray-400">
                a ticketting management system for a our IT Department to help and manage IT related issues
                a have a test of the app login with username as admin and password: admin
              </p>
            </div>

            <div className="flex flex-row gap-3 justify-end text-white mb-3 mr-3">
              <a href="#" className="cursor-pointer"><AiFillGithub className='w-[35px] h-auto'/> </a>
              <a href="https://ef7-studious-hubble.circumeo-apps.net/" className="cursor-pointer"><AiFillChrome className='w-[35px] h-auto'/> </a>
            </div>  
          </div>
          
          <div className="rounded-xl bg-gradient-to-b from-gray-500 to-gray-800 overflow-hidden shadow-xl z-10">
            <a href="" className="group col-span-3">
              <img src={project4} alt="project 4" className='h-[200px] w-full object-cover object-top transition duration-200 group-hover:scale-110 rounded-lg'/>
            </a>
            <div className="p-4">
              <h2 className='text-gray-200'>Project #4</h2>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet.
              </p>
            </div>

            <div className="flex flex-row gap-3 justify-end text-white mb-3 mr-3">
              <a href="#" className="cursor-pointer"><AiFillGithub className='w-[35px] h-auto'/> </a>
              <a href="#" className="cursor-pointer"><AiFillChrome className='w-[35px] h-auto'/> </a>
            </div>  
          </div>
          
          <div className="rounded-xl bg-gradient-to-b from-gray-500 to-gray-800 overflow-hidden shadow-xl z-10">
            <a href="https://ahmad-food-menu.netlify.app" className="group col-span-3">
              <img src={project5} alt="project 5" className='h-[200px] w-full object-cover object-top transition duration-200 group-hover:scale-110 rounded-lg'/>
            </a>
            <div className="p-4">
              <h2 className='text-gray-200'>Project #5</h2>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet.
              </p>
            </div>

            <div className="flex flex-row gap-3 justify-end text-white mb-3 mr-3">
              <a href="#" className="cursor-pointer"><AiFillGithub className='w-[35px] h-auto'/> </a>
              <a href="https://ahmad-food-menu.netlify.app" className="cursor-pointer"><AiFillChrome className='w-[35px] h-auto'/> </a>
            </div>  
          </div>
          
          <div className="rounded-xl bg-gradient-to-b from-gray-500 to-gray-800 overflow-hidden shadow-xl z-10">
            <a href="https://ourhomepage.netlify.app" className="group col-span-3">
              <img src={project6} alt="project 6" className='h-[200px] w-full object-cover object-top transition duration-200 group-hover:scale-110 rounded-lg'/>
            </a>
            <div className="p-4">
              <h2 className='text-gray-200'>Ecomerce Website</h2>
              <p className="text-gray-400">
                an Ecommerce website for my web2 project work
              </p>
            </div>

            <div className="flex flex-row gap-3 justify-end text-white mb-3 mr-3">
              <a href="#" className="cursor-pointer"><AiFillGithub className='w-[35px] h-auto'/> </a>
              <a href="https://ourhomepage.netlify.app" className="cursor-pointer"><AiFillChrome className='w-[35px] h-auto'/> </a>
            </div>  
          </div>


        </div> 
      </div>
    );
}
export default Portfolio;