import React from "react";
import { usersInfo } from "./Data";

export default function LoginSignUp(props: any) {
  const [error, setError] = React.useState(false);
  const handleLogin = (e: any) => {
    e.preventDefault();
    let flag = 1;
    for (let i = 0; i < usersInfo.length; i++) {
      if (
        usersInfo[i].label === props.loginData.label &&
        usersInfo[i].password === props.loginData.password
      ) {
        flag = 0;
        props.setLogged(true);
        props.setLoginData(usersInfo[i]);
        return;
      }
    }
    if (flag) setError(true);
  };
  return (
    <div className="left-50 flex justify-center items-center w-[100%] h-[100%]  ">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4  w-[400px] mb-[200px] border-t-"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            required
            onChange={(e) => {
              props.setLoginData({
                ...props.loginData,
                label: e.target.value,
                value: e.target.value,
              });
            }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Satyam Jha"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            required
            onChange={(e) => {
              props.setLoginData({
                ...props.loginData,
                password: e.target.value,
              });
            }}
            className={
              "shadow appearance-none border   rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            }
            style={{ border: error ? "1px solid red" : "1px solid #e6e6e6" }}
            id="password"
            type="password"
            placeholder="satyam3221"
          />
          {error && (
            <p className="text-red-500 font-bold text-xs italic">
              invalid credentials.
            </p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            LogIn
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
}
