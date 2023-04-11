import { useContext } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Profile from './pages/profile';
import Company from './pages/company';
import Register from './pages/register';
import { AuthContext } from './context/AuthContext';

// New pages for jobs

import Jobs from './pages/jobs';
import CreateJob from './pages/createJob';
import UpdateJob from './pages/updateJob';
import PostedJob from './pages/postedJob';
import SavedJob from './pages/savedJob';
import MyJob from './pages/myJob';
import Applicants from './pages/applicants';
import JobView from './pages/jobView';

const App = () => {
  const { user } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={user ? <Home /> : <Login />} path="/" />
        <Route element={user ? <Profile /> : <Login />} path="/profile/:username" />
        <Route element={user ? <Company /> : <Login />} path="/company/:name" />
        <Route element={user ? <Navigate to="/" /> : <Login />} path="/login" />
        <Route element={user ? <Navigate to="/" /> : <Register />} path="/register" />

        {/* New pages for jobs */}
        <Route element={user ? <Jobs /> : <Login />} path="/jobs" />
        <Route element={user ? <CreateJob /> : <Login />} path="/createJob" />
        <Route element={user ? <CreateJob /> : <Login />} path="/createJob/:step" />
        <Route element={user ? <PostedJob /> : <Login />} path="/postedJobs" />
        <Route element={user ? <SavedJob /> : <Login />} path="/savedJobs" />
        <Route element={user ? <JobView /> : <Login />} path="/job/view/:jobId" />
        <Route element={user ? <MyJob /> : <Login />} path="/myJob/:jobId" />
        <Route element={user ? <Applicants /> : <Login />} path="/myJob/:jobId/applicants" />
        <Route element={user ? <UpdateJob /> : <Login />} path="/myJob/form/:jobId" />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
