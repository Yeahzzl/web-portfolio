import styles from "../styles/about.module.scss";

const About = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h2>ABOUT</h2>
        <div className={styles.intro}>
          <p>안녕하세요</p>
          <p>프론트엔드 개발자 이예지입니다</p>
        </div>
      </div>
    </div>
  );
};

export default About;
