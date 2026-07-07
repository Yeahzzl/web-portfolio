"use client";

import styles from "../styles/design.module.scss";
import Image from "next/image";
import { useState } from "react";

export type UiuxStatus = "수주" | "미수주" | "수행";

export type UiuxItem = {
  id: string;
  images: string[];
  title: string;
  description: string;
  status?: UiuxStatus;
  link: string;
};

const STATUS_STYLE: Record<UiuxStatus, string> = {
  수주: styles.badgeSuccess,
  미수주: styles.badgeWarning,
  수행: styles.badgeNeutral,
};

const UiuxCard = ({ item }: { item: UiuxItem }) => {
  const [idx, setIdx] = useState(0);
  const total = item.images.length;

  const go = (e: React.MouseEvent, next: number) => {
    e.preventDefault();
    e.stopPropagation();
    setIdx((next + total) % total);
  };

  return (
    <div className={styles.uiuxCard}>
      <div className={styles.thumbWrap}>
        <div
          className={styles.slideTrack}
          style={{
            width: `${total * 100}%`,
            transform: `translateX(-${idx * (100 / total)}%)`,
          }}
        >
          {item.images.map((src, i) => (
            <div
              key={i}
              className={styles.slideItem}
              style={{ width: `${100 / total}%` }}
            >
              <Image
                src={src}
                alt={`${item.title} 화면 ${i + 1}`}
                width={1140}
                height={100}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        {total > 1 && (
          <>
            <button
              type="button"
              aria-label="이전 이미지"
              className={`${styles.navBtn} ${styles.navPrev}`}
              onClick={(e) => go(e, idx - 1)}
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="다음 이미지"
              className={`${styles.navBtn} ${styles.navNext}`}
              onClick={(e) => go(e, idx + 1)}
            >
              ›
            </button>
            <div className={styles.dots}>
              {item.images.map((_, i) => (
                <span
                  key={i}
                  role="button"
                  aria-label={`${i + 1}번째 이미지`}
                  className={`${styles.dot} ${
                    i === idx ? styles.dotActive : ""
                  }`}
                  onClick={(e) => go(e, i)}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className={styles.uiuxBody}>
        {item.status && (
          <span className={`${styles.badge} ${STATUS_STYLE[item.status]}`}>
            {item.status}
          </span>
        )}
        <p className={styles.uiuxTitle}>{item.title}</p>
        <span className={styles.uiuxDesc}>{item.description}</span>
      </div>
    </div>
  );
};

export default UiuxCard;
