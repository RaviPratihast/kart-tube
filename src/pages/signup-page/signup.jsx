import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";

function SignUp() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/login");
  }
  return (
    <div className="h-screen flex-1 justify-center items-center flex bg-blue-500">
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
              type="email"
              placeholder="Email"
              className="outline-none w-full"
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
              className="outline-none w-full"
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
              className="outline-none w-full"
            />
          </div>
        </div>
        <div className="flex mt-6 mx-10 justify-end">
          <Button>Sign up</Button>
        </div>
        <div className="flex justify-center mt-5 gap-2 mx-10">
          <p>Already have a account ? </p>
          <span className="text-blue-500 font-medium cursor-pointer" onClick={handleClick}>Log In</span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
