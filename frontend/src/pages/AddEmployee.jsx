
import EmployeeForm from "../components/EmployeeForm";
import "./AddEmployee.css";

const AddEmployee = () => {
  return (
    <div className="container py-5">

      {/* Page Title */}
      <h2 className="add-title text-center mb-4">
        Add New Employee
      </h2>

      {/* Form Card */}
      <div className="form-wrapper">

        <div className="card form-card shadow-lg">
          <div className="card-body">

            <EmployeeForm/>

          </div>
        </div>

      </div>

    </div>
  );
};

export default AddEmployee;