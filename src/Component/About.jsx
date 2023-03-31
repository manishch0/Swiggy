import { useContext } from "react";
import userContext from "../Utils/useContext";

function About() {
  const { user } = useContext(userContext);
  return (
    <div>
      <h1>About Page</h1>
      <p>{user.name}</p>
    </div>
  );
}

export default About;
