import Instructor from "@/app/components/Instructor/Instructor";
import Mentor from "@/app/components/Instructor/Mentor";
import Teacher from "@/app/components/Instructor/Teacher";
import React from "react";

const page = () => {
  return (
    <div>
      <Instructor />
      <Teacher />
      <Mentor />
    </div>
  );
};

export default page;
