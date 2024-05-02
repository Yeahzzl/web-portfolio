import styles from "../styles/introduce.module.scss";

const Introduce = () => {
  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h2>Introduce</h2>
        <div className={styles.firstWrap}>
          <p>꾸준하고 끈질기게 성장합니다.</p>
          <span>
            제한된 시간 동안 효율적인 프로젝트 진행을 위해 우선순위를 정하고
            계획을 세웠고, 프로젝트 현황과 기한을 체크하면서 체계적으로 업무를
            수행했습니다.
          </span>
          <span>
            사소한 것도 기록하는 습관으로 100건 이상의 TIL을 꾸준하게
            포스팅했습니다.
          </span>
        </div>
        <div className={styles.secondWrap}>
          <div>
            <p>효율적인 UI/UX에 대해 고민합니다.</p>
            <span>
              이미지와 폰트 최적화로 LCP(Largest Contentful Paint)를 50%
              <br />
              향상시킨 경험이 있습니다.
            </span>
            <span>
              20건 이상의 유저 피드백을 토대로 다양한 의견을 수렴하여 유저의
              <br />
              편리성과 UX를 향상시켰습니다.
            </span>
            <span>디자인 업무 경험을 통해 UI에 대한 이해도를 높였습니다.</span>
          </div>
          <div>
            <p>협업과 소통에 능한 함께 일하고 싶은 사람입니다.</p>
            <span>
              스타트업의 디자인팀장으로 근무하며 다수의 회의와 미팅을 통해 소통
              <br />
              능력, 협업 능력, 문제 해결 능력을 강화했습니다.
            </span>
            <span>
              다수의 팀 프로젝트 경험에서 적극적으로 질문하고 회의를 주도하며
              <br />
              소통의 분위기를 이끌어 냈습니다.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduce;
