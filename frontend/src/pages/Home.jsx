import "./Home.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="home-container">
      <div className="overlay">
        <div className="home-content">
          <h2 className="home-title">Welcome to Employee Directory</h2>
          <p className="home-text">
            Manage employees, add new staff, and explore your company directory easily.
          </p>
          {user && (
            <div className="mt-3">
              <button className="btn btn-outline-danger" onClick={handleLogout}>
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;