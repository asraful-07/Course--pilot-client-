"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const students = [
  {
    name: "Alice Johnson",
    course: "Full-Stack Web Development",
    feedback:
      "CoursePilot transformed my career! The AI-powered recommendations helped me pick the right path.",
    image: "/assats/stories/student1.jpg",
  },
  {
    name: "Mark Robinson",
    course: "Data Science & Machine Learning",
    feedback:
      "The hands-on projects and mentorship at CoursePilot were game changers for me!",
    image: "/assats/stories/student2.jpg",
  },
  {
    name: "Sophie Williams",
    course: "UI/UX Design",
    feedback:
      "I landed my dream job after completing the UI/UX course. CoursePilot made learning engaging!",
    image: "/assats/stories/student3.jpg",
  },
  {
    name: "David Brown",
    course: "Cybersecurity",
    feedback:
      "The interactive lessons and projects helped me gain real-world experience before landing a job.",
    image: "/assats/stories/student4.jpg",
  },
  {
    name: "Emma Watson",
    course: "Artificial Intelligence",
    feedback:
      "CoursePilot’s AI-powered recommendations helped me focus on the right learning path!",
    image: "/assats/stories/student5.jpg",
  },
  {
    name: "Sophie Williams",
    course: "UI/UX Design",
    feedback:
      "I landed my dream job after completing the UI/UX course. CoursePilot made learning engaging!",
    image: "/assats/stories/student3.jpg",
  },
  {
    name: "Sophie Williams",
    course: "UI/UX Design",
    feedback:
      "I landed my dream job after completing the UI/UX course. CoursePilot made learning engaging!",
    image: "/assats/stories/student2.jpg",
  },
  {
    name: "Sophie Williams",
    course: "UI/UX Design",
    feedback:
      "I landed my dream job after completing the UI/UX course. CoursePilot made learning engaging!",
    image: "/assats/stories/student1.jpg",
  },
];

export default function SuccessStories() {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [index, itemsPerPage]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % (students.length - itemsPerPage + 1));
  };

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto text-center">
        <div className="text-center mb-8">
          <h5 className="text-emerald-600 font-semibold text-sm uppercase bg-emerald-200 inline-block px-4 py-2 rounded-full mb-5">
            Student Success Stories
          </h5>
          <h2 className="text-3xl font-bold w-3/4 mx-auto">
            See how CoursePilot has helped students achieve their goals and land
            their dream careers!
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex space-x-6"
              animate={{ x: `-${index * (100 / itemsPerPage)}%` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {students.map((student, i) => (
                <div
                  key={i}
                  className="min-w-full sm:min-w-1/2 md:min-w-1/3 border rounded-lg shadow-lg p-8 text-left flex flex-col items-center transition-all hover:shadow-xl"
                >
                  {/* Student Image */}
                  <Image
                    src={student.image}
                    alt={student.name}
                    width={150}
                    height={150}
                    className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full border-4 border-emerald-500 object-cover aspect-square shadow-lg"
                  />

                  {/* Student Details */}
                  <h4 className="text-lg sm:text-xl font-semibold  mt-4">
                    {student.name}
                  </h4>
                  <p className="text-sm sm:text-base text-emerald-600 font-medium">
                    {student.course}
                  </p>
                  <p className=" mt-4 text-center italic text-sm sm:text-base">
                    "{student.feedback}"
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: students.length - itemsPerPage + 1 }).map(
            (_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === index ? "bg-emerald-600 scale-110" : "bg-gray-300"
                }`}
                onClick={() => setIndex(i)}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
