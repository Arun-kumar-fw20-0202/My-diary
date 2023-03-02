import React from "react";
import { Link } from "react-router-dom";
import "../Styles/register.css";
// font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
export const Login = () => {
  return (
    <div className="mainRegister">
      <div className="registerBx">
        {/* <div className="registerHead">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div> */}

        <div className="about">
          <h1>My Diary</h1>
          {/* <h3>or</h3> */}
        </div>

        {/*  */}
        <form>
          <div className="registerInputs">
            {/* <span>Username</span> */}
            <input placeholder="Phone number, username , email" type="text" />
          </div>
          <div className="registerInputs">
            {/* <span>Mobile No:</span> */}
            <input placeholder="password" type="password" />
          </div>
          <div className="btnBx">
            <button>Sign Up</button>
          </div>
        </form>
        {/*  */}
      </div>
      <div className="alredyhave">
        <h4>
          Don't have an account? <Link to="/register">Sign Up</Link>
        </h4>
      </div>
    </div>
  );
};
