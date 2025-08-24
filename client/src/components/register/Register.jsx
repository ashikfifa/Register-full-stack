import axios from "axios";
import { useState } from "react";

export const Register=()=> {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const register = async () => {
    await axios.post("http://localhost:5000/auth/register", {
      email,
      password,
    });
    navigate("/login");
  };

  return (
    <div>
      <h2>Register</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={register}>Register</button>
    </div>
  );
}
