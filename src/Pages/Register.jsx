import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handle_register } from "../Redux/Register/register.action";
import { handle_fetch_user } from "../Redux/Users/user.action";
import "../Styles/register.css";
import "font-awesome/css/font-awesome.min.css";
// font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
const state = {
  phone: "",
  name: "",
  username: "",
  password: "",
  privateAccount: false,
};
export const Register = () => {
  const [userData, setUser] = useState(state);
  const dispatch = useDispatch();
  const { phone, name, username, password } = userData;
  // store
  const { isLoading, isError, users } = useSelector((store) => {
    return {
      isLoading: store.RegisterReducer.isLoading,
      isError: store.RegisterReducer.isError,
      users: store.UsersReducer.users,
    };
  }, shallowEqual);

  //
  const handleChange = (e) => {
    let val = e.target.value;
    setUser({ ...userData, [e.target.name]: val });
  };

  //
  let checkUsername = false;
  users.map((ele) => {
    ele.username == username ? (checkUsername = true) : false;
  });
  //   console.log(checkUsername);

  //
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(state);
    dispatch(handle_register(userData));
  };

  useEffect(() => {
    dispatch(handle_fetch_user);
    return () => {
      //   dispatch(handle_register);
      dispatch(handle_fetch_user);
    };
  }, []);

  return (
    <div className="mainRegister">
      <div className="registerBx">
        <div className="about">
          <h1>My Diary</h1>
          <h3>Sign up to see Diary and Quotes from your friends.</h3>
          {/* <h3>or</h3> */}
        </div>

        {/*  */}
        <form onSubmit={handleSubmit}>
          <div className="registerInputs">
            {/* <span>Mobile No:</span> */}
            <input
              value={phone}
              placeholder="Phone number"
              type="text"
              name="phone"
              onChange={handleChange}
            />
          </div>
          <div className="registerInputs">
            {/* <span>Full Name</span> */}
            <input
              value={name}
              placeholder="Full Name"
              type="text"
              name="name"
              onChange={handleChange}
            />
          </div>
          <div className="registerInputs">
            {/* <span>Username</span> */}
            <input
              value={username}
              placeholder="Username"
              type="text"
              name="username"
              onChange={handleChange}
            />
            {checkUsername ? <i className="fa fa-close"></i> : ""}
          </div>
          <div className="registerInputs">
            {/* <span>Mobile No:</span> */}
            <input
              value={password}
              placeholder="password"
              type="password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div className="btnBx">
            <button>Sign Up</button>
          </div>
        </form>
        {isLoading ? <p>Loading...</p> : ""}
        {/*  */}
      </div>
      <div className="alredyhave">
        <h4>
          Have an account? <Link to="/login">Log in</Link>
        </h4>
      </div>
    </div>
  );
};
