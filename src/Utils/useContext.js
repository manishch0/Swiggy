import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Rohit",
    email: "Rohit@gmail.com",
  },
});

export default UserContext;
