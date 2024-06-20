import { FC } from "react";
import { EmptyCourseListProps } from "./EmptyCourseList.types";
import Button from "src/common/Button/Button";
import "./EmptyCourseList.css";

const EmptyCourseList: FC<EmptyCourseListProps> = () => {
  return (
    <div className="container">
      <h1>Course List is Empty</h1>
      <p>Please use "Add New Course" button to add your first course'</p>
      <Button buttonText="ADD NEW COURSE" onClick={() => {}} />
    </div>
  );
};

export default EmptyCourseList;
