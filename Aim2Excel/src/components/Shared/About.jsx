import about from  "../../assets/about.jpg"

const About = () => {
    return (
        <>
            <div>
                <h1 className=" text-center pt-16 font-bold text-blue-500 lg:text-6xl text-4xl " >About Us</h1>

                <div className="flex flex-col lg:flex-row px-20 items-center " >
                    <div className="" >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore fugiat impedit aliquid sit ullam assumenda quos eveniet. Itaque doloremque, rem provident, vel repellendus nisi exercitationem perspiciatis id veritatis beatae explicabo!
                    </div>
                    <div>
                        <img 
                        src={about} 
                        alt="about us"
                        width={700}
                        height={500}
                         />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;