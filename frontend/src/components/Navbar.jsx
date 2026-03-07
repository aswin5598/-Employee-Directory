// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav style={{
//       display:"flex",
//       gap:"20px",
//       padding:"10px",
//       background:"#222",
//       color:"#fff"
//     }}>
//       <Link to="/" style={{color:"#fff"}}>Home</Link>
//       <Link to="/employees" style={{color:"#fff"}}>Employees</Link>
//       <Link to="/add-employee" style={{color:"#fff"}}>Add Employee</Link>
//       <Link to="/about" style={{color:"#fff"}}>About</Link>
//     </nav>
//   );
// };

// export default Navbar;
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">

      {/* Logo / Brand */}
      <Link className="navbar-brand fw-bold" to="/">
        <i className="bi bi-people-fill me-2"></i>
        Employee Directory 
      </Link>

      {/* Toggle button */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Menu */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">

          <li className="nav-item">
            <Link className="nav-link" to="/">
              <i className="bi bi-house-door me-1"></i> Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/employees">
              <i className="bi bi-person-lines-fill me-1"></i> Employees
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/add-employee">
              <i className="bi bi-person-plus me-1"></i> Add Employee
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/about">
              <i className="bi bi-info-circle me-1"></i> About
            </Link>
          </li>

          {user && (
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={handleLogout} style={{textDecoration:'none'}}>
                <i className="bi bi-box-arrow-right me-1"></i> Log Out
              </button>
            </li>
          )}

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;