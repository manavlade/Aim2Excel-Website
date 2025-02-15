import { useState } from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { BoxReveal } from "../magicui/box-reveal";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import cj from "../../assets/cj.jpg"
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const Projects = [
    {
        domain: "web",
        title: "CJ Betting",
        description: "A Betting website built using Next.js and Node.js",
        Link: "http://localhost:5173/",
        image: cj,
        Techbology: "Next.js, Node.js, Express.js, MongodDB, Typescript, Stripe, Tailwind css, ShadcnUI"
    },
    {
        domain: "web",
        title: "Lumio AI",
        description: "A CRM Tool built using React.js and Node.js",
        Link: "http://localhost:5173/",
        image: cj,
        Techbology: "Next.js, Node.js, Express.js, MongodDB, Typescript, Stripe, Tailwind css, ShadcnUI"
    },
    {
        domain: "web",
        title: "Follow Admin Page",
        description: "A Admin website built using Next.js and Node.js for follow app",
        Link: "http://localhost:5173/",
        image: cj,
        Techbology: "Next.js, Node.js, Express.js, MongodDB, Typescript, Stripe, Tailwind css, ShadcnUI"
    },
    {
        domain: "web",
        title: "SNA Portal",
        description: "A Portal for government built using Next.js and Node.js",
        Link: "http://localhost:5173/",
        image: cj,
        Techbology: "Next.js, Node.js, Express.js, MongodDB, Typescript, Stripe, Tailwind css, ShadcnUI"
    },
    {
        domain: "app",
        title: "Follow App",
        description: "A Application  built using Flutter and Node.js",
        Link: "http://localhost:5173/",
        image: cj,
        Techbology: "Next.js, Node.js, Express.js, MongodDB, Typescript, Stripe, Tailwind css, ShadcnUI"
    },
]

const Project = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProjects = Projects.filter((project) =>
        project.domain.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <>
            <div>
                <p className=" text-center mt-10 lg:text-6xl text-blue-500 font-bold text-4xl" >
                    Projects
                </p>
            </div>
            <div className=" px-20" >
                <div className="flex justify-end items-center mt-10 mb-5">
                    <div className="relative w-full md:w-1/3">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <Input
                            placeholder="Search by domain (e.g., web, app)"
                            type="text"
                            value={searchQuery}
                            onChange={handleSearch}
                            className="w-full pl-10 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5" >
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, index) => (
                            <div>
                                <div>
                                    <Card>
                                        <CardHeader>
                                            <BoxReveal duration={0.5} boxColor={"#5046e6"}>
                                                <img src={project.image} alt="project image" />
                                            </BoxReveal>
                                            <BoxReveal duration={0.5} boxColor={"#5046e6"}>
                                                <CardTitle className=" text-3xl px-2 py-2" > {project.title} </CardTitle>
                                            </BoxReveal>
                                            <BoxReveal duration={0.5} boxColor={"#5046e6"}>
                                                <CardDescription className=" text-xl px-2" > {project.description} </CardDescription>
                                            </BoxReveal>
                                        </CardHeader>
                                        <BoxReveal duration={0.5} boxColor={"#5046e6"}>
                                            <div className="flex flex-wrap gap-2">
                                                <CardContent className="flex flex-wrap gap-2">
                                                    {project.Techbology.split(",").map((tech, index) => (
                                                        <Badge key={index} className=" px-2 py-1">
                                                            {tech.trim()}
                                                        </Badge>
                                                    ))}

                                                </CardContent>
                                                <CardFooter>
                                                    <a href={project.Link}>
                                                        <Button className=" px-2 ml-2 bg-blue-500 text-white w-full" >
                                                            View Project
                                                        </Button>
                                                    </a>
                                                </CardFooter>
                                            </div>

                                        </BoxReveal>
                                    </Card>
                                </div>
                                {/* </BoxReveal> */}
                            </div>
                        ))
                    ) : (
                        <div>
                            No Projects found for <strong> "{searchQuery}" </strong>
                        </div>
                    )}

                </div>
            </div>
        </>
    )
}

export default Project;