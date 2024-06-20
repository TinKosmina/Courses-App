import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import Homepage from "./components/Homepage/Homepage";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import CourseInfo from "./components/CourseInfo/CourseInfo";
import { useEffect } from "react";
import EmptyCourseList from "./components/EmptyCourseList/EmptyCourseList";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && location.pathname === "/") {
      navigate("/courses");
    }
  }, [navigate, location.pathname]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (
      !token &&
      location.pathname !== "/login" &&
      location.pathname !== "/registration"
    ) {
      navigate("/login");
    }
  }, [location, navigate]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/courses" element={<Homepage />}></Route>
        <Route path="/courses/:courseId" element={<CourseInfo />} />
        <Route path="/courses/add" element={<CreateCourse />} />
        <Route path="/empty" element={<EmptyCourseList />} />
      </Routes>
    </>
  );
}

export default App;
