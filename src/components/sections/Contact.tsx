import Link from "next/link";
import { FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import WhatsappIcon from "assets/whatsapp";
import MailIcon from "assets/mail";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Please enter a valid name!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    if (!email.trim()) {
      toast.error("Please enter a valid email!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    if (!message.trim()) {
      toast.error("Please enter a valid message!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    setLoading(true);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ name, email, message }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    if (data.error) {
      setLoading(false);
      toast.error(data.error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      setLoading(false);
      toast.success(data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setName("");
      setEmail("");
      setMessage("");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-full px-8">
      <ToastContainer />
      <h1 className="font-bold text-yellow-400 text-4xl sm:text-5xl mb-4 w-full text-center uppercase tracking-tight">
        Contact Me
      </h1>

      <div className="flex justify-center space-x-4 text-white mb-6">
        <Link
          href={"https://wa.me/+254716237927"}
          target="_blank"
          className="group hover:text-yellow-400 inline-flex flex-col items-center justify-center"
        >
          Whatsapp
          <WhatsappIcon className="group-hover:fill-yellow-400" />
        </Link>
        <Link
          href={"mailto:hey@ohnmwendwa.me"}
          className="group hover:text-yellow-400 inline-flex flex-col items-center justify-center"
        >
          Email
          <MailIcon className="group-hover:fill-yellow-400" />
        </Link>
      </div>

      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="relative w-full">
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="peer rounded-sm ring-2 ring-yellow-600 focus:ring focus:ring-yellow-400 bg-transparent w-full h-10 px-4 focus:outline-none placeholder-transparent text-white"
          />
          <label
            htmlFor="name"
            className="absolute transition-all left-0 -top-3.5 ml-4 px-2 bg-gray-900 peer-placeholder-shown:top-2 peer-focus:-top-3.5 text-gray-300"
          >
            Enter your name
          </label>
        </div>
        <div className="relative w-full mt-6">
          <input
            id="email"
            type="emal"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="peer rounded-sm ring-2  ring-yellow-600 focus:ring focus:ring-yellow-400 bg-transparent w-full h-10 px-4 focus:outline-none placeholder-transparent text-white"
          />
          <label
            htmlFor="email"
            className="absolute transition-all left-0 -top-3.5 ml-4 px-2 bg-gray-900 peer-placeholder-shown:top-2 peer-focus:-top-3.5 text-gray-300"
          >
            Enter your email
          </label>
        </div>
        <div className="relative w-full mt-6">
          <textarea
            id="textarea"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="peer rounded-sm ring-2 ring-yellow-600 focus:ring focus:ring-yellow-400 bg-transparent w-full px-4 py-2 focus:outline-none placeholder-transparent text-white"
          />
          <label
            htmlFor="textarea"
            className="absolute transition-all left-0 -top-3.5 ml-4 px-2 bg-gray-900 text-gray-300"
          >
            Enter your message
          </label>
        </div>
        <div className="flex justify-center w-full mt-2">
          <button
            type="submit"
            className={`${
              loading ? "bg-gray-400" : "bg-orange-700 hover:bg-orange-600"
            } text-white px-6 py-3 rounded-md hover:scale-105 focus:ring-yellow-400 focus:scale-105 focus:ring focus:ring-offset-2 ease-linear transition-all`}
            disabled={loading}
          >
            Send Feedback
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
