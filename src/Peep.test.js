import { screen, render } from "@testing-library/react";
import { Peep } from "./Peep";

const chitter = "https://chitter-backend-api-v2.herokuapp.com";

const session = jest.fn()

const peep = {
  id: 780,
  body: "Hello, this is a test message",
  created_at: "2021-09-21T17:14:56.783Z",
  updated_at: "2021-09-21T17:14:56.783Z",
  user: {
    id: 682,
    handle: "user123",
  },
  likes: [],
};

it("renders all the correct peep information", () => {
  render(<Peep
      id={peep.id}
      userHandle={peep.user.handle}
      createdAt={peep.created_at}
      peepBody={peep.body}
      likes={peep.likes}
      session={session}
      peep={peep}
      chitter={chitter}
    />)
   expect(screen.getByText("Hello, this is a test message")).toBeInTheDocument();
   expect(screen.getByText("user123")).toBeInTheDocument();
   expect(screen.getByText("September 21st, 6:14 PM")).toBeInTheDocument();
   expect(screen.getByText("0 likes")).toBeInTheDocument(); 
});
