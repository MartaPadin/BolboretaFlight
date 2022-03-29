import LoginUser from "../components/LoginUser/LoginUser";

const LoginScreen = () => {
  return (
    <div className="loginpagina">
      <h3> Si eres usuario registrado de Bolboreta Flight.</h3>
      <h1> Inicia Sesión</h1>
      <LoginUser />
    </div>
  );
};

export default LoginScreen;
