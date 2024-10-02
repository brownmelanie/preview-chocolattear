import NavbarDark from "../components/navbar-dark";

const About = () => {
    return (
        <div className="min-h-screen bg-[#252525]">
            <NavbarDark/>
            <div className="p-8 flex flex-col justify-center overflow-y-hidden min-h-[90vh] md:p-16 lg:flex-row lg:items-center lg:mt-[-40px] xl:p-20">
                <div className="font-montserrat text-xl text-[#CACACA] font-semibold md:text-3xl lg:pr-10 lg:text-2xl lg:w-[40vw] lg:flex lg:flex-col lg:justify-between xl:text-3xl">
                    <div>
                        <h2 className="lg:w-[30vw]"><span className="font-extrabold text-white md:text-3xl lg:text-2xl xl:text-3xl">JACKÖ RENZA </span>IS A VENEZUELAN ARTIST BASED IN MIAMI</h2>
                        <h3 className="font-extralight text-lg md:text-3xl lg:text-base lg:w-[30vw] lg:mt-5 xl:text-2xl">Creative Director, Photographer & Visual Storyteller.</h3>
                        <div className="lg:flex lg:w-10 lg:h-px lg:bg-[#CACACA] lg:mt-3 hidden"></div>
                    </div>
                    
                    <div className="hidden lg:flex lg:mt-10 lg:justify-between">
                        <div>
                            <h4 className="lg:text-sm lg:mb-2 xl:text-base">CONTACT</h4>
                            <ul className="text-xs font-light xl:text-sm">
                                <li>
                                    <a href="mailto:chocolatttear@gmail.com" className="hover:underline">Email</a>
                                </li>
                                <li>
                                    <a href="https://wa.me/17864918037" target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp</a>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:mr-10 xl:mr-14">
                            <h4 className="lg:text-sm lg:mb-2 xl:text-base">FOLLOW</h4>
                            <ul className="lg:text-xs lg:font-light xl:text-sm">
                                <li>
                                    <a href="https://www.instagram.com/chocolatttear/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
                                </li>
                                <li>
                                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Youtube</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <div className="w-10 h-[1px] bg-[#CACACA] mt-4 mb-8 lg:hidden"></div>
                <div className="font-montserrat text-[#CACACA] font-light text-sm md:text-xl lg:text-base xl:text-xl">
                    <p className="pb-3">As a freelancer, he has performed his art in several areas such as: being the creative director of the visual project of the singer Soucream, Analog Photography & BTS Content at the Vibra Urbana music festival for Lunay, Direction and concept of Music Video for the artist Mj Nebreda, Art Assistant for Sexyy Red's music video and more.</p>
                    <p className="pb-3">He brings ideas to life by creating attention-grabbing ads and commercials.</p>
                    <p>JackÖ's work is about connecting with the public through attractive visual elements. Whether writing and directing commercials or a musical project, achieving the goal of creating something memorable.</p>
                </div>

                <div className="flex flex-row justify-between mt-10 mb-4 mr-4 lg:hidden">
                    <div className="flex flex-col font-montserrat">
                        <h4 className="text-white font-semibold pb-2 md:text-2xl">CONTACT</h4>
                        <ul className="text-[#CACACA] text-xs font-light md:text-xl">
                            <li>
                                <a href="mailto:chocolatttear@gmail.com" className="hover:underline">Email</a>
                            </li>
                            <li>
                                <a href="https://wa.me/17864918037" target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp</a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col font-montserrat">
                        <h4 className="text-white font-semibold pb-2 md:text-2xl">FOLLOW</h4>
                        <ul className="text-[#CACACA] text-xs font-light md:text-xl">
                            <li>
                                <a href="https://www.instagram.com/chocolatttear/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Youtube</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;