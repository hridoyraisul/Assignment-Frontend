import React, {useState} from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";


function Register(props) {
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [confirm_password,setConfirmPassword] = useState('');

  const submitUserData = e => {
    e.preventDefault();
    const data = {
      username, email, password, confirm_password
    }
    console.log('result:',data);
    postCustomer(data);
  }; 
  const postCustomer = (data) => {
    axios.post("http://localhost/backend/user/reg.php/",data
    ,{
      headers: {'Access-Control-Allow-Origin': '*'},
      mode: 'cors',
      method: 'POST',
    }
    )
    .then((response) => {
      <Redirect to='/login' />;
      console.log(response);
    })
    .catch(e => {
      console.log(e.message);
    });
  }
  return (
    <>
    <div className="container " style={{marginTop: '70px'}}>
    <div className="col-md-12 rounded-3 bg-dark text-white"><br></br>
    <h1 style={{color: '#7DDCB8 ',  textAlign: 'center', marginTop: '40px',}}>
        <strong>Register</strong>
    </h1><hr></hr>
      <form 
      onSubmit={submitUserData}
      >
      <div className="mb-3">
          <label className="form-label" >
            Name
          </label>
          <input
            type="text"
            className="form-control form-control-sm"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control form-control-sm"
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
            className="form-control form-control-sm"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control form-control-sm"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-warning text-dark">
          Submit
        </button>
     <br></br><br></br>
      <p>Registered already? Go <Link to="/login" style={{color: '#7DDCB8 ', textDecoration: 'none'}}>login now</Link></p>
      <br></br>
      </form>
      </div>
    </div>
    </>
  )
}

export default Register
