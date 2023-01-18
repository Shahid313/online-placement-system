import React from 'react';
import Home from './pages/Home';
import PostJob from './pages/Employer/PostJob';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import JobApply from './pages/Student/JobApply';
import Profile from './pages/profile';
import Applies from './pages/Student/applies';
import EmployerDashboard from './pages/Employer/EmployerDashboard';
import UpdateJob from './pages/Employer/UpdateJob';
import ApplicationsToJob from './pages/Employer/ApplicationsToJob';
import ApplicationDetails from './pages/Employer/ApplicationDetails';
import ApplicantProfile from './pages/Employer/ApplicantProfile';
import UpdateProfile from './pages/Auth/UpdateProfile';
import Students from './pages/Admin/Students';
import Employers from './pages/Admin/Employers';
import StudentDetails from './pages/Admin/StudentDetails';
import EmployerDetails from './pages/Admin/EmployerDetails';
import Jobs from './pages/Admin/Jobs';
import JobDetails from './pages/Admin/JobDetails';
import Applications from './pages/Admin/Applications';
import SentApplicationDetails from './pages/Admin/SentApplicationDetails';
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
        <Route exact path='/admin/students' element={< Students />}></Route>
        <Route exact path='/admin/employers' element={< Employers />}></Route>
        <Route exact path='/admin/student/details' element={< StudentDetails />}></Route>
        <Route exact path='/admin/employer/details' element={< EmployerDetails />}></Route>
        <Route exact path='/admin/jobs' element={< Jobs />}></Route>
        <Route exact path='/admin/job/details' element={< JobDetails />}></Route>
        <Route exact path='/admin/applications' element={< Applications />}></Route>
        <Route exact path='/admin/application/details' element={< SentApplicationDetails />}></Route>
      </Routes>
      </div>
      </Router>
  );
}

export default App;
