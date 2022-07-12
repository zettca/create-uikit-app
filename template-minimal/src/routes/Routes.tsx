import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./Home"));
const HomeSub = React.lazy(() => import("./HomeSub"));
const NotFound = React.lazy(() => import("./NotFound"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" replace />} />
      <Route path="/home" element={<Home />}>
        <Route path=":id" element={<HomeSub />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
