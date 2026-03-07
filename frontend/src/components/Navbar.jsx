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
import { Link } from "react-router-dom";

const Navbar = () => {
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

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;