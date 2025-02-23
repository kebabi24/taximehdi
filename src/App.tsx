import "./App.css";
import AuthProvider from "./core/context/AuthContext.tsx";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // Default theme
import "primereact/resources/primereact.min.css"; // Core CSS
import "primeicons/primeicons.css"; // Icons
import "primeflex/primeflex.css"; // PrimeFlex (optional)
import LoginPage from "./routes/LoginPage.tsx";
import Home from "./routes/Home.tsx";
import Dashboard from "./routes/Dashboard.tsx";
import Book from "./routes/book.tsx";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Profile from "./routes/Profile.tsx";
function App() {
  return (
    <PrimeReactProvider>
      <div className="App">
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/book" element={<Book />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </PrimeReactProvider>
  );
}
export default App;
