import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../App";
import "../../App.css";

export default function LandingPage() {
  const { value1 } = useContext(LoginContext);
  const [LoggedIn, setloggedIn] = value1;
  useEffect(() => {
    setloggedIn(false);
  }, [LoggedIn]);
  return (
    <header style={HeaderStyle}>
      {/* <h1>Hi </h1> */}
      <h1 className="main-title text-center">login / register page</h1>
      <div className="buttons text-center">
        <Link to="/register">
          <button className="primary-button" id="reg_btn">
            <span>register </span>
          </button>
        </Link>
        <Link to="/login">
          <button className="primary-button">login</button>
        </Link>
      </div>
    </header>
  );
}

const HeaderStyle = {
  width: "100%",
  height: "100vh",
  background: `url("https://imageio.forbes.com/specials-images/imageserve/61d52d4e3a76ed81ac034ea8/The-10-Tech-Trends-That-Will-Transform-Our-World/960x0.jpg?format=jpg&width=960")`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
