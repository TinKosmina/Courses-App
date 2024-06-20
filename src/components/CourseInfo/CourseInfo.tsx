import { FC } from "react";
import { CourseInfoProps } from "./CourseInfo.types";
import "./CourseInfo.css";
import Button from "src/common/Button/Button";
import { getCourseDuration } from "src/helpers/getCourseDuration";
import { formatCreationDate } from "src/helpers/formatCreationDate";
import { useNavigate, useParams } from "react-router-dom";
import { mockedAuthorsList, mockedCoursesList } from "src/constants";

const CourseInfo: FC<CourseInfoProps> = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const course = mockedCoursesList.find((course) => course.id === courseId);
  const authorsList = mockedAuthorsList;

  if (!course) {
    return <p>Course not found!</p>;
  }

  const handleBack = () => {
    navigate("/courses");
  };

  return (
    <>
      <div className="wrapper">
        <h1>{course.title}</h1>
        <div className="card-container">
          <div className="course-information">
            <div className="course-description">
              <h3>Description:</h3>
              <p>{course.description}</p>
            </div>
            <div className="course-details">
              <p>
                <strong>ID:</strong> {course.id}
              </p>
              <p>
                <strong>Duration:</strong> {getCourseDuration(course.duration)}
              </p>
              <p>
                <strong>Created:</strong>{" "}
                {formatCreationDate(course.creationDate)}
              </p>
              <p>
                <strong>Authors:</strong>{" "}
                {course.authors
                  .map(
                    (authorId) =>
                      authorsList.find((author) => author.id === authorId)
                        ?.name || ""
                  )
                  .join(", ")}
              </p>
            </div>
          </div>
        </div>
        <div className="button-container">
          <Button buttonText="BACK" onClick={handleBack} />
        </div>
      </div>
    </>
  );
};

export default CourseInfo;
