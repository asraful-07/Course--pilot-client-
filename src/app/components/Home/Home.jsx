import React from "react";
import Banner from "../Banner";
import Headline from "../Headline";
import Discount from "../Discount";
import Review from "../Review";
import PopularInsights from "../PopularInsights";

const Home = () => {
  return (
    <div>
      <Banner />
      <Headline />
      <Discount />
      <Review />
      <PopularInsights />
    </div>
  );
};

export default Home;
