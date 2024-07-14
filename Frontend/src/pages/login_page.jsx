/* eslint-disable no-unused-vars */
/* eslint-disable no-async-promise-executor */
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import LockIcon from "../assets/Images/LockIcon.svg";
import userIcon from "../assets/Images/UsernIcon.svg";
import Field from "../components/InputFields";
import validateToken from "../components/ValidToken/ValidateToken";
import CustomButton from "../components/form_button";
import NavBar from "../components/navbar";
import LoginIllustrator from "../assets/images/LoginIllustrator.png";
import "react-toastify/dist/ReactToastify.css";
import "./login_page.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [usernameValid, setUsernameValid] = useState(true);
  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(true);
  const [errorMsgClass, setErrorMsgClass] = useState("");

  const isUsernameValid = (username) => {
    return /^[a-z][a-z0-9_]*$/.test(username);
  };

  const isPasswordValid = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    return passwordRegex.test(password);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordValid(isPasswordValid(newPassword));
  };

  const handleLogin = () => {
    navigate("/Userside");
    toast.promise(handleHttpLogin, {
      pending: "Processing...",
      success: "Login Successful",
      error: "Login Failed",
    });
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleHttpLogin = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const headers = {
          "Content-Type": "application/json",
        };

        const response = await axios.post(
          "http://localhost:3000/auth/login",
          {
            username,
            password,
          },
          {
            headers: headers,
          }
        );
        if (response.status >= 200 && response.status < 300) {
          console.log(response.data);
          const authToken = response.data.token;
          const role = response.data.role;
          localStorage.setItem("Authorization", authToken);
          localStorage.setItem("UserRole", role);
          if (await validateToken()) {
            role == "user" ? navigate("/Userside") : navigate("/Adminside");
          } else {
            console.log("/login");
          }
          resolve(response.data);
        } else {
          reject("Login Failed");
        }

        console.log(response.status);
        console.log("HTTP POST Request Response:", response.data);
      } catch (error) {
        reject(error);
      }
    });
  };

  return (
    <div className="LoginMainDiv">
      <div className="MainContainer">
        <div className="Texts">
          <span className="WelcomeText"> Welcome </span>
          <span className="WeAreGladText">
            We are glad to see you back with us!
          </span>
        </div>
        <div className="Loginfields">
          <Field
            iconpath={userIcon}
            placeholder={"Username"}
            type={"Text"}
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setUsernameValid(isUsernameValid(e.target.value));
            }}
            isValid={usernameValid}
            validationMessage={
              "Should start with lowercase only. Should not contain any space, Uppercase or special character."
            }
          />

          <Field
            iconpath={LockIcon}
            placeholder={"Password"}
            type={"Password"}
            value={password}
            onChange={handlePasswordChange}
            isValid={passwordValid}
            validationMessage={
              "Password should be at least 8 characters long. Password should contain at least one of each. 1 Uppercase, Lowercase, Special characters, and a digit. "
            }
          />

          <CustomButton
            text={"Login"}
            bgColor={"secondary"}
            onclick={handleLogin}
          />
          <div
            className={`ErrorMsgDiv ${errorMsgClass}`}
            style={
              errorMsgClass === "displayErrorMsg"
                ? { display: "block", color: "#EF0606" }
                : { display: "none" }
            }
          >
            <span>Username or Password invalid! Please check again.</span>
          </div>
        </div>
        <div className="SignupRedirectDiv">
          <span className="ClickHereLinkText">
            <a onClick={handleSignup}>New Here? Click here to sign up.</a>
          </span>
        </div>
      </div>
      <img className="LoginIllustrator" src={LoginIllustrator} alt="" />
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
