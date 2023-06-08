import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/index-components";
import { useAuth } from "../../context/auth-context/auth-context";

function SignUp() {
  const navigate = useNavigate();
  const { dispatchAuth } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  function handleLogin() {
    navigate("/login");
    // setSignedIn((prev) => !prev);
  }
  function handleSignIn() {
    if (
      username !== "" &&
      password !== "" &&
      confirmPassword !== "" &&
      password === confirmPassword
    ) {
      const signInData = {
        user: username,
        password: password,
      };
      dispatchAuth({ type: "SIGN_IN", payload: signInData });
      setSignedIn((prev) => !prev);
    }
  }

  function handleChange(event) {
    if (event.target.placeholder === "Username") {
      setUsername(event.target.value);
    } else if (event.target.placeholder === "Password") {
      setPassword(event.target.value);
    } else if (event.target.placeholder === "Confirm Password") {
      setConfirmPassword(event.target.value);
    }
  }

  return (
    <div className="h-screen flex-1 justify-center items-center flex bg-blue-500">
      {signedIn ? (
        <div className="border w-96 h-96 bg-white shadow-xl rounded">
          <div className="flex justify-center mt-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#3b82f6"
              className="w-14 h-14"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center w-full mt-5">
            <h1 className="font-semibold text-lg">Thanks for Signing Up!</h1>
            <div>
              <Button onClick={() => handleLogin()}>Login</Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="border w-96 h-96 bg-white shadow-xl rounded">
          <h3 className="text-lg mt-10 ml-10 font-bold">Sign Up</h3>
          <div className=" mt-10 h-24 flex flex-col gap-3 justify-center">
            <div className=" flex justify-start items-center gap-2 border pl-3 mx-10 p-1 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-slate-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <input
                type="text"
                placeholder="Username"
                value={username}
                className="outline-none w-full"
                onChange={(event) => handleChange(event)}
              />
            </div>
            <div className="  flex justify-start items-center gap-2 border pl-3 mx-10 p-1 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4  text-slate-400 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>

              <input
                type="password"
                placeholder="Password"
                value={password}
                className="outline-none w-full"
                onChange={(event) => handleChange(event)}
              />
            </div>
            <div className="  flex justify-start items-center gap-2 border pl-3 mx-10 p-1 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4  text-slate-400 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>

              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                className="outline-none w-full"
                onChange={(event) => handleChange(event)}
              />
            </div>
          </div>
          <div className="flex mt-6 mx-10 justify-end">
            <Button onClick={() => handleSignIn()}>Sign up</Button>
          </div>
          <div className="flex justify-center mt-5 gap-2 mx-10">
            <p>Already have a account ? </p>
            <span
              className="text-blue-500 font-medium cursor-pointer"
              onClick={() => handleLogin()}
            >
              Log In
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignUp;
