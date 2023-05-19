import React from "react";
import self from "./self.jpg";
import email from "./emailbtn.png";
import lin from "./linkbtn.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Info() {
  return (
    <div className="info">
      <img className="pic" src={self} alt="profile" />
      <h1 className="name">Jacek Skubisz</h1>
      <h2 className="proffesion"> Junior Frondend Developer</h2>
      <h3 className="github">
        <a href="https://github.com/Qautno166">My GitHub</a>
      </h3>
      <div className="buttons">
        <button className="email" src={email}>
          <FontAwesomeIcon icon={faCoffee} />
          Email
        </button>
        <button className="" src={lin}>
          Linkedin
        </button>
      </div>
    </div>
  );
}
export default Info;
