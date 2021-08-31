import { useState } from "react";
import "./App.css";

export const SignUp = ({ session, setSession, chitter }) => {
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

  const handleSignUp = () => {
    sendUserRequest(`${chitter}/users`, {
      user: {
        handle: `${username}`,
        password: `${password}`,
      },
    })
      .then(() =>
        sendUserRequest(`${chitter}/sessions`, {
          session: {
            handle: `${username}`,
            password: `${password}`,
          },
        })
      )
      .then((data) => setSession(data));
  };

  const handleLogIn = () => {
    sendUserRequest(`${chitter}/sessions`, {
      session: {
        handle: `${username}`,
        password: `${password}`,
      },
    }).then((data) =>
      data.errors ? alert("Incorrect password, try again.") : setSession(data)
    );
  };

  return (
    <>
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
      {!session && (
        <div>
          <button onClick={() => handleSignUp()}>Sign Up</button>
          <button onClick={() => handleLogIn()}>Log in</button>
        </div>
      )}
    </>
  );
};
