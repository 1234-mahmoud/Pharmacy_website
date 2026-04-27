import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { setRole } from "../store/slices/roleSlice";
// import Admin from "./Admin";
// import Cashier from "./Cashier";
// import User from "./User";

import Hero from "../components/Hero";
import Features from "../components/Features";
import Roles from "../components/Roles";
import GetingStarted from "../components/GetingStarted";
export default function Home() {
  // const role = useSelector((state) => state.role.role);
  // const dispatch = useDispatch();

  

  return (
    <div className="">
     <Hero/>
     <Features/>
     <Roles/>
    <GetingStarted/>
    </div>
  );
}
