"use client";

import styles from "../styles/design.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { projectContext } from "@/app/context/projectContext";

const Design = () => {
  const design = useContext(projectContext);

  return (
    <div className={styles.container}>
      {/* Edit */}
      <section className={styles.section}>
        <h3>Poster</h3>
        <div className={styles.imgGrid}>
          {design?.edit.map((item) => {
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
                <Link target="_blank" href={item.link}>
                  <Image
                    src={item.image}
                    alt="project"
                    width={380}
                    height={380}
                    priority
                  />
                  <div className={styles.overlay}>
                    <div>
                      <p>{item.title}</p>
                      <span>{item.description}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Web */}
      <section className={styles.section}>
        <h3>Web</h3>
        <div className={styles.imgGrid}>
          {design?.web.map((item) => {
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
                <Link target="_blank" href={item.link}>
                  <Image
                    src={item.image}
                    alt="project"
                    width={380}
                    height={380}
                    priority
                  />
                  <div className={styles.overlay}>
                    <div>
                      <p>{item.title}</p>
                      <span>{item.description}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Package */}
      <section className={styles.section}>
        <h3>Package</h3>
        <div className={styles.imgGrid}>
          {design?.package.map((item) => {
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
                <Link target="_blank" href={item.link}>
                  <Image
                    src={item.image}
                    alt="project"
                    width={380}
                    height={380}
                    priority
                  />
                  <div className={styles.overlay}>
                    <div>
                      <p>{item.title}</p>
                      <span>{item.description}</span>
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

export default Design;
