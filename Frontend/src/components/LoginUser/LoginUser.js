import { TextField } from "@mui/material";
import { Link, Navigate } from "react-router-dom";
import "./style.css";
import { useState, useContext, useEffect } from "react";
import { TokenContext } from "../../context/TokenContext";
import { UserContext } from "../../context/UserContext";
import LoginGoogle from "../LoginGoogle/LoginGoogle";

import swal from "sweetalert";

function LoginUser() {
  const [user, setUser, fetchUserProfile] = useContext(UserContext);
  const [email, setEmail] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const [password, setPassword] = useState("");
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const [token, setToken] = useContext(TokenContext);

  useEffect(() => {
    if (token) {
      fetchUserProfile();
    }
  }, [token]);

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `http://${process.env.REACT_APP_PUBLIC_HOST_BACKEND}:${process.env.REACT_APP_PUBLIC_PORT_BACKEND}/login`,
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },

          body: JSON.stringify({ email, password }),
        }
      );
      if (res.ok) {
        const body = await res.json();

        setToken(body.data.token);
      } else {
        const error = await res.json();
        swal(error.message, "", "warning");
      }
    } catch (message) {
      swal(message, "", "error");
    }
  };

  //Botón para mostrar contraseña
  const [shown, setShown] = useState(false);
  const switchShown = () => setShown(!shown);

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <div className="formulario">
      <section className="form_logueo">
        <form onSubmit={login} className="login">
          <TextField
            style={{ width: "252px" }}
            id="usuario"
            label="E-mail"
            type="email"
            value={email}
            onChange={handleEmail}
          />

          <TextField
            id="password"
            label="Contraseña"
            type={shown ? "text" : "password"}
            value={password}
            onChange={handlePassword}
          />

          <button className="sesion" type="submit">
            {" "}
            Inicio de Sesión{" "}
          </button>
        </form>
        <section className="googleboton">
          <LoginGoogle />
        </section>
        <section className="show">
          <button className="passshow" onClick={switchShown}>
            {" "}
            {shown ? "Ocultar contraseña" : "Mostrar contraseña"}{" "}
          </button>
          <Link to="/recover">
            <button className="pregunta" type="button">
              ¿Has olvidado la contraseña?{" "}
            </button>
          </Link>
        </section>

        <section className="registro">
          <Link to="/register">
            <button className="registerlogin" type="button">
              REGISTRATE{" "}
            </button>
          </Link>
        </section>
      </section>
    </div>
  );
}

export default LoginUser;
