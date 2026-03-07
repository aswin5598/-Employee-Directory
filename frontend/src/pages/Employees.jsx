import { useContext, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import EmployeeCard from "../components/EmployeeCard";
import "./Employees.css";

const Employees = () => {

  const { employees, fetchEmployees } = useContext(EmployeeContext);
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    fetchEmployees(search);
  };

  return (
    <div className="container py-4">

      {/* Title */}
      <h2 className="employee-title text-center mb-4">
        Employee Directory
      </h2>

      {/* Search Bar */}
      <div className="search-box mb-5">

        <input
          type="text"
          className="form-control search-input"
          placeholder="Search by name or department..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />

        <button
          className="btn btn-primary search-btn"
          onClick={handleSearch}
        >
          🔍 Search
        </button>

      </div>

      {/* Employee Cards */}
      <div className="row">

        {employees.length === 0 ? (
          <p className="text-center text-muted">No employees found</p>
        ) : (
          employees.map(emp => (
            <div className="col-md-4 col-lg-3 mb-4" key={emp._id}>
              <div className="employee-card">
                <EmployeeCard emp={emp}/>
              </div>
            </div>
          ))
        )}

      </div>

    </div>
  );
};

export default Employees;
