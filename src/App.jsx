import { useState } from "react";
import "./App.css";
import First from "./pages/First";
function App() {
  const [isNavClosed, setIsNavClosed] = useState(false);

  const toggleNav = () => {
    setIsNavClosed(!isNavClosed);
  };

  return (
    <>
      <nav className={isNavClosed ? "close" : ""}>
        <div className="NavHead">
          <div className="Nav_div">
            <img src="Logo.svg" alt="Logo?" />
            <p>Dashboard</p>
          </div>
          <ul>
            <li>
              <a href="#">
                <img src="first.svg" alt="No img?" />
                <p>Overview</p>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="second.svg" alt="No img?" />
                <p>Tickets</p>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="ideas.svg" alt="No img?" />
                <p>Ideas</p>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="contacts.svg" alt="No img?" />
                <p>Contacts</p>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="agents.svg" alt="No img?" />
                <p>Agents</p>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="articles.svg" alt="No img?" />
                <p>Articles</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="Navbody">
          <div className="Nav_div">
            <img src="dark.svg" alt="No img?" />
            <p>Change mode</p>
          </div>
          <div className="Nav_div">
            <img src="log.svg" alt="No img?" />
            <p>Logout</p>
          </div>
        </div>
      </nav>

      <header>
        <div style={{ display: "flex", justifyContent: "space-between"  }}>
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
        <First />
      </header>
    </>
  );
}

export default App;
