import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.scss";

export const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e: { target: { name: string; value: string } }) => {
    setInputs((previous) => ({ ...previous, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await axios.post("/auth/login", inputs);
      navigate("/");
    } catch (error: any) {
      setError(error.response.data);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form">
        <input
          required
          type="text"
          placeholder="Usuário"
          onChange={handleChange}
          name="username"
        />
        <input
          required
          type="password"
          placeholder="Senha"
          onChange={handleChange}
          name="password"
        />
        <button onClick={handleSubmit}>Login</button>
        {error && <p>{error}</p>}
        <span>
          {" "}
          Não possui uma conta? <Link to="/register">Registre-se</Link>
        </span>
      </form>
    </div>
  );
};
