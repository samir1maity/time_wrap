import React, { useState } from "react";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Header } from "../components/Header/Header";
import Todoinput from "../components/Main/Todoinput";

const Home = () => {
  // states which is use for primary thing

  return (
    <div className="flex">
      <Todoinput />
    </div>
  );
};

export default Home;
