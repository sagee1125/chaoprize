import React from "react";
import Banner from "../components/Banner";

const Homepage: React.FC = () => {
  return (
    <main className="">
      {/* Banner 區塊 */}
      <Banner />

      {/* 其他區塊可以在這裡擴展 */}
      {/* <Features /> */}
      {/* <About /> */}
      {/* <Footer /> */}
    </main>
  );
};

export default Homepage;
