import { Link } from "react-router-dom";

function Registration() {
  return (
    <div>
      Registration
      <p>
        Have a account ? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
}

export default Registration;
