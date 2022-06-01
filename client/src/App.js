import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register";
import Messenger from "./pages/messenger";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {

  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home/> : <Login/>}/>
        <Route path="/profile/:username" element={user ? <Profile/> : <Login/>}/>
        <Route path="/messenger" element={!user ? <Navigate to="/"/> : <Messenger/>}/>
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>}/>
        <Route path="/register" element={user ? <Navigate to="/"/> : <Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
