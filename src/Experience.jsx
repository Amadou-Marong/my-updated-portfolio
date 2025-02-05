import AnimatedSection from './Components/AnimatedSection';

const Experience = () => {
  const experiences = [
    { company: 'HMZ Creatives', duration: '2022-2023', description: 'Served as a frontend Web Developer Intern. Developed and maintained websites using HTML, CSS, and JavaScript. Worked on projects using Vanilla JavaScript and Css. Learned and used version control tools like Git. Used Figma to design and develop user interfaces.' },
    { company: 'Gambia National Petroleum Company', duration: '2023-Present', description: 'A Junior Software Developer and IT Support Intern. Worked with the IT Support team to resolve issues related to computer hardware and software. Provided technical assistance and provide support to customers and other employees. Developed and maintained websites using Vuejs, Reactjs, Laravel, and Django also used Figma to design and develop user interfaces. Used version control tools like Git. To manage the IT support team, I build an Employee Management System with modules for managing leaves and tickets. This system helps in organizing and tracking employee information, leave requests, and IT support tickets efficiently.' },
  ];

  return (
    <AnimatedSection>
      <div className="py-10 max-w-[1300px] mx-auto relative mb-3" id="experience">
        <h3 className="text-5xl text-center leading-7 text-gray-800 font-semibold mb-6">
          My <span className="text-blue-400">Experience</span>
        </h3>
        <div className="hidden lg:block absolute w-2 bg-gradient-to-b from-gray-500 to-gray-800 h-[250px] left-1/2 my-8 -ml-1"></div>
        {experiences.map((exp, index) => (
          <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} items-center my-8`} key={index}>
            <div className="w-full max-w-[600px] rounded-3xl p-6 shadow-xl overflow-hidden bg-gradient-to-r from-gray-800 via-gray-900 to-black">
              <p className="text-gray-200 font-semibold text-lg">{exp.company}</p>
              <p className="text-gray-400">{exp.duration}</p>
              <p className="text-sm text-gray-400">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default Experience;
