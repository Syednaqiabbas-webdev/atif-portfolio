import React, { useRef, useState, useEffect } from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaSquarePhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const formRef = useRef(); // Corrected reference name
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_udq9mrq", // Your EmailJS service ID
        "template_z6qrb3a", // Your EmailJS template ID
        formRef.current, // Use formRef here
        "H0eOXraRJc_MkmgpC" // Your EmailJS public key
      )
      .then(
        (result) => {
          setSuccess(true); // Success state set to true
        },
        (error) => {
          setError(true); // Error state set to true
        }
      );
  };

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setError(false);
      }, 3000); // 3 seconds

      // Cleanup the timer when the component is unmounted or when success/error changes
      return () => clearTimeout(timer);
    }
  }, [success, error]);
  return (
    <div className="py-12 w-full">
  <motion.h2
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: -100 }}
    transition={{ duration: 1 }}
    className="my-10 text-center text-4xl"
  >
    Contact
    <span className="text-neutral-500"> Me</span>
  </motion.h2>
  <div className="flex flex-wrap justify-between items-center py-6 lg:py-12 gap-8">
    <motion.div 
     whileInView={{ opacity: 1, x: 0 }}
     initial={{ opacity: 0, x: -100 }}
     transition={{ duration: 1 }}
    className="lg:w-1/3 md:w-full xs:w-full flex justify-center items-center flex-col">
      <h2 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent font-bold text-3xl py-8">
        Let's Connect
      </h2>
      <span className="text-xl font-thin tracking-widertext-center font-sans">
        Looking for a passionate developer to join your next project, or
        just want to say hello? I’m all ears! Get in touch and let’s discuss
        how we can create impactful solutions.
      </span>
    </motion.div>

    <div className="lg:w-1/4 md:w-1/2 xs:w-full">
      <div className="email outer-shadow rounded-2xl flex flex-col items-center lg:py-4 md:py-3 xs:py-2 mb-4">
        <span className="lg:text-2xl md:text-xl py-2">
          <IoMdMail />
        </span>
        <span className="lg:text-2xl md:text-xl ">Email</span>
        <span>naqiabbas.webdev@gmail.com</span>
      </div>
      <div className="phone outer-shadow rounded-2xl flex flex-col items-center lg:py-4 md:py-3 xs:py-2 mb-4">
        <span className="lg:text-2xl md:text-xl py-2">
          <FaSquarePhone />
        </span>
        <span className="lg:text-2xl md:text-xl ">Phone</span>
        <span>+91 917013055</span>
      </div>
      <div className="address outer-shadow rounded-2xl flex flex-col items-center lg:py-4 md:py-3 xs:py-2 mb-4">
        <span className="lg:text-2xl md:text-xl py-2">
          <FaLocationDot />
        </span>
        <span className="lg:text-2xl md:text-xl ">Address</span>
        <span>{CONTACT.address}</span>
      </div>
    </div>

    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      className="form-container flex flex-col gap-2 flex-1 lg:w-1/3 md:w-1/2 xs:w-full"
    >
      <form
        onSubmit={sendEmail}
        ref={formRef}
        className="flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          required
          name="from_name"
          className="lg:p-3 md:p-2 xs:p-1 bg-transparent rounded-xl text-white outer-shadow"
        />
        <input
          type="email"
          placeholder="Your Email"
          name="to_name"
          required
          className="lg:p-3 md:p-2 xs:p-1 bg-transparent rounded-xl text-white outer-shadow"
        />
        <textarea
          rows={8}
          placeholder="Your Message"
          name="message"
          required
          className="lg:p-3 md:p-2 xs:p-1 bg-transparent rounded-xl text-white outer-shadow"
        />
        <button
          type="submit"
          className="lg:p-3 md:p-2 xs:p-1 border-none btn-grad cursor-pointer lg:text-2xl xs:text-xl tracking-wider"
        >
          Submit
        </button>
      </form>
      
<span
            className={`${
              !success && !error ? "opacity-0 invisible" : "opacity-100 visible"
            } fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-opacity-50 transition-opacity duration-500`}
          >
            {error && (
              <p className="text-red-500  btn-grad text-xl font-bold font-sans outer-shadow p-4 rounded-2xl">
                Error sending email
              </p>
            )}
            {success && (
              <p className="text-green-500  btn-grad text-xl font-bold font-sans outer-shadow p-4 rounded-2xl">
                Email sent successfully!
              </p>
            )}
          </span>
    </motion.div>
  </div>
</div>

  );
};

export default Contacts;

