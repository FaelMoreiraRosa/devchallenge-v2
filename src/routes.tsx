import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as Switch,
} from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import { Dashboard } from "./pages/admin/Dashboard";
import { Login } from "./pages/admin/Login";
import { Registration } from "./pages/admin/Registration";
import { Challenges } from "./pages/Challenges";
import { Community } from "./pages/Community";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";

const ProtectedRoute = ({ element }) => {
  const { isLogged } = useAuth();

  return isLogged ? element : <Navigate to="/admin" replace />;
};

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/challenge" element={<Detail />} />
        <Route path="/devs" element={<Community />} />
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/registration" element={<Registration />} />
        <Route
          path="/admin/inicio"
          element={<ProtectedRoute element={<Dashboard />} />}
        />
      </Switch>
    </BrowserRouter>
  );
}
