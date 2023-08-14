import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import SectionWrapper from "./SectionWrapper";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

interface Project {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link: string;
}

const ProjectCard: React.FC<{ project: Project; index: number }> = ({
  project,
  index,
}) => {
  const openProject = (link: string) => window.open(link, "_blank");

  return (
    <motion.div variants={fadeIn("left", "", index * 0.5, 1)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-contain rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => openProject(project.source_code_link)}
            >
              <img
                src={github}
                alt="Github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between mt-5">
          <div>
            <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
            <p className="mt-2 text-secondary text-[14px]">
              {project.description}
            </p>
          </div>
          <div className=" mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <p className={`text-[14px] ${tag.color}`} key={tag.name}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <SectionWrapper>
      <motion.div variants={textVariant(0.1)}>
        <p className={`${styles.sectionSubText}`}>What have I done so far</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("left", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Explore a showcase of diverse projects highlighting innovative
          solutions, creative endeavors, and technical expertise across a range
          of disciplines.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7 items-stretch">
        {projects.map((project, i) => (
          <ProjectCard index={i} key={project.name} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Works;
