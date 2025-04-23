import Instructor from "@/app/components/Instructor/Instructor";
import Marketing from "@/app/components/Instructor/Marketing";
import Mentor from "@/app/components/Instructor/Mentor";
import Teacher from "@/app/components/Instructor/Teacher";
import React from "react";

const page = () => {
  return (
    <div>
      <Instructor />
      <Teacher />
      <Mentor />
      <Marketing />
    </div>
  );
};

export default page;
