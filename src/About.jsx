import aboutImg from './assets/workplace.jpg'
const About = () => {
    return (
        <div className="py-10 text-white h-auto max-w-[1400px] mx-auto bg-gradient-to-b from-gray-500 to-gray-800 left-1/2" id="about">
           <div className="flex sm:flex-row flex-col-reverse items-center justify-between md:gap-6 gap-12 px-10 mx-auto">
                <div className="">
                    <div className="p-2">
                        <div className="text-gray-300 my-3 max-w-[500px]">
                            <h3 className="text-5xl text-justify leading-7 text-gray-200 font-semibold">About <span className='text-blue-400'>Me</span></h3>
                            <p className="text-xl text-justify text-gray-400 my-8">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ex quia natus 
                                deleniti, vero, ipsam ut quibusdam quae corporis rem facere culpa q
                                ui magnam tenetur enim amet ea vel non?
                            </p>
                        </div>
                    </div>
                 
                </div>
                <div>
                    <div className="w-[500] h-full">
                        <img src={aboutImg} alt="about img" className='object-cover rounded-full w-[40vw] backdrop-invert bg-white/30'/>
                    </div>
                </div>
           </div>
        </div>
    );
}
export default About;