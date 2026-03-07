import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

const Login = () => {

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form,setForm] = useState({
    email:"",
    password:""
  });

  const handleChange = (e)=>{
    setForm({...form,[e.target.name]:e.target.value});
  };

  const handleSubmit = async(e)=>{
    e.preventDefault();
    await login(form);
    navigate("/");
  };

  return(

    <div className="auth-container">

      <div className="auth-card">

        <h3 className="text-center mb-4">
          Login
        </h3>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control mb-3"
            onChange={handleChange}
          />

          <button className="btn btn-primary w-100">
            Login
          </button>

        </form>

        <p className="text-center mt-3">
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>

      </div>

    </div>

  );
};

export default Login;