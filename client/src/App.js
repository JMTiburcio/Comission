import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

// New pages for jobs

import Jobs from "./pages/jobs";
import CreateJob from "./pages/createJob";
import CreateJobDesc from "./pages/createJobDesc";
import CreateJobAssess from "./pages/createJobAssess";
import NewHome from "./pages/newHome";

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
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>}/>
        <Route path="/register" element={user ? <Navigate to="/"/> : <Register/>}/>

        {/* New pages for jobs */}
        <Route path="/jobs" element={user ? <Jobs/> : <Login/>}/>
        <Route path="/createJob" element={user ? <CreateJob/> : <Login/>}/>
        <Route path="/createJobDesc" element={user ? <CreateJobDesc/> : <Login/>}/>
        <Route path="/createJobAssess" element={user ? <CreateJobAssess/> : <Login/>}/>
        <Route path="/newHome" element={user ? <NewHome/> : <Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;