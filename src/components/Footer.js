import React from "react";
import link from "./link.png";
import fb from "./fb.png";
import git from "./git.png";
import inst from "./ins.png";
function Footer() {
  return (
    <footer>
      <a href="https://instagram.com/skujack?igshid=MzRlODBiNWFlZA==">
        <img className="inst" src={inst} alt="Instagram" />
      </a>
      <a href="https://www.facebook.com/bolek.lolek.94617">
        <img className="fb" src={fb} alt="Facebook" />
      </a>
      <a href="https://github.com/Qautno166">
        <img className="git" src={git} alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/jacek-skubisz">
        <img className="link" src={link} alt="LinkedIn" />
      </a>
    </footer>
  );
}

export default Footer;
