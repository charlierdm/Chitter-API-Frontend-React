import { useEffect, useState } from "react";
import "./App.css";

const SignUp = () => {

  const [id, setId] = useState();
  const [handle, setHandle] = useState();

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

  // createUser("https://chitter-backend-api-v2.herokuapp.com/users", {"user": {"handle":"cccdm", "password":"654321"}})
  // .then(data => {
  //   console.log(data);
  // });

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

  //  createSession("https://chitter-backend-api-v2.herokuapp.com/sessions", {"session": {"handle":"cccdm", "password":"654321"}})
  // .then(data => {
  //   console.log(data);
  // });

  return (
    <div className="sign-up">

    </div>
  )

}

export default SignUp;