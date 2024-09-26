import NavbarDark from "../components/navbar-dark";

const About = () => {
    return (
        <>
            <NavbarDark/>
            <div className="bg-[#252525] p-8 min-h-screen">
                <div className="font-montserrat text-xl text-[#CACACA] font-semibold">
                    <h2><span className="font-extrabold text-white">JACKÖ RENZA </span>IS A VENEZUELAN ARTIST BASED IN MIAMI</h2>
                    <h3 className="font-extralight text-base">Creative Director, Photographer & Visual Storyteller.</h3>
                </div>
                <div className="w-10 h-[1px] bg-[#CACACA] mt-4 mb-8"></div>
                <div className="font-montserrat text-[#CACACA] font-light text-sm">
                    <p className="pb-3">As a freelancer, he has performed his art in several areas such as: being the creative director of the visual project of the singer Soucream, Analog Photography & BTS Content at the Vibra Urbana music festival for Lunay, Direction and concept of Music Video for the artist Mj Nebreda, Art Assistant for Sexyy Red's music video and more.</p>
                    <p className="pb-3">He brings ideas to life by creating attention-grabbing ads and commercials.</p>
                    <p>JackÖ's work is about connecting with the public through attractive visual elements. Whether writing and directing commercials or a musical project, achieving the goal of creating something memorable.</p>
                </div>
            </div>
        </>
    )
}

export default About;