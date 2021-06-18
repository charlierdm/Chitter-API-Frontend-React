import App from "./App";

export const CreatePeep = ({session}) => {

  const postPeepData = async (url = "", data = {}) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `"${session}"`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };

  return (
    <div>


    </div>
  )
}
