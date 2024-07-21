import "./App.css";
import AuthProvider from "./core/context/AuthContext.tsx";

import LoginPage from "./routes/LoginPage.tsx";
import Home from "./routes/Home.tsx";
import Dashboard from "./routes/Dashboard.tsx";
import Book from "./routes/book.tsx";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Profile from "./routes/Profile.tsx";
function App() {
  return (
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
  );
}
export default App;
