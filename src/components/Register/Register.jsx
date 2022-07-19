import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name, value);
    console.log(user);

    setUser(() => {
      return { ...user, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const { name, email, password } = user;

    if (name === "") {
      alert("Name is Required");
    } else if (email === "") {
      alert("Email is Required");
    } else if (password === "") {
      alert("Password is Required");
    } else {
      alert("Register Success");
      navigate("/login");
    }
  };

  return (
    <div className="register">
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            name="name"
            value={user.name}
            onChange={handleInput}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={user.email}
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={user.password}
            onChange={handleInput}
          />
        </div>

        <button type="submit" className="btn btn-primary registerbtn">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
