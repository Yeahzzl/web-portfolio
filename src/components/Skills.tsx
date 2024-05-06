"use client";

import styles from "../styles/skills.module.scss";
import Image from "next/image";
import css from "../../public/img/CSS.svg";
import html from "../../public/img/HTML.svg";
import javascript from "../../public/img/JavaScript.svg";
import next from "../../public/img/NextJS-Light.svg";
import react from "../../public/img/React-Dark.svg";
import sass from "../../public/img/Sass.svg";
import styled from "../../public/img/StyledComponents.svg";
import typescript from "../../public/img/TypeScript.svg";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.titleWrap}>
          <motion.h2
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{
              ease: "easeInOut",
              x: { duration: 0.5 },
            }}
          >
            Skills
          </motion.h2>
        </div>
        <div className={styles.skillWrap}>
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{
              ease: "easeInOut",
              x: { duration: 0.5 },
            }}
          >
            <Image src={css} alt="css" width={150} />
            <Image src={html} alt="html" width={150} />
            <Image src={javascript} alt="javascript" width={150} />
            <Image src={typescript} alt="typescript" width={150} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{
              ease: "easeInOut",
              x: { duration: 0.5 },
            }}
          >
            <Image src={react} alt="react" width={150} />
            <Image src={next} alt="next" width={150} />
            <Image src={sass} alt="sass" width={150} />
            <Image src={styled} alt="styled" width={150} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
