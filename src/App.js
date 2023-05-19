import React from "react";
import Info from "./components/Info.js";
import About from "./components/About.js";
import Intrests from "./components/Interests.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div className="container">
      <Info />
      <About />
      <Intrests />
      <Footer />
    </div>
  );
}
export default App;
// ReactDOM.render((<App />).document.getElementById("root"));
