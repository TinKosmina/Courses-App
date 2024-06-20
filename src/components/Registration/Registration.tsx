import { RegistrationProps } from "./Registration.types";
import { FC, useState, ChangeEvent, FormEvent } from "react";
import "./Registration.css";
import Button from "src/common/Button/Button";
import Input from "src/common/Input/Input";
import { validateRegistration } from "src/helpers/formValidation";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";

const Registration: FC<RegistrationProps> = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { isValid, tempErrors } = validateRegistration(formData);
    setErrors(tempErrors);

    if (isValid) {
      const newUser = {
        name: formData.name,
        password: formData.password,
        email: formData.email,
      };

      try {
        const response = await fetch("http://localhost:4000/register", {
          method: "POST",
          body: JSON.stringify(newUser),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const result = await response.json();
          localStorage.setItem("userName", formData.name);
          console.log("Registration successful:", result);
          navigate("/login");
        } else {
          const errorResult = await response.json();
          console.log("Registration failed:", errorResult);
        }
      } catch (error) {
        console.error("Error during registration:", error);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="registration-page">
        <h2>Registration</h2>
        <div className="registration-container">
          <form className="registration-form" onSubmit={handleSubmit}>
            <Input
              labelText="Name"
              placeholderText="Enter your name"
              onChange={handleChange}
              value={formData.name}
              type="text"
              name="name"
              error={errors.name}
            />

            <Input
              labelText="Email"
              placeholderText="Enter your email"
              onChange={handleChange}
              value={formData.email}
              type="email"
              name="email"
              error={errors.email}
            />

            <Input
              labelText="Password"
              placeholderText="Enter your password"
              onChange={handleChange}
              value={formData.password}
              type="password"
              name="password"
              error={errors.password}
            />

            <Button buttonText="REGISTER" type="submit" onClick={() => {}} />

            <div>
              <div className="login">
                If you have an account you may <Link to="/login">Login</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Registration;
