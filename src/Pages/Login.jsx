import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handle_fetch_user } from "../Redux/Users/user.action";
import "../Styles/register.css";
// font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

const loginData = {
  username: "",
  password: "",
};
export const Login = () => {
  const [data, setData] = useState(loginData);
  const { username, password } = data;
  const dispatch = useDispatch();

  const { user } = useSelector((store) => {
    return {
      user: store.UsersReducer.users,
    };
  }, shallowEqual);

  const handleChange = (e) => {
    let val = e.target.value;
    setData({ ...data, [e.target.name]: val });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setData(loginData);
    console.log(data);
  };

  useEffect(() => {
    dispatch(handle_fetch_user);
  }, []);

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
        <form onSubmit={handleLogin}>
          <div className="registerInputs">
            {/* <span>Username</span> */}
            <input
              placeholder="Phone number, username , email"
              type="text"
              onChange={(e) => handleChange(e)}
              name="username"
              value={username}
            />
          </div>
          <div className="registerInputs">
            {/* <span>Mobile No:</span> */}
            <input
              placeholder="password"
              type="password"
              onChange={(e) => handleChange(e)}
              name="password"
              value={password}
            />
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
