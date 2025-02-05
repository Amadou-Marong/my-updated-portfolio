import project1 from './assets/EmployManagementDashboard.png'
import project2 from './assets/MyLeavesPage.png'
// import project3 from './assets/tours.png'
import project3 from './assets/AdminDashboard.png'
// import project4 from './assets/strapi.png'
import project4 from './assets/QuizApp.png'
import project5 from './assets/menu.png'
import project6 from './assets/Nice-Website-Design.jpg'
import work from './assets/aboutImg.jpeg'
import { AiFillChrome, AiFillGithub } from 'react-icons/ai'
import AnimatedSection from './Components/AnimatedSection'
const Portfolio = () => {
    return (
      <AnimatedSection>
      <div className='pt-16 pb-10 sm:pb-16 lg:pb-16 max-w-[1400px] mx-auto px-10' id='projects'>
        <div className="grid md:grid-cols-2 mb-6">
        <div>
          <img src={work} className='w-[400px] mx-auto h-[300px] object-cover object-top transition duration-200 hover:scale-110 rounded-lg cursor-pointer' alt="Work" />
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
        {[{
          img: project1,
          title: 'Employee Management System',
          description: 'An employee management system with modules for managing leaves and tickets. This system helps in organizing and tracking employee information, leave requests, and IT support tickets efficiently.',
          github: '#',
          live: '#'
        }, {
          img: project2,
          title: 'Leave Management System',
          description: 'A comprehensive leave management system that allows employees to apply for leaves, view leave balances, and track leave history. It also includes an approval workflow for managers to review and approve leave requests.',
          github: '#',
          live: 'https://ahmad-birthdays.netlify.app'
        }, {
          img: project3,
          title: 'Ticketing Management System',
          description: 'A ticketing management system for our IT Department to help manage IT-related issues. Test the app with username: admin and password: admin.',
          github: '#',
          live: 'https://ef7-studious-hubble.circumeo-apps.net/'
        }, {
          img: project4,
          title: 'Quiz App',
          description: 'A quiz app for creating and taking quizzes. The app allows users to create quizzes and take quizzes. Test the app with username: admin and password: admin.',
          github: 'https://github.com/Amadou-Marong/QuizApp.git',
          live: 'https://quizapp-1-dncj.onrender.com'
        }, {
          img: project5,
          title: 'Project #5',
          description: 'Lorem ipsum dolor sit amet.',
          github: '#',
          live: 'https://ahmad-food-menu.netlify.app'
        }, {
          img: project6,
          title: 'Ecommerce Website',
          description: 'An Ecommerce website for my web2 project work.',
          github: '#',
          live: 'https://ourhomepage.netlify.app'
        }].map((project, index) => (
          <div key={index} className="rounded-xl bg-gradient-to-b from-gray-500 to-gray-800 overflow-hidden shadow-xl z-10">
          <a href={project.live} className="group col-span-3">
            <img src={project.img} alt={project.title} className='h-[200px] w-full object-cover object-top transition duration-200 group-hover:scale-110 rounded-lg'/>
          </a>
          <div className="p-4">
            <h2 className='text-gray-200'>{project.title}</h2>
            <p className="text-gray-400">{project.description}</p>
          </div>
          <div className="flex flex-row gap-3 justify-end text-white mb-3 mr-3">
            <a href={project.github} className="cursor-pointer"><AiFillGithub className='w-[35px] h-auto'/> </a>
            <a href={project.live} className="cursor-pointer"><AiFillChrome className='w-[35px] h-auto'/> </a>
          </div>  
          </div>
        ))}
        </div> 
      </div>
      </AnimatedSection>
    );
}
export default Portfolio;