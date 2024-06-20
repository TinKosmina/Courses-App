import { mockedAuthorsList, mockedCoursesList } from "src/constants";
import Header from "../Header/Header";
import Courses from "../Courses/Courses";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  const authorsList = mockedAuthorsList;

  const handleCourseClick = (courseId: string) => {
    navigate(`/courses/${courseId}`);
  };

  return (
    <>
      <Header />
      <Courses
        courses={mockedCoursesList}
        authorsList={authorsList}
        onCourseClick={handleCourseClick}
      />
    </>
  );
};

export default Homepage;
