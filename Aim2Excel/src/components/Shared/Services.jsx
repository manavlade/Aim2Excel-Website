import { motion } from "framer-motion";
import webpic from "../../assets/web.jpg";
import apppic from "../../assets/app.jpg";
import digipic from "../../assets/digi.jpg";
import { Card, CardDescription, CardFooter, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import Project from "../Projects/Project";

const services = [
    {
        title: "Website Development",
        description: "At Aim2Excel, we specialize in creating tailor-made websites that perfectly align with your business needs. Whether you're a startup, small business, or an established brand, we build high-performing, visually stunning, and user-friendly websites that enhance your online presence.",
        img: webpic,
        href: "#web"
    },
    {
        title: "App Development",
        description: "Transform your ideas into powerful mobile and web applications with Aim2Excel! We develop high-performance, user-friendly, and scalable apps tailored to your business needs. Whether for iOS, Android, or the web, our apps deliver seamless user experiences and top-tier functionality.",
        img: apppic,
        href: "#app"
        
    },
    {
        title: "Digital Marketing",
        description: "Boost your brand’s online presence, engagement, and conversions with our data-driven digital marketing strategies! At Aim2Excel, we help businesses reach the right audience through SEO, social media, content marketing, and targeted campaigns, ensuring measurable growth and real results.",
        img: digipic,
        href: "#digi"
    },
];

const Services = () => {
    return (
        <div className="">
            <h1 className="text-center font-bold text-blue-500 lg:text-6xl text-4xl">
                Our Services
            </h1>

            {/* Flexbox Container for Row Layout */}
            <div className="flex justify-center mt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-16">
                    {services.map((service, index) => (
                        <Card key={index} className="bg-white p-6 shadow-lg rounded-lg">
                            <img src={service.img} alt={service.title} className="w-full h-40 object-cover rounded-md" />
                            <CardTitle className="mt-4">{service.title}</CardTitle>
                            <CardDescription className="mt-2 text-gray-600">
                                {service.description}
                            </CardDescription>
                            <CardFooter className="mt-4">
                                <Button onClick={() => (window.location.href = service.href)}>
                                    View Project
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
            <Project/>
        </div>
    );
};

export default Services;
