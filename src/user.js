import "./App.css";

const User = () => {

  const postPeepData = async (url = "", data = {}) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: "Token token=_2a_12_SRcsZ5luRpfBo0CfSn7jv_",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };

  // postPeepData("https://chitter-backend-api-v2.herokuapp.com/peeps", {"peep": {"user_id":465, "body":"and another."}})

  const deletePeepData = async (url = "") => {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: "Token token=_2a_12_SRcsZ5luRpfBo0CfSn7jv_",
        "Content-Type": "application/json",
      },
    });
    return response;
  };

  // deletePeepData("https://chitter-backend-api-v2.herokuapp.com/peeps/503");

  const createLikeData = async (url = "") => {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: "Token token=_2a_12_SRcsZ5luRpfBo0CfSn7jv_",
        "Content-Type": "application/json",
      },
    });
    return response;
  };

  // createLikeData("https://chitter-backend-api-v2.herokuapp.com/peeps/486/likes/465")

  const deleteLikeData = async (url = "") => {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: "Token token=_2a_12_SRcsZ5luRpfBo0CfSn7jv_",
        "Content-Type": "application/json",
      },
    });
    return response;
  };

  // deleteLikeData("https://chitter-backend-api-v2.herokuapp.com/peeps/486/likes/465")

  return (
    <div className="userContainer">
    </div>
  );
    
};

export default User;
