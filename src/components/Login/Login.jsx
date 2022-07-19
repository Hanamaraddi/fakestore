import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
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

    const { email, password } = user;

    if (email === "") {
      alert("Email is Required");
    } else if (password === "") {
      alert("Password is Required");
    } else {
      alert("Login Success");
      navigate("/products");
    }
  };

  return (
    <div className="register">
      <form onSubmit={submitHandler}>
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
          Login
        </button>
      </form>
    </div>
  );
};

export default Register;
