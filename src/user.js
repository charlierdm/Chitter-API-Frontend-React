import "./App.css";

const User = () => {

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

  return (
    <div className="userContainer">
    </div>
  );
    
};

export default User;
