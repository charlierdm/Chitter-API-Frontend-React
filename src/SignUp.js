import { useState } from "react";
import "./App.css";

const SignUp = ({ session, setSession }) => {
  const [userName, setUsername] = useState();
  const [passWord, setPassword] = useState();

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
    setSession(true);
    return sessionResponse.json();
  };

  return (
    <div>
      <div>
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
        <br />
        {session ? (
          ""
        ) : (
          <div>
            <button
              onClick={() => {
                createUser(
                  "https://chitter-backend-api-v2.herokuapp.com/users",
                  {
                    user: {
                      handle: `"${userName}"`,
                      password: `"${passWord}"`,
                    },
                  }
                )
                  .then((data) =>
                    createSession(
                      "https://chitter-backend-api-v2.herokuapp.com/sessions",
                      {
                        session: {
                          handle: `"${userName}"`,
                          password: `"${passWord}"`,
                        },
                      }
                    )
                  )
                  .then((data) => setSession(data));
              }}
            >
              Sign Up
            </button>

            <button
              onClick={() => {
                createSession(
                  "https://chitter-backend-api-v2.herokuapp.com/sessions",
                  {
                    session: {
                      handle: `"${userName}"`,
                      password: `"${passWord}"`,
                    },
                  }
                ).then((data) => setSession(data));
              }}
            >
              Log in
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;
