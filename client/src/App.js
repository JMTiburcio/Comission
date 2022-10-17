import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Register from "./pages/register";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

// New pages for jobs

import Jobs from "./pages/jobs";
import CreateJob from "./pages/createJob";
import UpdateJob from "./pages/updateJob";
import MyItems from "./pages/myItems";
import MyJob from "./pages/myJob";
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
        <Route path="/MyItems" element={user ? <MyItems/> : <Login/>}/>
        <Route path="/myJob/:jobId" element={user ? <MyJob/> : <Login/>}/>
        <Route path="/myJob/form/:jobId" element={user ? <UpdateJob/> : <Login/>}/>
        <Route path="/newHome" element={user ? <NewHome/> : <Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
