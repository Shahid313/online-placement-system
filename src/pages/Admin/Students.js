import React, {useState} from 'react';
import './style.css';
import './table.css';
import { Bars4Icon } from '@heroicons/react/24/solid'
import { AcademicCapIcon } from '@heroicons/react/24/solid'
import { BriefcaseIcon } from '@heroicons/react/24/solid'
import { UserPlusIcon } from '@heroicons/react/24/solid'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid'
import { TrashIcon } from '@heroicons/react/24/solid'
import { PencilSquareIcon } from '@heroicons/react/24/solid'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddStudentModel from './AddStudentModel';
import AddEmployerModel from './AddEmployerModel';
import UpdateStudentModel from './UpdateStudentModel';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';


  const Students = () => {
    const [sidebaropen, setSideBarOpen] = useState(false);

    return (
      <div>

        <AddStudentModel/>
        <AddEmployerModel/>
        <UpdateStudentModel/>

        <div className={sidebaropen === false ? 'sidebar':'sidebar active'}>
    <div className="logo-details">
    <i class='bx bxl-c-plus-plus'></i>
      <span className="logo_name">OPS</span>
    </div>
      <ul className="nav-links">
        
        <li>
          <a href="/admin/students">
          <AcademicCapIcon style={{width:22, height:22, color:"white"}}/>
            {sidebaropen === false ? 
            <span className="links_name">Students</span>:null}
          </a>
        </li>
        <li>
          <a href="/admin/employers">
          <BriefcaseIcon style={{width:22, height:22, color:"white"}}/>
          {sidebaropen == false ? 
            <span className="links_name">Employers</span>:null}
          </a>
        </li>
        <li  data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
          <a href="#">
          <UserPlusIcon style={{width:22, height:22, color:"white"}}/>
          {sidebaropen == false ? 
            <span className="links_name">Add student</span>:null}
          </a>
        </li>
        <li data-bs-toggle="modal" data-bs-target="#addEmplyerModalCenter">
          <a href="#">
          <UserCircleIcon style={{width:22, height:22, color:"white"}}/>
          {sidebaropen == false ? 
            <span className="links_name">Add employer</span>:null}
          </a>
        </li>

        <li>
          <a href="/admin/jobs">
          <BriefcaseIcon style={{width:22, height:22, color:"white"}}/>
          {sidebaropen == false ? 
            <span className="links_name">Jobs</span>:null}
          </a>
        </li>

        <li>
          <a href="/admin/applications">
          <BriefcaseIcon style={{width:22, height:22, color:"white"}}/>
          {sidebaropen == false ? 
            <span className="links_name">Jobs</span>:null}
          </a>
        </li>
        
        <li className="log_out">
          <a href="#">
          <ArrowLeftOnRectangleIcon style={{width:22, height:22, color:"white"}}/>
          {sidebaropen == false ?
            <span className="links_name">Log out</span>:null}
          </a>
        </li>
      </ul>
  </div>
  <section className="home-section">
    <nav>
      <div onClick={() => setSideBarOpen(!sidebaropen)} className="sidebarBtn">
      <Bars4Icon style={{width:22, height:22}} />
      </div>
      <span className="dashboard">Dashboard</span>
      <div className="profile-details">
        <span className="admin_name">Shahid Khan</span>
      </div>
    </nav>
    <br/>

    <h2>Students</h2>
    
<div className="table-wrapper">
    <table className="fl-table">
        <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Details</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        
        <tr>
            <td className='tableRow'>Shahid Khan</td>
            <td className='tableRow'>shahid@gail.com</td>
            <td className='tableRow'>shahid1234</td>
            <td className='tableRow'>
              <Link to="/admin/student/details">
              See
              </Link>
              </td>
            <td>
            <PencilSquareIcon data-bs-toggle="modal" data-bs-target="#updateStudentModalCenter" style={{width:22, height:22, cursor:'pointer'}}/>
            <TrashIcon style={{width:22, height:22, cursor:'pointer'}}/>
            </td>
        </tr>
        
        
        </tbody>
    </table>
</div>
    
  </section>
      </div>
    )
  }

  export default Students;

