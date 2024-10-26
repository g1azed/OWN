import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import BrandStory from "./component/BrandStory";
import IntroBranding from "./brandingIntro/IntroBranding";
import AppService from "./appservice/AppService";
import Sticker from './stickerbook/Sticker'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<BrandStory />} />
      <Route path="/introbranding" element={<IntroBranding />} />
      <Route path="/appservice" element={<AppService />} />
      <Route path='/sticker' element ={<Sticker />} />
    </Routes>
  );
};

export default Router;
