import React from "react";
import self from "./self.jpg";
import email from "./emailbtn.png";
import link from "./link.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function myfunction() {}
function Info() {
  return (
    <div className="info">
      <img className="pic" src={self} alt="profile" />
      <h1 className="name">Jacek Skubisz</h1>
      <h2 className="proffesion"> Junior Frondend Developer</h2>
      <h3 className="github">
        <a className="website" href="https://github.com/Qautno166">
          <span className="mygit">skubisz.webiste</span>
        </a>
      </h3>
      <div className="buttons">
        <a href="mailto:jacek.skubisz@gmail.com" src={email}>
          <button className="email">
            <FontAwesomeIcon icon={faEnvelope} /> Email
          </button>
        </a>
        <button class="lin">
          <img
            className="linkpic"
            src={link}
            alt="my"
            onClick={myfunction}
          ></img>
          <a href="https://www.linkedin.com/in/jacek-skubisz">LinkedIn</a>
        </button>
      </div>
    </div>
  );
}
export default Info;
