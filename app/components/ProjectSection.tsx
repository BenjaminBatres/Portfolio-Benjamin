import Image from "next/image";
import projectData from "../data/project-info";
import Link from "next/link";
export default function ProjectSection() {
  return (
    <section id="projects" className="py-20 px-5 sm:px-8">
      <div className="max-w-360 mx-auto space-y-10 sm:space-y-15">
        <h2 className="text-4xl sm:text-5xl font-medium text-center">
          My Projects
        </h2>
        <div className="grid lg:grid-cols-2 gap-x-5 gap-y-10 items-stretch">
          {projectData.map((project) => (
            <div key={project.id} className="flex flex-col h-full">
              <figure className="max-h-110 h-full">
                <Image
                  src={project.image}
                  alt=""
                  className="w-full h-full object-cover object-top rounded-t-xl"
                />
              </figure>
              <div className="bg-[#131519] border-white/30 border rounded-b-xl w-full px-4 lg:px-6 py-5 flex flex-col flex-1">
                <h3 className="text-2xl font-medium mb-2">{project.name}</h3>
                <p className="text-Secondary mb-4">{project.overView}</p>
                <h4 className="font-medium uppercase text-sm mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack?.map((tech, id) => (
                    <div
                      key={id}
                      className="px-4 py-2 bg-Gray rounded-2xl text-sm font-light"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="grid sm:grid-cols-2 mt-auto">
                  <Link
                    href={project.link}
                    target="_blank"
                    className="py-4 bg-Blue rounded-t-xl sm:rounded-tr-none sm:rounded-l-xl text-center font-medium hover:bg-Blue-dark duration-300"
                  >
                    Live Site
                  </Link>
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    className="py-4 bg-Gray rounded-b-xl sm:rounded-bl-none sm:rounded-r-xl text-center font-medium hover:bg-Gray/80 duration-300"
                  >
                    Github
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
