import { createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Profile } from "./pages/Profile";
import { Landing }  from "./pages/Landing";
import PrivateRoute from "./components/PrivateRoute";
import Journey from "./pages/Journey";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<h1>Not found!</h1>}>

      {/* Ruta raíz que redirige a home si estás logueado, si no carga Landing */}
      <Route
        index
        element={
          localStorage.getItem("token")
            ? <Navigate to="/home" />
            : <Landing />
        }
      />

      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />

      {/* Rutas protegidas */}
      <Route path="profile" element={
        <PrivateRoute>
          <Profile />
        </PrivateRoute>
      } />
      <Route path="home" element={
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      } />
      
      <Route path="journey" element={<Journey />} />
    </Route>
  )
);