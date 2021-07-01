import { useState } from "react";
import "./App.css";

const SignUp = ({ session, setSession }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const chitter = "https://chitter-backend-api-v2.herokuapp.com"

  const sendUserRequest = async (url = "", data = {}) => {
    const userResponse = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return userResponse.json();
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
                sendUserRequest(
                  `${chitter}/users`,
                  {
                    user: {
                      handle: `${username}`,
                      password: `${password}`,
                    },
                  }
                )
                  .then(() =>
                    sendUserRequest(
                      `${chitter}/sessions`,
                      {
                        session: {
                          handle: `${username}`,
                          password: `${password}`,
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
                sendUserRequest(
                  `${chitter}/sessions`,
                  {
                    session: {
                      handle: `${username}`,
                      password: `${password}`,
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
