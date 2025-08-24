import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import ProtectedRoute from "./ProtectedRoute";
import { Register } from "./components/register/Register";
import { Login } from "./components/login/Login";
import { Dashboard } from "./components/Dashboard/Dashboard";

axios.defaults.withCredentials = true;

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
