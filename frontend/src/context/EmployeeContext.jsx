import { createContext, useState, useEffect } from "react";
import API from "../api";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {

  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async (search = "") => {
    const res = await API.get(`/employees?search=${encodeURIComponent(search)}`);
    setEmployees(res.data);
  };

  const addEmployee = async (data) => {
    const res = await API.post("/employees", data);
    setEmployees(prev => [res.data, ...prev]);
  };

  const updateEmployee = async (id, data) => {
    const res = await API.put(`/employees/${id}`, data);
    setEmployees(prev => prev.map(e => e._id === id ? res.data : e));
  };

  const deleteEmployee = async (id) => {
    await API.delete(`/employees/${id}`);
    setEmployees(prev => prev.filter(e => e._id !== id));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchEmployees();
    }
  }, []);

  return (
    <EmployeeContext.Provider value={{ employees, fetchEmployees, addEmployee, updateEmployee, deleteEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};