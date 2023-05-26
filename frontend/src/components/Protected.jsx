import { useContext, useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { AuthenticationContext } from "./AuthenticationContext";
import axios from "axios";

const Protected = ({ setIsLoading, isLoading }) => {
  const { setIsSignedIn, isSignedIn } = useContext(AuthenticationContext);
  console.log("protected", isSignedIn);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:5000/token/verify", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        if (response.data.id) {
          setIsSignedIn(true);
          navigate(location.pathname);
          setIsLoading(false);
        }
      });
  }, []);

  if (isLoading) {
    return <div>The page is loading</div>;
  }
  if (!isSignedIn) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default Protected;
