import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export const POST = async (request: NextRequest) => {
  try {
    const username = process.env.NEXT_PUBLIC_USERNAME;
    const password = process.env.NEXT_PUBLIC_AUTH_PASS;
    const authEmail = process.env.NEXT_PUBLIC_AUTH_USER;

    if (!username || !password || !authEmail) {
      throw new Error("정보에 오류가 발생하였습니다");
    }

    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const title = formData.get("title");
    const content = formData.get("content");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      secure: false,
      port: 587,
      auth: {
        user: authEmail,
        pass: password,
      },
    });

    const mailOptions = {
      from: username,
      to: authEmail,
      //   replyTo: email,
      subject: `[Portfolio] 문의사항`, //메일제목
      html: `
      <p>이름/소속: ${name} </p>
      <p>이메일: ${email} </p>
      <p>제목: ${title}</p>
      <p>문의 내용: ${content} </p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.log(error);
    NextResponse.json({ message: "fail" }, { status: 500 });
  }
};
