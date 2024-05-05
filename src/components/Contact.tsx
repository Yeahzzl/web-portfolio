"use client";
import Link from "next/link";
import styles from "../styles/contact.module.scss";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Inputs = {
  name: string;
  email: string;
  title: string;
  content: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onChange" });

  const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const onSubmitHandler = async () => {
    const formData = getValues();
    console.log("data", formData);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      // if (!response.ok) {
      //   console.log("falling over");
      //   throw new Error(`response status: ${response.status}`);
      // }

      await response.json();
      toast.success("이메일이 성공적으로 전송되었습니다");
    } catch (error) {
      console.error(error);
      toast.error("이메일 전송에 실패하였습니다");
    }
  };

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <h2>CONTACT</h2>
        <div className={styles.contactAdress}>
          <Link
            href="mailto:yeahzzl1018@gmail.com"
            className={styles.addressLink}
          >
            <li>yeahzzl1018@gmail.com</li>
          </Link>
          <Link
            target="_blank"
            href="https://github.com/Yeahzzl"
            className={styles.addressLink}
          >
            <li>github</li>
          </Link>
          <Link
            target="_blank"
            href="https://velog.io/@yeahzzl/posts"
            className={styles.addressLink}
          >
            <li>blog</li>
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
                  minLength: {
                    value: 2,
                    message: "이름을 2자 이상 입력해주세요",
                  },
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
              })}
            />
            {errors.content && <p>{errors.content.message}</p>}
          </div>
          <button type="submit">SEND</button>
          <ToastContainer
            position="top-center"
            limit={1}
            closeButton={false}
            autoClose={2000}
            hideProgressBar
            className={styles.toast}
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
