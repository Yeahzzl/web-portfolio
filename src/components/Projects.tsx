"use client";

import Image from "next/image";
import styles from "../styles/projects.module.scss";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useContext, useState } from "react";
import { projectContext } from "@/app/context/projectContext";

type TabKey = "webPublishing" | "frontend";

const TABS: { key: TabKey; label: string }[] = [
  { key: "webPublishing", label: "Web-Publishing" },
  { key: "frontend", label: "Frontend" },
];

const Projects = () => {
  const projects = useContext(projectContext);
  const [activeTab, setActiveTab] = useState<TabKey>("webPublishing");

  const activeItems = projects?.[activeTab] ?? [];

  return (
    <div className={styles.container}>
      <p>*클릭 시 상세한 내용을 확인하실 수 있습니다</p>

      {/* Tab Buttons */}
      <div className={styles.tabMenu}>
        {TABS.map((tab) => (
          <button
            key={tab.key}
            className={`${styles.tabBtn} ${
              activeTab === tab.key ? styles.active : ""
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.section
          key={activeTab}
          className={styles.section}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className={styles.imgGrid}>
            {activeItems.map((item) => (
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
                    alt="project"
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
            ))}
          </div>
        </motion.section>
      </AnimatePresence>
    </div>
  );
};

export default Projects;
