import React from 'react';
import Image from 'next/image';

type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
};

const Projects: React.FC<CardProps> = ({ title, description, imageUrl, technologies, liveUrl, githubUrl }) => {
  return (
    <div className="max-w-80 bg-sidebar rounded-lg shadow-lg overflow-hidden m-4 flex flex-col">
      <div className="relative w-full h-56">
        <Image
          className='rounded-b-xl'
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow text-white">
        <div className="flex-grow">
          <h1 className="text-xl font-semibold mb-2">{title}</h1>
          <p className="mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span key={index} className="bg-chart-5 text-white text-sm font-medium mr-2 px-5 py-2 rounded-xl">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex mt-5">
          <a 
            href={liveUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mr-5 inline-flex items-center px-7 py-2 text-base font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600"
          >
            Live
          </a>
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-7 py-2 text-sm font-medium text-white bg-transparent border border-white rounded-lg hover:bg-white hover:border hover:border-black hover:text-black"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
