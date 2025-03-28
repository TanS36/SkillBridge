// routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import RegisterPage from "../entities/feature/auth/register/RegisterPage";
import LoginPage from "../entities/feature/auth/login/LoginPage";
import ProfilePage from "../pages/Profile/ProfilePage";
import CoursePage from "../pages/Course/CoursePage";



const AppRoutes = ({ isLoggedIn, username, handleLogin }) => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/course/:courseId" element={<CoursePage />} />
        </Routes>
    );
};

export default AppRoutes;
