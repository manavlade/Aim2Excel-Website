import { PhoneCall } from "lucide-react";
import { Button } from "../ui/button";
import web from "../../assets/Web Development.mp4";
import app from "../../assets/App Development.mp4";
import digital from "../../assets/Digital Marketing.mp4";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import { RetroGrid } from "../magicui/retro-grid";
import { WordRotate } from "../magicui/word-rotate";
import webpic from "../../assets/web.jpg"
import apppic from "../../assets/app.jpg"
import digipic from "../../assets/digi.jpg";

const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
};
const services = [
    {
        title: "Website Development",
        img: webpic,
    },
    {
        title: "App Development",
        img: apppic,
    },
    {
        title: "Digital Marketing",
        img: digipic,
    },
];

const Home = () => {

    // State to toggle between the two videos
    const [currentVideo, setCurrentVideo] = useState(web);
    const controls = useAnimationControls();
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    useEffect(() => {
        if (isFirstLoad) {
            setIsFirstLoad(false); // Ensure the initial video is visible without animation
            return;
        }

        const interval = setInterval(() => {
            controls.start({ rotateY: 180, opacity: 0, transition: { duration: 0.5 } }).then(() => {
                setCurrentVideo((prevVideo) => {
                    if (prevVideo === web) return app;
                    if (prevVideo === app) return digital;
                    return web; // Loop back to the first video
                });
                controls.start({ rotateY: 0, opacity: 1, transition: { duration: 0.5 } });
            });
        }, 10000);

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [controls, isFirstLoad]);

    return (
        <>
            <div>
                <div>
                    <RetroGrid />

                    {/* home section  */}
                    <div className=" flex lg:px-10 flex-col lg:flex-row " >
                        <div className=" items-center justify-center px-10 lg:py-40" >
                            <p className=" font-bold lg:text-6xl  text-4xl" >
                                Innovation Ignites Impact: Shaping Digital Experiences that
                                <span className=" flex items-center text-center gap-2" >

                                    <WordRotate
                                        words={["Succeed!", "Prosper!", "Advance!"]}

                                    />
                                </span>

                            </p>
                            <p className=" lg:pt-2 lg:text-xl text-xl" >Empowering your brand through transformative digital solutions</p>
                            <div className="flex gap-5 py-2">
                                <Button className=" text-xl " >Explore Our Work</Button>
                                <Button className=" text-xl " >Success Stories</Button>
                            </div>

                        </div>
                        <motion.div
                            className="justify-center"
                            initial="hidden"
                            animate="visible"
                            variants={imageVariants}
                        >
                            <motion.video
                                src={currentVideo}
                                autoPlay
                                muted
                                playsInline
                                className="rounded-lg  w-full"
                                initial={isFirstLoad ? { opacity: 1, rotateY: 0 } : {}}
                                animate={controls}
                            />
                        </motion.div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
export default Home;