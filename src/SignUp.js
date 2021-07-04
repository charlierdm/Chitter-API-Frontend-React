import { useState } from "react";
import "./App.css";

const SignUp = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

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
        {!props.session && (
          <div>
            <button
              onClick={() => {
                sendUserRequest(`${props.chitter}/users`, {
                  user: {
                    handle: `${username}`,
                    password: `${password}`,
                  },
                })
                  .then(() =>
                    sendUserRequest(`${props.chitter}/sessions`, {
                      session: {
                        handle: `${username}`,
                        password: `${password}`,
                      },
                    })
                  )
                  .then((data) =>
                    data.errors
                      ? alert("That username exists, choose another.")
                      : props.setSession(data)
                  );
              }}
            >
              Sign Up
            </button>

            <button
              onClick={() => {
                sendUserRequest(`${props.chitter}/sessions`, {
                  session: {
                    handle: `${username}`,
                    password: `${password}`,
                  },
                }).then((data) =>
                  data.errors
                    ? alert("Incorrect password, try again.")
                    : props.setSession(data)
                );
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
