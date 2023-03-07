// import { useState } from "react";
// import axios from "axios";

const Login: React.FC = () => {
  interface LoginCredentials {
    email: string;
    password: string;
  }

  async function login(credentials: LoginCredentials): Promise<void> {
    const response = await fetch(" http://192.168.9.33:2000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error("Failed to login");
    }

    const data = await response.json();
    console.log(data);

    return data;
  }

  return (
    <>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 bg-slate-500">
        <h1 className="text-2xl font-bold text-center text-gray-200">
          Welcome back to your account!
        </h1>
        <form
          noValidate
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-400">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-blue-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-400">
              Password
            </label>
            <input
              type="password"

              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-blue-400"
            />
            <div className="flex justify-end text-xs dark:text-gray-400">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button className="bg-gray-50 block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-blue-400">
            Sign in
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-gray-400">
          Don't have an account?
          <a href="/dashboard" className="underline dark:text-gray-100">
            Sign up
          </a>
        </p>
      </div>
    </>
  );
};

export default Login;
