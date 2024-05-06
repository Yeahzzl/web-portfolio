"use client";
import React from "react";
import styles from "../styles/comments.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useComments from "@/hooks/useComments";
import moment from "moment";
import "moment/locale/ko";

const Comments = () => {
  const [nickname, setNickname] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const { comments, addCommentMutate } = useComments(nickname, content);

  const nicknameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => setNickname(event.target.value);
  const contentChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => setContent(event.target.value);

  const commentButtonHandler = async () => {
    if (!nickname) {
      toast.warning("닉네임을 입력해주세요");
    }

    if (!content) {
      toast.warning("방명록을 입력해주세요");
    }

    try {
      // await addCommentMutate.mutate();
      toast.success("방명록이 등록되었습니다!");
      setNickname("");
      setContent("");
    } catch (error) {
      console.log(error);
      toast.error("방명록이 등록되지 않았습니다. 다시 시도해주세요");
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h2>COMMENTS</h2>
        <motion.div
          className={styles.intro}
          initial={{ opacity: 0, scale: 0.3 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
          }}
        >
          <p>
            저의 포트폴리오를 봐주셔서 감사합니다 :)
            <br />
            자유로운 피드백과 한마디로 방명록을 남겨주세요
          </p>
        </motion.div>
        <div className={styles.inputWrap}>
          <input
            type="text"
            placeholder="닉네임(최대10자)"
            value={nickname}
            onChange={nicknameChangeHandler}
            className={styles.nickname}
          />
          <input
            type="text"
            placeholder="방명록(최대50자)"
            value={content}
            onChange={contentChangeHandler}
            className={styles.content}
          />
          <button onClick={commentButtonHandler}>✓</button>
          <ToastContainer
            position="top-center"
            limit={1}
            closeButton={false}
            autoClose={2000}
            hideProgressBar
            className={styles.toast}
          />
        </div>
        <div className={styles.commentContainer}>
          {/* <div className={styles.commentWrap}>
            <div className={styles.nameDate}>
              <span>닉네임</span>
              <p>2024년 05월 05일</p>
            </div>
            <p>방명록입니다</p>
          </div> */}
          {comments?.data!.map((item) => {
            return (
              <div className={styles.commentWrap} key={item.id}>
                <div className={styles.nameDate}>
                  <span>{item.nickname}</span>
                  <p>
                    {moment(item.created_at)
                      .locale("ko")
                      .format("yyyy년 MM월 DD일 A hh:mm")}
                  </p>
                </div>
                <p>{item.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Comments;
