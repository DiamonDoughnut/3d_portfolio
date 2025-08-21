import React from "react";
import { projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";

const Projects = () => {
  return (
    <section className='w-[75%] flex flex-col mx-auto h-full mt-24 md:px-20 text-slate-200'>
      <h1 className='text-2xl font-bold'>
        My{" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r drop-shadow-sm drop-shadow-slate-300 from-blue-500 to-blue-700'>
          Projects
        </span>
      </h1>
      <div className='text-lg font-normal md:w-1/2 mt-5 pl-4 flex flex-col gap-3 text-slate-400'>
        <p>
          I've embarked on many projects throughout the years, but these are the
          ones I hold closest to my heart. Many of them are open-source, so if
          you come across something that piques your interest, feel free to
          explore the codebase and contribute your ideas for further
          enhancements. Your collaboration is highly valued!
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map(project => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12 ">
              <div className={`btn-back rounded-xl ${project.theme}`}/>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <Image 
                  src={`/${project.iconUrl}.svg`}
                  alt={project.name}
                  height={20}
                  width={20}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-popins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-400">
                {project.description}
              </p>
              <div className="flex items-center gap-2 mt-2 font-popins" >
              <Link href={project.link} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600">
                Live Link
              </Link>
              <Image 
                src={'/arrow.svg'}
                alt="arrow"
                height={16}
                width={16}
                className="w-4 h-4 object-contain"
                />
                </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200"/>
      <CTA />
    </section>
  );
};

export default Projects;
