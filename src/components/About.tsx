"use client";
import Link from "next/link";
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
          <p>
            안녕하세요
            <br />
            프론트엔드 개발자 이예지입니다!
          </p>
          <Link
            className={styles.resumeLink}
            href="https://drive.google.com/file/d/1ZGXWxDUx16J44u9rOMros-lsg5BeKxtK/view?usp=sharing"
            target="_blank"
          >
            <span>resume</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
