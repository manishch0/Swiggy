import React from "react";
import { useState } from "react";

export const Section = ({ title, description, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <h1>{title}</h1>
      {isVisible ? (
        <button onClick={() => setIsVisible(false)}>Hide</button>
      ) : (
        <button onClick={() => setIsVisible(true)}>Show</button>
      )}

      {isVisible && <p>{description}</p>}
    </div>
  );
};

const InstaMart = () => {
  const [sectionVisible, setSectionVisible] = useState("about");
  return (
    <div>
      <h1>InstaMart</h1>
      <Section
        title={"Team Insta Mart"}
        description={
          " In computer network communications, the HTTP 404, 404 not found, 404, 404 error, page not found or file not found error message is a hypertext transfer protocol (HTTP) standard response code, to indicate that the browser was able to communicate with a given server, but the server could not find what was requested. The error may also be used when a server does not wish to disclose whether it has the requested information website hosting server will typically generate a  web page when a user attempts to follow a broken or dead link hence the 404 error is one of the most recognizable errors encountered on the World Wide Web"
        }
        isVisible={sectionVisible === "about"}
        setIsVisible={() => setSectionVisible("about")}
      />
      <Section
        title={"Career insta mart"}
        description={
          " In computer network communications, the HTTP 404, 404 not found, 404, 404 error, page not found or file not found error message is a hypertext transfer protocol (HTTP) standard response code, to indicate that the browser was able to communicate with a given server, but the server could not find what was requested. The error may also be used when a server does not wish to disclose whether it has the requested information website hosting server will typically generate a  web page when a user attempts to follow a broken or dead link hence the 404 error is one of the most recognizable errors encountered on the World Wide Web"
        }
        isVisible={sectionVisible === "career"}
        setIsVisible={() => setSectionVisible("career")}
      />
    </div>
  );
};

export default InstaMart;
