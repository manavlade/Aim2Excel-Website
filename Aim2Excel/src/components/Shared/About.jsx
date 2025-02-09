import { Handshake, Rocket, ShieldCheck, Trophy } from "lucide-react";
import about from "../../assets/about.jpg"
import values from "../../assets/values.jpg"
import { Separator } from "../ui/separator";

const About = () => {
    return (
        <>
            <div>
                <div>
                    <h1 className=" text-center pt-16 font-bold text-blue-500 lg:text-6xl text-4xl " >About Us</h1>
                    <div className="flex flex-col lg:flex-row px-20 items-center " >
                        <div className="" >
                            <p className=" font-semibold text-xl pt-5" >
                                Aim2Excel, founded in 2010, started as a small team passionate about merging technology
                                with creative design. From a modest workspace, it has grown into a dynamic agency offering
                                web development, app development, and digital marketing solutions. Committed to excellence,
                                the company transforms digital challenges into opportunities, helping brands share their unique stories.
                            </p>
                        </div>
                        <div>
                            <img
                                src={about}
                                alt="about us"
                            />
                        </div>
                    </div>
                </div>

                <div className=" bg-gray-100" >
                    <h1 className=" text-center pt-16 font-bold text-blue-500 lg:text-6xl text-4xl ">
                        Core Values & Company Culture
                    </h1>
                    <div className=" flex gap-10 px-20 items-center flex-col lg:flex-row" >
                        <div className="" >
                            <div className=" gap-5 border bg-white  rounded-lg shadow-xl p-2" >
                                <div className=" flex gap-2 items-center" >
                                    <Rocket className=" w-16 h-8 text-red-500" />
                                    <span className=" font-bold text-red-500">Innovation</span>
                                </div>
                                <Separator className=" text-black m-2 mr-2" />
                                <p className=" p-2" >
                                    We thrive on creativity and continuously explore new technologies to keep our solutions fresh and forward-thinking.
                                </p>
                            </div>
                            <div className=" gap-5 border bg-white  rounded-lg shadow-xl mt-10 p-2" >
                                <div className=" flex gap-2 items-center" >
                                    <ShieldCheck className=" w-16 h-8 text-blue-500" />
                                    <span className=" font-bold text-blue-500" >Integrity</span>
                                </div>
                                <Separator className=" text-black m-2 mr-2" />
                                <p className=" p-2" >
                                    Honesty and transparency guide every decision we make, ensuring our clients can trust us with their digital ambitions.
                                </p>
                            </div>
                        </div>
                        <div className=" mt-10" >
                            <img src={values} alt="value image" />
                        </div>
                        <div>
                            <div className=" gap-5 border bg-white rounded-lg shadow-xl p-2" >
                                <div className=" flex gap-2 items-center" >
                                    <Handshake className=" w-16 h-8 text-green-500" />
                                    <span className=" font-bold text-green-500" >Collaboration</span>
                                </div>
                                <Separator className=" text-black m-2 mr-2" />
                                <p className=" p-2" >
                                    We believe in working closely with our clients and within our team, merging diverse perspectives to create standout results.
                                </p>
                            </div>
                            <div className=" gap-5 border bg-white  rounded-lg shadow-xl mt-10 p-2" >
                                <div className=" flex gap-2 items-center" >
                                    <Trophy className=" w-16 h-8 text-amber-500" />
                                    <span className=" font-bold text-amber-500" >Excellence</span>
                                </div>
                                <Separator className=" text-black m-2 mr-2" />
                                <p className=" p-2" >
                                    Commitment to quality is at the heart of what we do—from the first line of code to the final digital campaign.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;