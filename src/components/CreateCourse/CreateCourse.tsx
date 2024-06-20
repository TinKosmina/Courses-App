import { FC, useState } from "react";
import "./CreateCourse.css";
import { CreateCourseProps } from "./CreateCourse.types";
import { validateCreateCourseForm } from "src/helpers/formValidation";
import { RiAddLine } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import AuthorItem from "../AuthorItem/AuthorItem";
import Button from "src/common/Button/Button";
import Input from "src/common/Input/Input";
import { getCourseDuration } from "src/helpers/getCourseDuration";
import Header from "../Header/Header";

const CreateCourse: FC<CreateCourseProps> = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
  });

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    duration: "",
  });

  const [authorName, setAuthorName] = useState("");
  const [courseAuthors, setCourseAuthors] = useState<string[]>([]);
  const [authors, setAuthors] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAuthorNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthorName(e.target.value);
  };

  const validate = () => {
    const { errors: tempErrors, isValid } = validateCreateCourseForm(formData); // Use validateCreateCourseForm
    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data:", formData, courseAuthors);
    }
  };

  const handleAddAuthor = () => {
    if (authorName.trim().length > 0) {
      setAuthors((prevAuthors) => {
        const updatedAuthors = [...prevAuthors, authorName];
        return updatedAuthors;
      });
      setAuthorName("");
    }
  };

  const handleRemoveAuthorFromList = (author: string) => {
    setAuthors(authors.filter((a) => a !== author));
  };

  const handleAddCourseAuthor = (author: string) => {
    setCourseAuthors((prevCourseAuthors) => {
      const updatedCourseAuthors = [...prevCourseAuthors, author];
      return updatedCourseAuthors;
    });
    setAuthors((prevAuthors) => prevAuthors.filter((a) => a !== author));
  };

  const handleRemoveAuthor = (author: string) => {
    setCourseAuthors((prevCourseAuthors) => {
      const updatedCourseAuthors = prevCourseAuthors.filter(
        (a) => a !== author
      );
      return updatedCourseAuthors;
    });
  };

  const isValidDuration = !isNaN(Number(formData.duration));

  return (
    <>
      <Header />
      <div className="create-course-page">
        <div className="title-container">
          <h2 className="main-title">Course Edit/Create Page</h2>
        </div>
        <div className="create-course-container">
          <form className="create-course-form" onSubmit={handleSubmit}>
            <div className="main-info-section">
              <h2>Main Info</h2>
              <Input
                labelText="Title"
                placeholderText="Title"
                onChange={handleChange}
                value={formData.title}
                type="text"
                name="title"
                error={errors.title}
              />
              <h2 className="description">Description</h2>
              <textarea
                name="description"
                placeholder="Description"
                onChange={handleChange}
                value={formData.description}
                className={errors.description ? "error-border" : ""}
              />
              {errors.description && (
                <span className="error-text">{errors.description}</span>
              )}
              <div className="duration-section">
                <h2>Duration</h2>
                <div className="duration-container">
                  <Input
                    labelText="Duration"
                    placeholderText="Duration"
                    onChange={handleChange}
                    value={formData.duration}
                    type="text"
                    name="duration"
                    error={errors.duration}
                  />
                  <div className="span-container">
                    <span>
                      {isValidDuration
                        ? getCourseDuration(Number(formData.duration))
                        : "Please enter a number!"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="two-main">
                <div className="section">
                  <h2>Authors</h2>
                  <div className="duration-container">
                    <AuthorItem
                      authorName={authorName}
                      onChange={handleAuthorNameChange}
                      onAddAuthor={handleAddAuthor}
                    />
                  </div>
                  <h2>Authors List</h2>
                  <div className="author-list-container">
                    {authors.map((author, index) => (
                      <li key={index} className="author-item">
                        <p>{author}</p>
                        <div className="span-container">
                          <span
                            onClick={() => handleAddCourseAuthor(author)}
                            className="icon-button"
                          >
                            <RiAddLine size={20} />
                          </span>
                          <span
                            onClick={() => handleRemoveAuthorFromList(author)}
                            className="icon-button"
                          >
                            <MdDeleteForever size={20} />
                          </span>
                        </div>
                      </li>
                    ))}
                  </div>
                </div>
                <div>
                  <h2>Course Authors</h2>
                  {courseAuthors.length === 0 ? (
                    <p className="list">Author list is empty</p>
                  ) : (
                    <ul>
                      {courseAuthors.map((author, index) => (
                        <li key={index} className="author-item">
                          <p>{author}</p>
                          <div className="span-container">
                            <span onClick={() => handleRemoveAuthor(author)}>
                              <MdDeleteForever size={20} />
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div className="cta-buttons-container">
              <Button buttonText="CANCEL" onClick={() => {}} />
              <Button
                buttonText="CREATE COURSE"
                type="submit"
                onClick={() => {}}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateCourse;
