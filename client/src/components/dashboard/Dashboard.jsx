import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Dashboard=()=> {
  const navigate = useNavigate();
  const logout = async () => {
    await axios.get("http://localhost:5000/auth/logout");
    navigate("/login");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}