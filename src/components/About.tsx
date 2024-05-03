"use client";
import styles from "../styles/about.module.scss";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h2>ABOUT</h2>
        <motion.div
          className={styles.intro}
          initial={{ opacity: 0, scale: 0.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
          }}
        >
          <p>안녕하세요</p>
          <p>프론트엔드 개발자 이예지입니다!</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
