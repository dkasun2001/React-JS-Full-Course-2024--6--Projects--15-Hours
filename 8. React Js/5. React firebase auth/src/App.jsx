import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import ProfilePage from "./pages/profile/ProfilePage";
import AuthPage from "./pages/private-route/AuthPage";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/profile"
            element={
              <AuthPage>
                <ProfilePage />
              </AuthPage>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
