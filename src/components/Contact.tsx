"use client";
import Link from "next/link";
import styles from "../styles/contact.module.scss";
import { useState } from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  title: string;
  content: string;
};

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onChange" });

  const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const onSubmitHandler = (data: Inputs) => {
    console.log("제출", data);
    alert(`이름 : ${data.name}\n이메일 : ${data.email}`);
  };

  const buttonClickHandler = () => {
    console.log("제출");
  };

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h2>CONTACT</h2>
        <div className={styles.contactAdress}>
          <p>yeahzzl1018@gmail.com</p>
          <Link
            target="_blank"
            href="https://github.com/Yeahzzl"
            className={styles.addressLink}
          >
            <p>github</p>
          </Link>
          <Link
            target="_blank"
            href="https://velog.io/@yeahzzl/posts"
            className={styles.addressLink}
          >
            <p>blog</p>
          </Link>
        </div>
      </div>
      <div className={styles.formSection}>
        <form
          className={styles.formContainer}
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <span>궁금한 부분은 무엇이든 물어봐주세요!</span>
          <div className={styles.nameEmail}>
            <div className={styles.inputWrap}>
              <label htmlFor="name">이름/소속 *</label>
              <input
                type="text"
                id="name"
                placeholder="이름/소속을 입력해주세요"
                {...register("name", {
                  required: "이름을 입력해주세요",
                  maxLength: 20,
                })}
              />
              {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div className={styles.inputWrap}>
              <label htmlFor="email">이메일 *</label>
              <input
                type="email"
                id="email"
                placeholder="이메일을 입력해주세요"
                {...register("email", {
                  required: "이메일을 입력해주세요",
                  pattern: emailRegExp,
                })}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
          </div>
          <div className={styles.inputWrap}>
            <label htmlFor="title">제목 *</label>
            <input
              className={styles.inputTitle}
              placeholder="제목을 입력해주세요"
              id="title"
              {...register("title", {
                required: "제목을 입력해주세요",
                maxLength: 30,
              })}
            />
            {errors.title && <p>{errors.title.message}</p>}
          </div>
          <div className={styles.inputWrap}>
            <label htmlFor="content">문의 내용 *</label>
            <textarea
              placeholder="내용을 입력해주세요"
              id="content"
              {...register("content", {
                required: "내용을 입력해주세요",
                maxLength: 300,
              })}
            />
            {errors.content && <p>{errors.content.message}</p>}
          </div>
          <button type="submit" onClick={buttonClickHandler}>
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
