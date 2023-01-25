import React from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import "./LoginPage.scss";

import loginImage from "../../assets/loginImage.png";
import IconsList from "../../components/IconsList";

function LoginPage() {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function loginSubmit(data) {
    navigate("/home");
  }

  return (
    <div className="login-container">
      <div className="signIn-container">
        <h1>Sign In</h1>
        <div className="d-flex my-4">
          <h5>New user? </h5>
          <Link className="link-styles" to="/login">
            {" "}
            Create an account
          </Link>
        </div>
        <form>
          <div>
            <input
              className="form-control input-styles"
              type="text"
              placeholder="Username or email"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <div className="mt-2 text-danger">
                Please enter your Email / Username
              </div>
            )}
          </div>
          <div className="my-3">
            <input
              className="form-control input-styles"
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <div className="mt-2 text-danger">Please enter your Password</div>
            )}
          </div>
          <div className="checkbox">
            <input type="checkbox" className="checkBox-styles" />{" "}
            <label htmlFor=""> Keep me signed in </label>
          </div>
          <button
            className="btn btn-dark my-3 button-styles"
            onClick={handleSubmit(loginSubmit)}
          >
            Sign In
          </button>
        </form>
        <div className="hyphen-styles my-4">Or sign in with</div>
        <IconsList />
      </div>
      <div className="image-container">
        <img className="login-image" src={loginImage} alt="" />
      </div>
    </div>
  );
}

export default LoginPage;
