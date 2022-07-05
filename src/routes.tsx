import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "pages/home";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/cats" replace />} />
        <Route path="/:filter" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
