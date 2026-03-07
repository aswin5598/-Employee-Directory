// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import ProtectedRoute from "./components/ProtectedRoute";
// import Navbar from "./components/Navbar";

// function App() {

//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>

//         <Route path="/login" element={<Login/>}/>
//         <Route path="/register" element={<Register/>}/>

//         <Route
//           path="/"
//           element={
//             <ProtectedRoute>
//               <Dashboard/>
//             </ProtectedRoute>
//           }
//         />

//       </Routes>

//     </BrowserRouter>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import AddEmployee from "./pages/AddEmployee";
import About from "./pages/About";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/Footer";

function App() {

  return (
    <BrowserRouter>

      <Navbar/>

      <Routes>

        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

        <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>} />

        <Route path="/employees"
          element={<ProtectedRoute><Employees/></ProtectedRoute>}
        />

        <Route path="/add-employee"
          element={<ProtectedRoute><AddEmployee/></ProtectedRoute>}
        />

        <Route path="/about"
          element={<ProtectedRoute><About/></ProtectedRoute>}
        />

      </Routes>

      <Footer/>

    </BrowserRouter>
  );
}

export default App;