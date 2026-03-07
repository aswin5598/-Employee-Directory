import { useState, useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import Button from '@mui/material/Button';

const EmployeeForm = () => {

  const { addEmployee } = useContext(EmployeeContext);

  const [form, setForm] = useState({
    name:"",
    email:"",
    phone:"",
    department:"",
    role:"",
    joiningDate:""
  });

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    addEmployee(form);
    setForm({ name:"", email:"", phone:"", department:"", role:"", joiningDate:"" });
  };

  return(
    <div id="employee-form">
      <form onSubmit={handleSubmit} className="p-3 bg-light rounded">
      <div className="mb-2">
        <input className="form-control" name="name" placeholder="Name" value={form.name} onChange={handleChange}/>
      </div>
      <div className="mb-2">
        <input className="form-control" name="email" placeholder="Email" value={form.email} onChange={handleChange}/>
      </div>
      <div className="mb-2">
        <input className="form-control" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange}/>
      </div>
      <div className="mb-2">
        <input className="form-control" name="department" placeholder="Department" value={form.department} onChange={handleChange}/>
      </div>
      <div className="mb-2">
        <input className="form-control" name="role" placeholder="Role" value={form.role} onChange={handleChange}/>
      </div>
      <div className="mb-3">
        <input className="form-control" name="joiningDate" type="date" value={form.joiningDate} onChange={handleChange}/>
      </div>
        <Button type="submit" variant="contained">Add Employee</Button>
      </form>
    </div>
  );
};

export default EmployeeForm;
