import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import Layout from "../components/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="detail/:id" element={<Detail />} />{" "}
          {/*:id 동적인 값을 받아서 처리하겠다*/}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
