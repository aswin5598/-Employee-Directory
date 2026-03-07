import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    register(form);

    setMessage("✅ Registration Successful! Redirecting to Login...");

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">

        <div className="col-md-5">
          <div className="card shadow p-4">

            <h3 className="text-center mb-4">Register</h3>

            {message && (
              <div className="alert alert-success">
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  className="form-control"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter name"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  className="form-control"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  required
                />
              </div>

              <button className="btn btn-primary w-100">
                Register
              </button>

            </form>

            <p className="text-center mt-3">
              Already have an account? 
              <span
                style={{cursor:"pointer", color:"blue"}}
                onClick={()=>navigate("/login")}
              >
                {" "}Login
              </span>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Register;