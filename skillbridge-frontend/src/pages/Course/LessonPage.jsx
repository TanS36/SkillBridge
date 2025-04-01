// CoursePage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import styles from "./ui/CoursePage.module.sass";
import { courseData } from "./CoursePage"; // Импорт данных курсов

const LessonPage = () => {
    const { courseId, lessonID } = useParams();
    const course = courseData[courseId];
  
    if (!course) return <h1 className={styles.coursecontainer}>Курс не найден</h1>;
  
    const lesson = course.lessons.find(l => l.path.endsWith(lessonID));
    if (!lesson) return <h1 className={styles.coursecontainer}>Урок не найден</h1>;
  
    return (
      <div className={styles.coursecontainer}>
        <h1>{lesson.name}</h1>
        {lesson.pictire && <img src={lesson.pictire} alt={lesson.name} className={styles.banner} />}
        <p>{lesson.text}</p>
      </div>
    );
  };
  
  export default LessonPage;
