import React from "react";
import Banner from "../Banner";
import Headline from "../Headline";
import Discount from "../Discount";
import Review from "../Review";
import PopularInsights from "../PopularInsights";
import Statice from "../Statice";
import SuccessStories from "../SuccessStories";
import Achievement from "../Achievement";
import Testimonial from "../Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Headline />
      <Discount />
      <Review />
      <PopularInsights />
      <Statice />
      <SuccessStories />
      <Achievement />
      <Testimonial />
    </div>
  );
};

export default Home;
