import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false); // for email sent status
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(
        "service_3v0ibjp", // email service ID
        "template_c98fw83", // email template ID
        form.current, // form reference
        "GCdxPF7E3CvSKGych", // public key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // reset form after sending
          toast.success("Email sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setTimeout(() => {
            setIsSent(false); // reset sent status after 3 seconds
            setSending(false); // reset sending status
          }, 3000);
        },
        (error) => {
          console.error("Email sending failed:", error);
          toast.error("Failed to send email. Please try again later.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
      );
  };

  return (
    <section
      id="contact"
      className="py-20 px-[5vw] lg:px-[10vw] font-sans bg-[#0a0a0a] text-white"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Get In{" "}
            <span className="bg-gradient-to-r from-[#8245ec] to-[#ff6b6b] bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#8245ec] to-[#ff6b6b] mx-auto rounded-full mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
            I’d love to hear from you—reach out for any opportunities or
            questions!
          </p>
        </div>

        <ToastContainer />

        {/* Contact Form */}
        <div className="mt-8 w-full max-w-md bg-[#161625] p-6 rounded-2xl shadow-2xl border border-gray-800 items-center justify-center text-center mx-auto">
          <h3 className="text-xl font-semibold text-white text-center mb-4">
            Connect With Me <span className="ml-1">🚀</span>
          </h3>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col space-y-4"
          >
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />

            {/* Send Button */}
            <button
              disabled={sending || isSent}
              type="submit"
              className={`w-full py-3 font-semibold rounded-md transition text-white ${
                sending || isSent
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90"
              }`}
            >
              {sending ? "Sending..." : isSent ? "Sent!" : "Send"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
