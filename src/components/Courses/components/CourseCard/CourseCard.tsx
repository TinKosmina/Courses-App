import { FC } from "react";
import { CourseCardProps } from "./CourseCard.types";
import "./CourseCard.css";
import Button from "src/common/Button/Button";
import { getCourseDuration } from "src/helpers/getCourseDuration";
import { formatCreationDate } from "src/helpers/formatCreationDate";

const CourseCard: FC<CourseCardProps> = ({
  title,
  description,
  authors = [],
  duration = 0,
  creationDate = "",
  authorsList,
  onClick,
}) => {
  const authorNames = authors.map((authorId) => {
    const author = authorsList.find((a) => a.id === authorId);
    return author ? author.name : "";
  });

  let authorsText = authorNames.join(", ");
  if (authorsText.length > 10) {
    authorsText = authorsText.substring(0, 10) + "...";
  }

  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="description">
        <p>{description}</p>
        <div className="details">
          <p>
            <strong>Authors:</strong> {authorsText}
          </p>
          <p>
            <strong>Duration:</strong> {getCourseDuration(duration)}
          </p>
          <p>
            <strong>Created:</strong> {formatCreationDate(creationDate)}
          </p>
          <Button buttonText="SHOW COURSE" onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
