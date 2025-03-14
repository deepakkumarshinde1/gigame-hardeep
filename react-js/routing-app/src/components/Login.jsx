import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      Login
      <p>
        Don't have a account ? <Link to="/create-account">Create Account</Link>
      </p>
    </div>
  );
}

export default Login;
