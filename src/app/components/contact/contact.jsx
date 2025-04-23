import React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col lg:flex-row justify-between p-10 gap-10">
      {/* Contact Form */}
      <div className="w-full lg:w-2/3 space-y-5">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="w-full">
            <label className="text-sm">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-full border border-gray-200 outline-none"
            />
          </div>
          <div className="w-full">
            <label className="text-sm">Email</label>
            <input
              type="email"
              placeholder="Your Email..."
              className="w-full p-3 rounded-full border border-gray-200 outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5">
          <div className="w-full">
            <label className="text-sm">Phone</label>
            <input
              type="text"
              placeholder="Your Phone"
              className="w-full p-3 rounded-full border border-gray-200 outline-none"
            />
          </div>
          <div className="w-full">
            <label className="text-sm">Subject</label>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 rounded-full border border-gray-200 outline-none"
            />
          </div>
        </div>

        <div>
          <label className="text-sm">Message</label>
          <textarea
            placeholder="Your Message"
            rows="6"
            className="w-full p-3 border border-gray-200 rounded-xl outline-none resize-none"
          ></textarea>
        </div>

        <button className="px-6 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-100 w-fit">
          SEND MESSAGE
        </button>
      </div>

      {/* Contact Info */}
      <div className="w-full lg:w-1/3 space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Before Contacting Us</h2>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            equidem invideo, miror magis posuere velit aliquet.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-xl font-semibold">Contact Information</h2>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="text-teal-500">✈️</span> Brooklyn, NY 10036, United
            States
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="text-teal-500">📱</span> 1-800-123-1234
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="text-teal-500">📧</span>{" "}
            example@language-school.com
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Social Media</h2>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-100 text-sm">
              <span>🐦</span> TWITTER
            </button>
            <button className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-full hover:bg-gray-100 text-sm">
              <span>📘</span> FACEBOOK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
