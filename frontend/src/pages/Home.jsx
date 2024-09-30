import React, { useState } from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Header } from "../components/Header/Header";

const Home = () => {
  // states which is use for primary thing
  const [activeItem, setActiveItem] = useState('Calendar');


  return (
    <div className="flex">
      <Sidebar activeItem={activeItem} setActiveItem={setActiveItem}/>
      <Header activeItem={activeItem} />
    </div>
  );
};

export default Home;
