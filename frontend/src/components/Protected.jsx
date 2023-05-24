import { Navigate, Outlet } from "react-router-dom";

const Protected = ({ isSignedIn }) => {
  console.log("protected", isSignedIn);
  if (!isSignedIn) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default Protected;
