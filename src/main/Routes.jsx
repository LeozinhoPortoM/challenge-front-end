import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../components/home/Home";
import CarCrud from "../components/car/CarCrud";

export default (props) => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/cars" element={<CarCrud />} />
    <Route path="*" element={<Home />} />
  </Routes>
);
