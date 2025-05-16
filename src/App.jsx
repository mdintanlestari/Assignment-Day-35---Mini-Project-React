import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ListUserPage from "./pages/ListUserPage";
import DetailUserPage from "./pages/DetailUserPage";
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/listuser"
          element={
            <ProtectedRoute>
              <ListUserPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/detailpage/:id"
          element={
            <ProtectedRoute>
              <DetailUserPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
