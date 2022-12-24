import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Profile from "./pages/components/Profile";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

let auth = true;

function App() {
  const ProtectedRoute = ({ children }) => {
    if (!auth) {
      return <Navigate to="/login" />;
    }

    return children;
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
