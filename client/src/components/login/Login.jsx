import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login=()=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    await axios.post("http://localhost:5000/auth/login", { email, password });
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>Login</button>
      <br />
      <a href="http://localhost:5000/auth/google">Login with Google</a>
      <br />
      <a href="http://localhost:5000/auth/facebook">Login with Facebook</a>
    </div>
  );
}