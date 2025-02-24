import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { GoX } from "react-icons/go"
const Contact = () => {

  const form = useRef();
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderMassage, setSenderMassage] = useState("");
  const [isSuccess, onIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_uigo8da', 'template_mxk55jr', form.current, {
        publicKey: '_sXDhOra5U_ST71Im',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSenderName("");
          setSenderEmail("");
          setSenderMassage("");
          onIsSuccess(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      
  };

  return (
    <div id="contact" className="grid sm:grid-cols-12 p-4 sm:mx-10 shadow-md shadow-[#1e2d3b] rounded-xl">
      <div className="sm:col-span-4 mx-auto sm:my-auto">
        <h2 className="text-2xl md:text-6xl font-bold">Contact me</h2>
        <p className="text-sm md:text-2xl font-normal">Feel free to reach out</p>
      </div>
      <div className="sm:col-span-8 min-h-56 h-auto p-6 sm:px-36">
        <form ref={form} onSubmit={sendEmail}>
          <div className="mt-3">
            <label htmlFor="name" className="text-xl sm:text-2xl">Your Name</label> <br />
            <input type="text" placeholder="Enter your name" id="name" name="senderName"
              value={senderName} onChange={(e) => setSenderName(e.target.value)}
            className="px-2 py-2 w-full rounded-md bg-[#d0d7f2]  hover:opacity-80 text-black"/>
          </div>
          <div className="mt-3">
            <label htmlFor="email" className="text-xl sm:text-2xl">Email</label> <br />
            <input type="text" placeholder="Enter your email" id="email" name="senderEmail"
            value={senderEmail} onChange={(e) => setSenderEmail(e.target.value)}
            className="px-2 py-2 w-full rounded-md  bg-[#d0d7f2] hover:opacity-80 text-black"/>
          </div>
          <div className="mt-3">
            <label htmlFor="message"  className="text-xl sm:text-2xl">Your Message</label>
            <textarea name="message" placeholder="Enter your message" id="message" rows="4"
            value={senderMassage} onChange={(e) => setSenderMassage(e.target.value)}
            className="px-2 py-2 w-full rounded-md  bg-[#d0d7f2] hover:opacity-80 text-black"></textarea>
          </div>
          <div className="flex">
            <button className="font-medium mt-2 rounded-lg px-3 py-2 bg-[#d0d7f2] hover:scale-105 duration-200 transition-all ease-in-out text-[#3d546b]">Send Message</button>
            <span className={isSuccess ? "block  duration-300 transition-all ease-in-out font-medium mt-2 rounded-lg  bg-[#1B263B] text-green-500 flex justify-center items-center p-3 ml-2" : "hidden -mr-10"} >Email sent successfully <GoX size={20} onClick={(prev) => onIsSuccess(!prev)} className="hover:cursor-pointer m-1" /> </span>
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default Contact;