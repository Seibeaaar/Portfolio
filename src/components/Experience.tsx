import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import SectionWrapper from "./SectionWrapper";
import { textVariant } from "../utils/motion";
import * as React from "react";

interface Experience {
  title: string;
  company_name: string;
  points: string[];
  icon: string;
  iconBg: string;
  date: string;
}

const ExperienceCard: React.FC<{ experience: Experience }> = ({
  experience,
}) => (
  <VerticalTimelineElement
    contentStyle={{
      backgroundColor: "#1d1836",
      color: "#fff",
    }}
    contentArrowStyle={{
      borderRight: "7px solid #232631",
    }}
    date={experience.date}
    iconStyle={{
      backgroundColor: experience.iconBg,
    }}
    icon={
      <div className="flex justify-center items-center h-full">
        <img
          className="w-[60%] h-[60%] object-contain"
          src={experience.icon}
          alt={experience.company_name}
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold">
        {experience.company_name}
      </p>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point) => (
          <li
            key={point}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <SectionWrapper id="work">
      <motion.div variants={textVariant(0.1)}>
        <p className={`${styles.sectionSubText}`}>My career in a nutshell</p>
        <h2 className={`${styles.sectionHeadText}`}>Work experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.company_name}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
