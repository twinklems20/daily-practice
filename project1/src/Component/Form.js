import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import About from "./About";

function Form() {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const navigate = useNavigate()

const add = () => {
    localStorage.setItem('Email', email)
    localStorage.setItem('Password', password)
    navigate("/about", {replace: true})
   
}

const dlt = () => {
    localStorage.removeItem('Email', email)
    localStorage.removeItem('Password', password)
}



  return (
    <div className="contactStyle">
      <h1 className="App my-4">Login Here</h1>
      <div className="w-50 m-auto">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="inputPassword" className="form-label text-start">
        Password
        </label>
        <input
          type="text"
          className="form-control"
          id="inputPassword"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      
      <button className="btn btn-info m-2" type="submit" defaultValue="Submit" onClick={add}>Submit </button>
      <button className="btn btn-info m-2" type="remove" defaultValue="Remove" onClick={dlt}>Remove</button>

      </div>
    </div>
  );
}

export default Form;
