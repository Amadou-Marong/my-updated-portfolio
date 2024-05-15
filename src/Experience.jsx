const Experience = () => {
    const experiences = [
        {company: "HMZ Creatives", duration: "2022-2023", description: "Served as a frontend Web Developer Intern"},
        {company: "Gambia National Petroleum Company", duration: "2023-2024", description: "A Junior Software Developer and IT Support Intern"}
    ]
  
    return (
        <div className="py-10 max-w-[1300px] mx-auto relative">
            <div className="absolute w-2 bg-gradient-to-b from-gray-500 to-gray-800 h-full left-1/2 md:flex-1"></div>
            {experiences.map((exp, index) => {
                return (
                    <div className={`flex ${index % 2 === 0 ?'justify-start': 'justify-end'} items-center my-8`} key={index}>
                        <div className="w-full max-w-[600px] rounded-3xl p-6 shadow-xl overflow-hidden bg-gradient-to-r from-gray-800 via-gray-900 to-black">
                            <p className="text-gray-200 font-semibold text-lg">{exp.company}</p>
                            <p className="text-gray-400">{exp.duration}</p>
                            <p className="text-sm text-gray-400">{exp.description}</p>
                        </div>
                    </div>
                )
                
            })}
        </div>
    )
}
export default Experience