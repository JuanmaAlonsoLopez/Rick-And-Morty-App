import "./form.module.css";
import React from "react";
import validateInputs from "./validation.js";

export default function Form(props) {
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUserData({ ...userData, [name]: value });
    setErrors(validateInputs(userData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.logIn(userData);
  };

  return (
      <form onSubmit={handleSubmit}>
      <table onSubmit={handleSubmit}>
        <tr>
          <td htmlFor="">Username:</td>
          <td><input
          className="form-format" 
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
        />
        <p>{errors.username}</p></td>
        </tr>
        <tr>
          <td htmlFor="">Password:</td>
          <td> <input
          className="form-format" 
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        /></td>
        <p>{errors.password}</p>
        </tr>
      </table>
        <button>LOGIN</button>
      </form>
  );
}
