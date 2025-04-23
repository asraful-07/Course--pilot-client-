"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 items-center">
        {/* Left side - Images */}
        <div className="flex flex-col gap-4 items-center lg:items-start">
          <img
            src="https://images.unsplash.com/photo-1601582583303-9e2d9b9d0ab9?auto=format&fit=crop&w=400&q=80"
            alt="Student"
            className="rounded-xl w-[300px] h-[200px] object-cover"
          />
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="bg-blue-600 text-white text-center py-6 rounded-lg w-full">
              <h2 className="text-3xl font-bold">10k+</h2>
              <p className="text-sm">Students Active Our Courses</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=400&q=80"
              alt="Group Study"
              className="rounded-xl w-full h-[110px] object-cover"
            />
          </div>
        </div>

        {/* Right side - Content */}
        <div className="flex-1">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-3 py-1 rounded-full mb-2">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Welcome To <span className="text-blue-600">NonAcademy</span>
          </h2>
          <p className="text-gray-600 mb-6">
            NonAcademy is a blockchain learning platform offering in-depth
            courses and hands-on experience to help developers master blockchain
            technology. Our expert mentors make blockchain development
            accessible, opening new career opportunities for everyone.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-semibold text-blue-600 flex items-center gap-2 text-lg">
                📘 Blockchain Development for Beginners
              </h4>
              <p className="text-sm text-gray-600">
                Start your career with foundational blockchain skills.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600 flex items-center gap-2 text-lg">
                📘 Advanced Blockchain Mastery
              </h4>
              <p className="text-sm text-gray-600">
                Take your expertise to the next level.
              </p>
            </div>
          </div>

          <div className="space-y-2 mb-6">
            <p className="flex items-center text-gray-700 text-sm gap-2">
              <FaCheckCircle className="text-blue-500" /> Blockchain
              fundamentals and smart contracts
            </p>
            <p className="flex items-center text-gray-700 text-sm gap-2">
              <FaCheckCircle className="text-blue-500" /> Build and deploy
              decentralized applications (DApps)
            </p>
            <p className="flex items-center text-gray-700 text-sm gap-2">
              <FaCheckCircle className="text-blue-500" /> Skills for a
              successful blockchain career
            </p>
          </div>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300">
            Learn More →
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
