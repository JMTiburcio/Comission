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
import PostedJob from "./pages/postedJob";
import SavedJob from "./pages/savedJob";
import MyJob from "./pages/myJob";
import Applicants from "./pages/applicants"
import JobView from "./pages/jobView"

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
        <Route path="/postedJobs" element={user ? <PostedJob/> : <Login/>}/>
        <Route path="/savedJobs" element={user ? <SavedJob/> : <Login/>}/>
        <Route path="/job/view/:jobId" element={user ? <JobView/> : <Login/>}/>
        <Route path="/myJob/:jobId" element={user ? <MyJob/> : <Login/>}/>
        <Route path="/myJob/:jobId/applicants" element={user ? <Applicants/> : <Login/>}/>
        <Route path="/myJob/form/:jobId" element={user ? <UpdateJob/> : <Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
