import "./App.css";

const User = () => {
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

  const postPeepData = async (url = "", data = {}) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };

  const deletePeepData = async (url = "") => {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: "",
        "Content-Type": "application/json",
      },
    });
    return response;
  };

  const createLikeData = async (url = "") => {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: "",
        "Content-Type": "application/json",
      },
    });
    return response;
  };

  const deleteLikeData = async (url = "") => {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: "",
        "Content-Type": "application/json",
      },
    });
    return response;
  };

  return <div></div>;
};

export default User;