import React, { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const mainNav = document.getElementById("main-nav");

    const handleClick = (event) => {
      if (!event.target.matches(".nav-menu, .nav-menu *")) return;
      mainNav.classList.toggle("nav-open");
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="App">
      <nav id="main-nav" className="nav">
        <a href="/" className="logo">
          <img
            width="50"
            src="https://icon-library.com/images/circle-icon-png/circle-icon-png-8.jpg"
            alt="logo"
          />
        </a>
        <div className="nav-menu">
          <span className="nav-menu-item">Menu</span>
          <span className="nav-menu-cross"></span>
        </div>
        <div className="nav-menu-side">
          <nav className="nav-menu-side-nav">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Work</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Something Else</a>
              </li>
              <li>
                <a href="/">Contact Me</a>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </div>
  );
}

export default App;
