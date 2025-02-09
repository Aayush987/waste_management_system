import "./Header.css";
import logo from "./logo.png";
export default function header() {
  return (
    <div id="nav">
      <img src={logo} id = "logo-img" alt="logo" height="90" className="link" />
      <h1 id="title">Garbage Guardians</h1>
      <a className="link" href="#AboutUs">
        About us
      </a>
      <a className="link">Recycling Centres</a>
      <a className="link" href="#Complaint">
        Complaint
      </a>
      <a className="link">Discussions</a>
      <a className="link">Contact</a>
      <div id="left-section">
        <a className="btn" id="Login">
          Login | Signup
        </a>
      </div>
    </div>
  );
}
