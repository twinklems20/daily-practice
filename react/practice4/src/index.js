import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route, Navigate, Link, Outlet, useParams, NavLink, useNavigate, useLocation} from 'react-router-dom'

ReactDOM.render(
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myapp" element={<Navigate replace to="/learn" />} />
        <Route path="/learn" element={<Learn />} >
          <Route path="course" element={<Course />} >
            <Route path=":courseid" element={<CourseId />} />
          </Route>
          <Route path="grade" element={<Grade />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  </>,
  document.getElementById('root')
);


function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

function Learn() {
  return (
    <div>
      <h1>Learning Route</h1>
      <Link className="btn btn-primary m-2" to="/learn/course">
      Course
      </Link>
      <Link className="btn btn-warning m-2" to="/learn/grade">
      Grade
      </Link>
      <Outlet />
    </div>
  )
}

function Course() {
  const courseList = ["React", "JS", "Python", "AI", "ML"]
  const randomCourse = courseList[Math.floor(Math.random() * courseList.length)]
  return (
    <div>
      <h2>Select Your Course</h2>
      <p>More Test Of Courses</p>
      <NavLink
      style={({ isActive }) => {
        return {
          backgroundColor : isActive ? "pink" : "yellowgreen"
        }
      }}
       to={`/learn/course/${randomCourse}`} >{randomCourse}</NavLink>
      <NavLink className="btn btn-primary m-2" to={`/learn/course/test`} >Test</NavLink>
      <Outlet />
    </div>
  )
}

function Grade() {
  return (
    <div>
      <h2>Display Grade</h2>
    </div>
  )
}

function CourseId() {
  const navigate = useNavigate()
  const { courseid } = useParams()
  return (
    <div>
      <h2>URL params is : {courseid} </h2>
      <button className='btn btn-warning' onClick={() => {navigate("/dashboard", {state: courseid})}}>Price</button>
      <Link to="/dashboard" state="999" >Test Link</Link>
    </div>
  )
}

function Dashboard() {
  const location = useLocation()
  return (
    <div>
      <h2>Dashboard info is {location.state}</h2>
    </div>
  )
}


reportWebVitals();
