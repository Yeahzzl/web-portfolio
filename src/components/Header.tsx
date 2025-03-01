"use client";
import styles from "../styles/header.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <div className={styles.logoWrap}>
          <Link href="/" className={styles.link}>
            LEEYEJI
          </Link>
        </div>
        <div className={styles.menuWrap}>
          <Link
            href="/"
            className={pathName === "/" ? styles.active : styles.menuItem}
          >
            ABOUT
          </Link>
          <Link
            href="/projects"
            className={
              pathName === "/projects" ? styles.active : styles.menuItem
            }
          >
            PROJECTS
          </Link>
          <Link
            href="/contact"
            className={
              pathName === "/contact" ? styles.active : styles.menuItem
            }
          >
            CONTACT
          </Link>
          {/* <Link
            href="/comments"
            className={
              pathName === "/comments" ? styles.active : styles.menuItem
            }
          >
            COMMENTS`
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
