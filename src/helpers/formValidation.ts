interface FormData {
  name?: string;
  email?: string;
  password?: string;
  title?: string;
  description?: string;
  duration?: string;
}

export const validateRegistration = (formData: FormData) => {
  let tempErrors = { name: "", email: "", password: "" };
  let isValid = true;

  if (!formData.name) {
    tempErrors.name = "Name is required";
    isValid = false;
  }
  if (!formData.email) {
    tempErrors.email = "Email is required";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    tempErrors.email = "Email address is invalid";
    isValid = false;
  }

  if (!formData.password) {
    tempErrors.password = "Password is required";
    isValid = false;
  } else if (formData.password.length < 6) {
    tempErrors.password = "Password must be at least 6 characters";
    isValid = false;
  }

  return { tempErrors, isValid };
};

export const validateLogin = (formData: FormData) => {
  let tempErrors = { email: "", password: "" };
  let isValid = true;

  if (!formData.email) {
    tempErrors.email = "Email is required";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    tempErrors.email = "Email address is invalid";
    isValid = false;
  }

  if (!formData.password) {
    tempErrors.password = "Password is required";
    isValid = false;
  } else if (formData.password.length < 6) {
    tempErrors.password = "Password must be at least 6 characters";
    isValid = false;
  }

  return { isValid, tempErrors };
};

export const validateCreateCourseForm = (formData: FormData) => {
  let tempErrors = { title: "", description: "", duration: "" };
  let isValid = true;

  if (!formData.title || formData.title.length < 2) {
    tempErrors.title = "Title must be at least 2 characters.";
    isValid = false;
  }
  if (!formData.description || formData.description.length < 2) {
    tempErrors.description = "Description must be at least 2 characters.";
    isValid = false;
  }
  if (isNaN(Number(formData.duration)) || Number(formData.duration) <= 0) {
    tempErrors.duration = "Duration must not be empty!";
    isValid = false;
  }

  return { errors: tempErrors, isValid };
};
