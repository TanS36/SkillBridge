// CoursePage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ui/CoursePage.module.sass";

export const courseData = {
  "easy-recipes": {
    title: "Самые лёгкие рецепты дома",
    banner: "easyRecipesBanner", 
    lessons: [
      { number: 1, name: "Готовим яичницу", path: "/course/easy-recipes/lesson-1", text:"Возьмите яйцо и сковороду" },
      { number: 2, name: "Простой суп за 20 минут", path: "/course/easy-recipes/lesson-2", text:"Бульон и овощи" },
    ],
  },
  "iron-usage": {
    title: "Как пользоваться утюгом",
    banner: "ironUsageBanner",
    lessons: [
      { number: 1, name: "Подготовка утюга", path: "/course/iron-usage/lesson-1", text:"Проверьте воду"},
      { number: 2, name: "Как гладить рубашку", path: "/course/iron-usage/lesson-2", text:"Начинайте с воротника" },
    ],
  },
  "tax": {
    title: "Как платить налоги",
    banner: "taxpaying",
    lessons: [
      { number: 1, name: "Виды налогов", path: "/course/tax/lesson-1", text:"1) Процентный, 2)Фиксированный" },
      { number: 2, name: "Группы налогов", path: "/course/tax/lesson-2", text: "Богачи и предприятие"},
    ],
  },
};

const categoryColors = {
  "easy-recipes": "#28a745",
  "iron-usage": "#d42824",
  "tax": "#007bff",
};

const CoursePage = () => {
  const { courseId } = useParams();
  const course = courseData[courseId];
  const color = categoryColors[courseId] || "#362d50"; 
  const navigate = useNavigate();

  if (!course) return <h1>Курс не найден</h1>;

  return (
    <div className={styles.coursecontainer} style={{ border: `3px solid ${color}` }}>
      <h1 style={{ color }}>{course.title}</h1>
      <img src={course.banner} alt={course.title} className={styles.banner} />
      <h2 style={{ color }}>Уроки</h2>
      <ul>
        {course.lessons.map((lesson) => (
          <li 
            onClick={() => navigate(lesson.path)} 
            key={lesson.number}
          >
            {lesson.number}. {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursePage;