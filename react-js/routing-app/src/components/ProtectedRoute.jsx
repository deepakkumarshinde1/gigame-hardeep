import { Navigate } from "react-router-dom";

function ProtectedRoute(props) {
  let login = true;
  return <>{login === false ? <>{props.children}</> : <Navigate to="/" />}</>;
}

export default ProtectedRoute;
