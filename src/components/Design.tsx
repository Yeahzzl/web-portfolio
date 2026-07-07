"use client";

import styles from "../styles/design.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import { projectContext } from "@/app/context/projectContext";
import UiuxGrid from "./UiuxGrid";
import { UiuxItem } from "./UiuxCard";

type TabKey = "uiux" | "edit" | "web" | "package";

const TABS: { key: TabKey; label: string }[] = [
  { key: "uiux", label: "UI/UX" },
  { key: "edit", label: "Poster" },
  { key: "web", label: "Web" },
  { key: "package", label: "Package" },
];

const Design = () => {
  const design = useContext(projectContext);
  const [activeTab, setActiveTab] = useState<TabKey>("uiux");

  const activeItems = design?.[activeTab] ?? [];

  return (
    <div className={styles.container}>
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
          {activeTab === "uiux" ? (
            // UI/UX만 2x2 카드형 + 슬라이드 썸네일 구조
            <UiuxGrid items={activeItems as UiuxItem[]} />
          ) : (
            // 기존 Poster / Web / Package는 오버레이 그리드 그대로 유지
            <div className={styles.imgGrid}>
              {activeItems.map((item: any) => (
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
              ))}
            </div>
          )}
        </motion.section>
      </AnimatePresence>
    </div>
  );
};

export default Design;
