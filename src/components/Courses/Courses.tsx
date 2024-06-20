import { FC } from "react";
import { CoursesProps } from "./Courses.types";
import CourseCard from "./components/CourseCard/CourseCard";
import "./Courses.css";
import Button from "src/common/Button/Button";
import EmptyCourseList from "../EmptyCourseList/EmptyCourseList";
import { useNavigate } from "react-router-dom";

const Courses: FC<CoursesProps> = ({ courses, authorsList, onCourseClick }) => {
  const navigate = useNavigate();

  if (courses.length === 0) {
    return <EmptyCourseList />;
  }

  const handleAddNewCourseClick = () => {
    navigate("/courses/add");
  };

  return (
    <>
      <div className="search-container">
        <Button buttonText="ADD NEW COURSE" onClick={handleAddNewCourseClick} />
      </div>
      <div>
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            description={course.description}
            authors={course.authors}
            duration={course.duration}
            creationDate={course.creationDate}
            authorsList={authorsList}
            onClick={() => onCourseClick(course.id)}
          />
        ))}
      </div>
    </>
  );
};

export default Courses;
