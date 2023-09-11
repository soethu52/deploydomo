import Navbar from "./components/navbar/Navbar";
import Calculate from "./components/calculate/Calculate";
import Gunchose from "./components/gunchose/Gunchose";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import './style.scss';
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import Leftbar from "./components/leftbar/Leftbar";

function App() {
  const {currentUser} = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);
  const ProtectedRoute = ({ children }) => {
    if(!currentUser) {
      return <Navigate to="/login" />
    }
    return children;
  }

  const Layout = () => {
    return(
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar/>
        <div style={{display: "flex"}}>
          <Leftbar/>
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
        </div>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Gunchose />,
        },
        {
          path: "/calculate",
          element: <Calculate />,
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;