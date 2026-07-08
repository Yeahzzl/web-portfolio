"use client";

import styles from "../styles/design.module.scss";
import { motion } from "framer-motion";
import UiuxCard, { UiuxItem } from "./UiuxCard";

const UiuxGrid = ({ items }: { items: UiuxItem[] }) => {
  return (
    <div className={styles.uiuxGrid}>
      {items.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <UiuxCard item={item} />
        </motion.div>
      ))}
    </div>
  );
};

export default UiuxGrid;
