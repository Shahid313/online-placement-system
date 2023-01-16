import React from 'react';
import Home from './pages/Home';
import PostJob from './pages/Employer/PostJob';
import Register from './Auth/pages/Register';
import Login from './Auth/pages/Login';
import JobApply from './pages/Student/JobApply';
import Profile from './pages/profile';
import Applies from './pages/Student/applies';
import EmployerDashboard from './pages/Employer/EmployerDashboard';
import UpdateJob from './pages/Employer/UpdateJob';
import ApplicationsToJob from './pages/Employer/ApplicationsToJob';
import ApplicationDetails from './pages/Employer/ApplicationDetails';
import ApplicantProfile from './pages/Employer/ApplicantProfile';
import UpdateProfile from './Auth/pages/UpdateProfile';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
      <Routes>
        <Route exact path='/register' element={< Register />}></Route>
        <Route exact path='/login' element={< Login />}></Route>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/employer/postjob' element={< PostJob />}></Route>
        <Route exact path='/student/apply' element={< JobApply />}></Route>
        <Route exact path='/profile' element={< Profile />}></Route>
        <Route exact path='/student/applies' element={< Applies />}></Route>
        <Route exact path='/employer/dashboard' element={< EmployerDashboard />}></Route>
        <Route exact path='/employer/updatejob' element={< UpdateJob />}></Route>
        <Route exact path='/employer/applicationstojob' element={< ApplicationsToJob />}></Route>
        <Route exact path='/application/details' element={< ApplicationDetails />}></Route>
        <Route exact path='/student/profile' element={< ApplicantProfile />}></Route>
        <Route exact path='/student/profile/update' element={< UpdateProfile />}></Route>
      </Routes>
      </div>
      </Router>
  );
}

export default App;
