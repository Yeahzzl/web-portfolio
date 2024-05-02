import styles from "../styles/skills.module.scss";
import Image from "next/image";
import css from "../app/assets/img/CSS.svg";
import html from "../app/assets/img/HTML.svg";
import javascript from "../app/assets/img/JavaScript.svg";
import next from "../app/assets/img/NextJS-Light.svg";
import react from "../app/assets/img/React-Dark.svg";
import sass from "../app/assets/img/Sass.svg";
import styled from "../app/assets/img/StyledComponents.svg";
import typescript from "../app/assets/img/TypeScript.svg";

const Skills = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.titleWrap}>
          <h2>Skills</h2>
        </div>
        <div className={styles.skillWrap}>
          <div>
            <Image src={css} alt="css" width={150} />
            <Image src={html} alt="html" width={150} />
            <Image src={javascript} alt="javascript" width={150} />
            <Image src={typescript} alt="typescript" width={150} />
          </div>
          <div>
            <Image src={react} alt="react" width={150} />
            <Image src={next} alt="next" width={150} />
            <Image src={sass} alt="sass" width={150} />
            <Image src={styled} alt="styled" width={150} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
