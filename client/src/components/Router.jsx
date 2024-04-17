import React from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Filter from "./Filter";
import Details from "./Details";

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Home />} path="/home" />
          <Route element={<Filter />} path="/filter" />
          <Route element={<Details />} path="/details" />
        </Routes>
      </BrowserRouter>
    </>
  );
};
