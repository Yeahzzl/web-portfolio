"use client";

import Image from "next/image";
import styles from "../styles/projects.module.scss";
import pug from "../app/assets/img/퍼그.webp";
import keyboduck from "../app/assets/img/키보덕.webp";
import travel from "../app/assets/img/여행하자.webp";
import eat from "../app/assets/img/트라이잇.webp";
import Link from "next/link";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h2>PROJECTS</h2>
        <div className={styles.imgGrid}>
          <motion.div
            className={styles.imgWrap}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
            }}
          >
            <Link
              className={styles.link}
              target="_blank"
              href="https://panoramic-reptile-f96.notion.site/Puppy-Ground-d7b0b5c1e23c4805b7f1b32063f8b951?pvs=4"
            >
              <Image src={pug} alt="pug" width={570} height={428} />
              <div className={styles.overlay}>
                <p>Puppy Ground</p>
                <span>2024.01.04 ~ 02.08 (5주)</span>
              </div>
            </Link>
          </motion.div>

          <motion.div
            className={styles.imgWrap}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
            }}
          >
            <Link
              className={styles.link}
              target="_blank"
              href="https://panoramic-reptile-f96.notion.site/Keyboduck1-c0010ad847374eda96927b958a6602cd?pvs=4"
            >
              <Image src={keyboduck} alt="keyboduck" width={570} height={428} />
              <div className={styles.overlay}>
                <p>Keyboduck</p>
                <span>2023.12.26 ~ 01.02 (1주)</span>
              </div>
            </Link>
          </motion.div>

          <motion.div
            className={styles.imgWrap}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
            }}
          >
            <Link
              className={styles.link}
              target="_blank"
              href="https://panoramic-reptile-f96.notion.site/Let-s-Travel-50bfa84dac07401480c03faa32b4d0ab?pvs=4"
            >
              <Image src={travel} alt="travel" width={570} height={428} />
              <div className={styles.overlay}>
                <p>Let&apos;s Travel</p>
                <span>2023.12.05 ~ 12.10 (1주)</span>
              </div>
            </Link>
          </motion.div>

          <motion.div
            className={styles.imgWrap}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{
              ease: "easeInOut",
              duration: 0.5,
            }}
          >
            <Link
              className={styles.link}
              target="_blank"
              href="https://panoramic-reptile-f96.notion.site/Try-Eat-bf31e541f5524635b2739f5edb561649?pvs=4"
            >
              <Image src={eat} alt="eat" width={570} height={428} />
              <div className={styles.overlay}>
                <p>Try Eat</p>
                <span>2023.11.21 ~ 11.26 (1주)</span>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
