import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="grid sm:grid-cols-12 p-4 bg-[#1e2d3b]">
      <div className="sm:col-span-4 mx-auto sm:my-auto">
        <h2 className="text-2xl md:text-6xl font-bold">Contact me</h2>
        <p className="text-sm md:text-2xl font-normal">Feel free to reach out</p>
      </div>
      <div className="sm:col-span-8 min-h-56 h-auto p-6 sm:px-36">
        <form action="">
          <div className="mt-3">
            <label htmlFor="name" className="text-xl sm:text-2xl">Your Name</label> <br />
            <input type="text" placeholder="Enter your name" id="name" className="px-2 py-2 w-full rounded-md bg-[#d0d7f2]"/>
          </div>
          <div className="mt-3">
            <label htmlFor="email" className="text-xl sm:text-2xl">Email</label> <br />
            <input type="text" placeholder="Enter your email" id="email" className="px-2 py-2 w-full rounded-md  bg-[#d0d7f2]"/>
          </div>
          <div className="mt-3">
            <label htmlFor="message"  className="text-xl sm:text-2xl">Your Message</label>
            <textarea name="message" placeholder="Enter your message" id="message" rows="4" className="px-2 py-2 w-full rounded-md  bg-[#d0d7f2]"></textarea>
          </div>
          <button className="font-medium mt-2 rounded-lg px-3 py-2 bg-[#d0d7f2] text-[#3d546b]">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;