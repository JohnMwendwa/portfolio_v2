import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export interface EmailProps {
  to: string;
  subject: string;
  text?: string;
}

export const sendEmail = async (mailOptions: EmailProps) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_NAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const res = await transporter.sendMail(mailOptions);

  return res;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(400).json({
      error: "Bad Request",
    });
  }

  const { name, email, subject, message } = req.body;

  if (!name.trim()) {
    return res.status(401).json({
      error: "Please add your name",
    });
  } else if (!email.trim()) {
    return res.status(401).json({
      error: "Please add a valid email",
    });
  } else if (!subject.trim()) {
    return res.status(401).json({
      error: "Please add the subject of this email",
    });
  } else if (!message.trim()) {
    return res.status(401).json({
      error: "Please add your name",
    });
  }

  try {
    const response = await sendEmail({
      to: process.env.EMAIL_NAME,
      subject: subject,
      text: `${name} - ${email} \n\n${message}`,
    });

    if (response.rejected.length || !response.messageId) {
      res.status(400).json({
        error: "Email not sent",
      });
      return;
    }

    if (response.messageId) {
      res.status(200).json({
        message: "Email sent successfully!",
      });
      return;
    }
  } catch (e) {
    res.status(500).json({
      error: "Email not sent",
    });
  }
};

export default handler;
