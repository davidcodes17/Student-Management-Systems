import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/student/SignIn";
import RegisterStudnet from "./pages/student/RegisterStudent";
import Dashboard from "./pages/admin/Dashboard";
import ViewStudents from "./pages/admin/ViewStudents";
import ViewCourses from "./pages/admin/ViewCourses";
import NotFound from "./pages/not_found/NotFound";
import StudentDashboard from "./pages/student/StudentDashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/student/login" element={<SignIn />}></Route>
      <Route path="/student/register" element={<RegisterStudnet />}></Route>
      <Route path="/student/dashboard" element={<StudentDashboard />}></Route>
      <Route path="/admin" element={<Dashboard />}></Route>
      <Route path="/users" element={<ViewStudents />}></Route>
      <Route path="/courses" element={<ViewCourses />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default App;
