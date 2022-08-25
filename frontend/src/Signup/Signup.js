import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <form>
        <h1>SIGNUP FORM</h1>
      <div className="form-group mt-10">
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Enter username"
        />
      </div>
      <div className="form-group mt-10">
        <input
          type="email"
          className="form-control"
          id="emails"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group mt-10">
        <input
          type="password"
          className="form-control sr-only"
          id="passwords"
          placeholder="Password"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Signup;
