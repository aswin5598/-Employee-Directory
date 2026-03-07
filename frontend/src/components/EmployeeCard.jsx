import { useContext, useState } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
import Button from '@mui/material/Button';

const EmployeeCard = ({ emp }) => {

  const { deleteEmployee, updateEmployee } = useContext(EmployeeContext);

  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name: emp.name || "",
    email: emp.email || "",
    phone: emp.phone || "",
    department: emp.department || "",
    role: emp.role || "",
    joiningDate: emp.joiningDate ? emp.joiningDate.split("T")[0] : ""
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = async () => {
    await updateEmployee(emp._id, form);
    setEditing(false);
  };

  return (
    <div className="card my-2">
      <div className="card-body">
        {editing ? (
          <div>
            <input className="form-control mb-2" name="name" value={form.name} onChange={handleChange} placeholder="Name" />
            <input className="form-control mb-2" name="email" value={form.email} onChange={handleChange} placeholder="Email" />
            <input className="form-control mb-2" name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" />
            <input className="form-control mb-2" name="department" value={form.department} onChange={handleChange} placeholder="Department" />
            <input className="form-control mb-2" name="role" value={form.role} onChange={handleChange} placeholder="Role" />
            <input className="form-control mb-2" name="joiningDate" type="date" value={form.joiningDate} onChange={handleChange} />
            <div className="d-flex gap-2 mt-2">
              <Button variant="contained" color="primary" onClick={handleSave}>Save</Button>
              <Button variant="outlined" onClick={() => { setEditing(false); setForm({ name: emp.name, email: emp.email, phone: emp.phone, department: emp.department, role: emp.role, joiningDate: emp.joiningDate ? emp.joiningDate.split("T")[0] : "" }); }}>Cancel</Button>
            </div>
          </div>
        ) : (
          <div>
            <h5 className="card-title">{emp.name}</h5>
            <p className="card-text mb-1">{emp.email}</p>
            <p className="card-text text-muted">{emp.department}</p>
            <div className="d-flex gap-2 mt-2">
              <Button variant="contained" size="small" onClick={()=>setEditing(true)}>Edit</Button>
              <Button variant="outlined" color="error" size="small" onClick={()=>deleteEmployee(emp._id)}>Delete</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeCard;