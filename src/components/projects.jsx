import ProjectCard from "./projectCard";

const projects = [
  {
    name: "pied piper 2.0",
    description:
      "a social networking platform based on music taste, allowing members to meet people who share their love for music",
    techStack: "react, nextjs, mongodb, nextauth",
    github: "https://github.com/tariqrahman/Pied-Piper-2.0",
    prod: null,
    alert: "currently migrating to next13, be back soon!"
  },
  {
    name: "flappy bruin",
    description:
      "a 3d revival of flappy bird which adds a twist to the iconic game, allowing users to use first and third person pov",
    techStack: "javascript, tinygraphics, html",
    github: "https://github.com/tariqrahman/F22-FinalProject",
    prod: null,
    alert: "under deployment, check back later"
  },
  {
    name: "t-reviews",
    description:
      "a static car blog used by my friends and i to review our cars and cars we wish we had -> content en route",
    techStack: "hugo, html, css, markdown",
    github: "https://github.com/tariqrahman/TReviews",
    prod: "https://trexreviews.com/",
  },
  {
    name: "brawl metrics",
    description:
      "a simple showcase of brawl stars statistics (a mobile game my friends and i play), allowing me to leverage numbers to talk trash",
    techStack: "react, nextjs, supercell api",
    github: "https://github.com/tariqrahman/top2-bottom2",
    prod: "https://top2bottom2.vercel.app/",
  },
];

const Projects = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-24 pt-20 font-primary px-4">
        {projects.map((project) => (
          <ProjectCard
            name={project.name}
            description={project.description}
            techStack={project.techStack}
            repoLink={project.github}
            deploymentLink={project.prod}
            alert={project.alert}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
