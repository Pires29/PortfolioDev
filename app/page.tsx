import React from 'react';
import LandingPage from "@/components/ui/LandingPage";
import Projects from "@/components/ui/projects";
import projectsData from "./data/projectsdata";
import { PiGreaterThanLight, PiLessThanLight } from 'react-icons/pi';
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export default function Home() {
  return (
    <div>
      <LandingPage />
        <div id='projects' className='block'>
          <div className="flex items-center justify-center mt-5 mb-4 text-orange-500">
            <PiLessThanLight className='text-2xl md:text-3xl xl:text-4xl' style={{ color: "#FE710B" }} />
            <h2 className='text-2xl md:text-3xl xl:text-4xl'>Projetos</h2>
            <PiGreaterThanLight className='text-2xl md:text-3xl xl:text-4xl' style={{ color: "#FE710B" }} />
          </div>
          <div className="flex flex-wrap justify-center m-16">
            {projectsData.map((project) => (
              <Projects
                key={project.id}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                technologies={project.technologies}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
              />
            ))}
          </div>
        </div>
        <div className='flex justify-center p-4 bg-sidebar border border-solid'>
          <div id='contactos' className='flex justify-between w-1/2'>
            <div className='flex items-center'>
              <FaPhoneAlt className='mr-3 text-orange-500'/>
              <p className='text-white'>(+351) 910705999</p>
            </div>
            <div className='flex items-center'>
              <MdOutlineMail className='mr-3 text-orange-500'/>
              <p className='text-white'>renatopiress29@gmail.com</p>
            </div>
          </div>
        </div>
    </div>
  );
}
