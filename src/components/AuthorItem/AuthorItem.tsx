import { FC } from "react";
import "./AuthorItem.css";
import { AuthorItemProps } from "./AuthorItem.types";
import Input from "src/common/Input/Input";
import Button from "src/common/Button/Button";

const AuthorItem: FC<AuthorItemProps> = ({
  authorName,
  onChange,
  onAddAuthor,
}) => {
  return (
    <div className="author-item">
      <Input
        labelText="Author Name"
        placeholderText="Input text"
        type="text"
        name="name"
        onChange={onChange}
        value={authorName}
      />
      <div className="button-container">
        <Button buttonText="CREATE AUTHOR" onClick={onAddAuthor} />
      </div>
    </div>
  );
};

export default AuthorItem;
