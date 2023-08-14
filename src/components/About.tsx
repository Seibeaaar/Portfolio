import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "./SectionWrapper";
import * as React from "react";

interface IServiceCardProps {
  title: string;
  icon: string;
  index: number;
}

const ServiceCard: React.FC<IServiceCardProps> = ({ title, index, icon }) => (
  <Tilt
    className="xs:w-[250px] w-full"
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
  >
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 1)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <SectionWrapper id="about">
      <motion.div variants={textVariant(0.1)}>
        <p className={`${styles.sectionSubText}`}>My expertise</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>
      <motion.p
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        variants={fadeIn("left", "", 0.1, 1)}
      >
        Enthusiastic and goal-oriented Front-End Developer with strong
        commitment to collaboration and solutions-oriented problem solving,
        eager to contribute to team success through hard work, attention to
        detail and excellent organizational skills. Motivated to learn, grow and
        excel in Front-End.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, i) => (
          <ServiceCard {...service} index={i} key={service.title} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default About;
