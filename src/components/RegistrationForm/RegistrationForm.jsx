import { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    email: "",
  });

  const [formErrs, setFormErrs] = useState({
    userName: "",
    password: "",
    email: "",
  });

  function formValidation() {
    let formErr = {};
    const { userName, password, email } = formData;
    if (!userName) {
      formErr.userName = "username is required";
    }
    if (!password) {
      formErr.password = "password is required";
    }
    if (password.length < 8) {
      formErr.password = "password length should be greater than 8";
    }
    if (!/[A-Z]/g.test(password)) {
      formErr.password = "password should have atleast one uppercase";
    }
    if (!/[a-z]/g.test(password)) {
      formErr.password = "password should have atleast one lowercase";
    }
    if (!email) {
      formErr.email = "email is required";
    }

    return formErr;
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    // handle validation before submission and errs state
    let formErr = formValidation();

    if (Object.keys(formErr).length > 0) {
      setFormErrs(formErr);
      return;
    } else {
      // form validation passing
      // post call with the form fields
      alert("Form submitted successfully");
      // reset form err and data state
      setFormErrs({
        userName: "",
        password: "",
        email: "",
      });
      setFormData({
        userName: "",
        password: "",
        email: "",
      });
    }
  }

  function handleOnFormInputChange(e) {
    const fieldName = e.target.name;
    const fieldVal = e.target.value;
    setFormData((prevFormData) => {
      if (fieldName in prevFormData) {
        return { ...prevFormData, [fieldName]: fieldVal };
      }
    });
    // let formErr = formValidation();
    // if (Object.keys(formErr).length > 0) {
    //   setFormErrs(formErr);
    // }
  }

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "200px",
          gap: "1rem",
        }}
        onSubmit={handleFormSubmit}
      >
        <input
          type="text"
          name="userName"
          placeholder="enter username"
          required
          onChange={handleOnFormInputChange}
        />
        {formErrs.userName && (
          <p style={{ color: "red" }}>{formErrs.userName}</p>
        )}
        <input
          type="email"
          name="email"
          placeholder="enter email"
          required
          onChange={handleOnFormInputChange}
        />
        {/* should atleast have 8 characters */}
        {formErrs.email && <p style={{ color: "red" }}>{formErrs.email}</p>}
        <input
          type="password"
          name="password"
          placeholder="enter password"
          required
          min={8}
          onChange={handleOnFormInputChange}
        />
        {formErrs.password && (
          <p style={{ color: "red" }}>{formErrs.password}</p>
        )}
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
