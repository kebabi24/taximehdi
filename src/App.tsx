import "./App.css";
import AuthProvider from "./core/context/AuthContext.tsx";

import LoginPage from "./routes/LoginPage.tsx";
import Home from "./routes/Home.tsx";
import Book from "./routes/book.tsx";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/book" element={<Book />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}
export default App;
