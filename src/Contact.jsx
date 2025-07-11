import React from "react";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full h-screen flex justify-center items-center p-4"
    >
      <form
        method="post"
        action="https://getform.io/f/axoynqjb"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 ">
            Contact
          </p>
          <p className="text-gray-300 py-4"> Contact form</p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 rounded-md"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="bg-[#ccd6f6] p-2 my-4 rounded-md"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 rounded-md "
          name="message"
          rows={10}
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 px-4 py-3 my-8 mx-auto flex item-center rounded-full">
          Send Information
        </button>
      </form>
    </div>
  );
};

export default Contact;
