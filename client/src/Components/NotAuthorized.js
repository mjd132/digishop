import { Navigate } from "react-router-dom";
import Auth from "./Pages/Auth";

const NotAuthorized = () => {
  return [
    { path: "/login", element: <Auth /> },
    {
      path: "/dashboard/*",
      element: <Navigate to={"/login"} />,
    },
  ];
};

export default NotAuthorized;
