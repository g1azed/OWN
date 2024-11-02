import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import BrandStory from "./component/BrandStory";
import IntroBranding from "./brandingIntro/IntroBranding";
import AppService from "./appservice/AppService";
import PostCard from './stickerbook/Sticker';
import Analog from './analog/Analog';
import NotFound from "./component/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<BrandStory />} />
      <Route path="/introbranding" element={<IntroBranding />} />
      <Route path="/appservice" element={<AppService />} />
      <Route path="/postCard" element={<PostCard />} />
      <Route path="/analog" element={<Analog />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;