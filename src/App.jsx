import { useState } from "react";
import "./App.css";
import First from "./pages/First";
import Without from "./pages/Without";
import Secont from "./pages/Secont";

import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

function App() {
  const [isNavClosed, setIsNavClosed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleNav = () => {
    setIsNavClosed(!isNavClosed);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

    if (newDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <div className="container">
      <BrowserRouter>
        <nav className={isNavClosed ? "close" : ""}>
          <div className="NavHead">
            <div className="Nav_div">
              <img src="Logo.svg" alt="Logo?" />
              <p>Dashboard</p>
              <img
                src="ham.svg"
                alt="Menu"
                className="toggle2"
                onClick={toggleNav}
                style={{ cursor: "pointer" }}
              />
            </div>
            <ul>
              <li>
                <NavLink to="/">
                  <img src="first.svg" alt="No img?" />
                  <p>Overview</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/Secont">
                  <img src="second.svg" alt="No img?" />
                  <p>Tickets</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/without">
                  <img src="ideas.svg" alt="No img?" />
                  <p>Ideas</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/without">
                  <img src="contacts.svg" alt="No img?" />
                  <p>Contacts</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/without">
                  <img src="agents.svg" alt="No img?" />
                  <p>Agents</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/without">
                  <img src="articles.svg" alt="No img?" />
                  <p>Articles</p>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="Navbody">
            <div
              className="Nav_div"
              onClick={toggleDarkMode}
              style={{ cursor: "pointer" }}
            >
              <img src="dark.svg" alt="No img?" />
              <p>Change mode</p>
            </div>
            <div className="Nav_div">
              <img src="log.svg" alt="No img?" />
              <p>Logout</p>
            </div>
          </div>
        </nav>

        <header className={isNavClosed ? "nav-closed" : ""}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <img
              src="ham.svg"
              alt="Menu"
              onClick={toggleNav}
              style={{ cursor: "pointer" }}
            />
            <div className="header_Flex">
              <h2>Jones Ferdinand</h2>
              <img src="photo.svg" alt="Profile" />
            </div>
          </div>
          <Routes>
            <Route path="/" element={<First />} />
            <Route path="/first" />
            <Route path="/without" element={<Without />} />
            <Route path="/secont" element={<Secont />} />
          </Routes>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
