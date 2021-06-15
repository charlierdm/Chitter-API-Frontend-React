import { useEffect, useState } from "react";
import "./App.css";

const SignUp = () => {
  const [userName, setUsername] = useState();
  const [passWord, setPassword] = useState();
  const [userData, setUserData] = useState();
  const [sessionData, setSessionData] = useState();

  useEffect(() => {
    createSession("https://chitter-backend-api-v2.herokuapp.com/sessions", {
      session: { handle: `"${userName}"`, password: `"${passWord}"` },
    }).then((data) => setSessionData(data));
  }, [userData]);

  const createUser = async (url = "", data = {}) => {
    const userResponse = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return userResponse.json();
  };

  const createSession = async (url = "", data = {}) => {
    const sessionResponse = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return sessionResponse.json();
  };

  return (
    <div className="sign-up">
      <input
        type="username"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button
        onClick={() => {
          createUser("https://chitter-backend-api-v2.herokuapp.com/users", {
            user: { handle: `"${userName}"`, password: `"${passWord}"` },
          }).then((data) => setUserData(data));
        }}
      >
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
