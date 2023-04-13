import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from "../pages/login";
import Lesson from "../pages/Lesson";
import Register from "../pages/Register";
import Front from "../pages/Front";
import PaymentSuccess from "../pages/PaymentSuccess";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Front />} />
      <Route path="login" element={<Login />} />
      <Route path="lesson" element={<Lesson />} />
      <Route path="register" element={<Register />} />
      <Route path="success" element={<PaymentSuccess />} />
    </Route>
  )
);
