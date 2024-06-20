import { LoginProps } from "./Login.types";
import { FC, useState, ChangeEvent, FormEvent } from "react";
import "./Login.css";
import Button from "src/common/Button/Button";
import Input from "src/common/Input/Input";
import { validateLogin } from "src/helpers/formValidation";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";

const Login: FC<LoginProps> = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
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
    const { isValid, tempErrors } = validateLogin(formData);
    setErrors(tempErrors);

    if (isValid) {
      try {
        const response = await fetch("http://localhost:4000/login", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Login failed");
        }

        const result = await response.json();
        localStorage.setItem("token", result.result);
        navigate("/courses");
      } catch (error) {
        console.error("Login error:", error);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="login-page">
        <h2>Login</h2>
        <div className="login-container">
          <form className="login-form" onSubmit={handleSubmit}>
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

            <Button buttonText="LOGIN" type="submit" onClick={() => {}} />

            <div>
              <div className="login">
                If you have don't have an account you may{" "}
                <Link to="/registration">Register</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
