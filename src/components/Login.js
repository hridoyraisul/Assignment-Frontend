import React, { useState} from 'react'
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const submitLoginData = e => {
    e.preventDefault();
    const data = {
      email, password
    }
    console.log('result:',data);
    loginCustomer(data);
  }; 
  const loginCustomer = (data) => {
    axios.post("http://localhost/backend/user/login.php/",data
    ,{
      headers: 'Access-Control-Allow-Origin: *',
      mode: 'cors',
      method: 'POST',
    }
    )
    .then((response) => {
      if (response.data.role === 'admin') {
        localStorage.setItem('user_id', response.data.id);
        localStorage.setItem('username', response.data.username);
        localStorage.setItem('email', response.data.email);
        localStorage.setItem('role', response.data.role);
        <Redirect to='/' />;
        console.log(response.data);
      }
      else{
        localStorage.setItem('user_id', response.data.id);
        localStorage.setItem('username', response.data.username);
        localStorage.setItem('email', response.data.email);
        localStorage.setItem('role', response.data.role);
        localStorage.setItem('token', response.data.token);
        console.log(response.data);
      }
    })
    .catch(e => {
      console.log(e);
    });
    
  };
  return (
    <>
    <div className="container rounded-3 bg-dark text-white" style={{marginTop: '100px'}}><br></br>
    <h1 style={{color: '#7DDCB8 ', textDecoration: 'none', textAlign: 'center'}}>
        <strong>Login</strong>
    </h1><hr></hr>
      <form onSubmit={submitLoginData}>
        <div className="mb-3">
          <label className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-warning text-dark">
          Submit
        </button>
      </form><br></br>
      <p>Not registered yet? Go <Link to="/register" style={{color: '#7DDCB8 ', textDecoration: 'none'}}>register now</Link></p>
      <br></br>
    </div><br></br>
    </>
  )
}

export default Login
