"use client";

import Image from "next/image";
import styles from "../styles/projects.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { useContext } from "react";
import { projectContext } from "@/app/context/projectContext";

const Projects = () => {
  const projects = useContext(projectContext);

  return (
    <div className={styles.container}>
      <p>*클릭 시 상세한 내용을 확인하실 수 있습니다</p>
      {/* WebPublishing */}
      <section className={styles.section}>
        <h3>Web-Publishing</h3>
        <div className={styles.imgGrid}>
          {projects?.webPublishing.map((item) => {
            return (
              <motion.div
                key={item.id}
                className={styles.imgWrap}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                }}
              >
                <Link className={styles.link} target="_blank" href={item.link}>
                  <Image
                    src={item.image}
                    alt="pug"
                    width={570}
                    height={428}
                    priority
                  />
                  <div className={styles.overlay}>
                    <div>
                      <p>{item.title}</p>
                      <span>{item.period}</span>
                      <span>{item.description}</span>
                      <span>기여도 : {item.contribution}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* TeamProject */}
      <section className={styles.section}>
        <h3>Frontend</h3>
        <div className={styles.imgGrid}>
          {projects?.frontend.map((item) => {
            return (
              <motion.div
                key={item.id}
                className={styles.imgWrap}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{
                  ease: "easeInOut",
                  duration: 0.5,
                }}
              >
                <Link className={styles.link} target="_blank" href={item.link}>
                  <Image
                    src={item.image}
                    alt="pug"
                    width={570}
                    height={428}
                    priority
                  />
                  <div className={styles.overlay}>
                    <div>
                      <p>{item.title}</p>
                      <span>{item.period}</span>
                      <span>{item.description}</span>
                      <span>기여도 : {item.contribution}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Projects;
