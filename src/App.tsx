import React, { ReactNode } from "react";
import "./App.css";

type SectionProps = {
  children: ReactNode;
  className?: string;
};
const Section = ({ children, className }: SectionProps) => {
  return (
    <div
      className={`bg-green-200 p-2 my-4 `}
      style={{ backgroundColor: "#f9f6f6" }}
    >
      <div
        className={`border-dashed border-2 p-2 text-center min-h-[90vh] ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

// https://coolors.co/palette/e8a598-ffb5a7-fec5bb-fcd5ce-fae1dd-f8edeb-f9e5d8-f9dcc4-fcd2af-fec89a

const App = () => {
  return (
    <div className="container p-4" style={{ backgroundColor: "#f8edeb" }}>
      <Section className="text-dark-blue flex flex-col">
        <div className="font-dancing text-5xl">Luke & Eva</div>
        <img src="/home.jpg" alt="home" className="w-full" />
        <div className="font-dynaPuff text-xl">WEDDING DAY</div>
        <div className="font-dynaPuff text-base">PLEASE SAVE THE DATE</div>
      </Section>
      <Section>
        <div className="grid grid-cols-2 text-center">
          <div>
            <div>Luke Liu</div>
            <div>劉學致</div>
            <div>PARENTS</div>
            <div>劉謹銘 林淑敏</div>
          </div>
          <div>
            <div>Luke Liu</div>
            <div>劉學致</div>
            <div>男方家長</div>
            <div>劉謹銘 林淑敏</div>
          </div>
        </div>

        <div>
          {/* <img
            src="/flower-pot.png"
            alt="flower-left"
            className="w-10 scale-x-[-1]"
          /> */}
          We Invite You To Celebrate Our Wedding
          {/* <img src="/flower-pot.png" alt="flower-right" className="w-10 " /> */}
        </div>
        <div className="bg-gray">2022.09.04 星期日</div>
        <div>時間：11:00 迎賓茶會與戶外證婚儀式 12:00 喜宴開席</div>
        <div>青青食尚花園會館-費加洛</div>
        <div>台北市士林區至善路二段266巷32號</div>
      </Section>
      <Section>
        <img src="/map.jpg" alt="map" />
        <a
          className="w-10 bg-purple-100"
          href="https://www.google.com/maps/dir//%E9%9D%92%E9%9D%92%E9%A3%9F%E5%B0%9A%E8%8A%B1%E5%9C%92%E6%9C%83%E9%A4%A8+111%E5%8F%B0%E5%8C%97%E5%B8%82%E5%A3%AB%E6%9E%97%E5%8D%80%E8%87%B3%E5%96%84%E8%B7%AF%E4%BA%8C%E6%AE%B5266%E5%B7%B732%E8%99%9F/@25.0980324,121.550742,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3442ac3b78936b87:0x87561057caaacb5"
        >
          前往導航
        </a>
      </Section>
    </div>
  );
};

export default App;
