import * as React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

interface ISecctionWrapperProps {
  children: React.ReactNode;
  id?: string;
}

const SectionWrapper: React.FC<ISecctionWrapperProps> = ({ children, id }) => (
  <motion.section
    variants={staggerContainer()}
    whileInView='show'
    initial='hidden'
    viewport={{ once: true, amount: 0.25 }}
    className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
  >
    <span className="hash-span" id={id}>&nbsp;</span>
    {children}
  </motion.section>
);

export default SectionWrapper;
