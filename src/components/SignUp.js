import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import AlertContext from '../contexts/notes/alertContext';

function SignUp() {
  const context = useContext(AlertContext);
  const { showalert } = context;
  const [credential, setCredential] = useState({ fname: "", lname: "", email: "", password: "", confirmPassword: "" })
  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (credential.confirmPassword === credential.password) {
      const url = `http://localhost:5000/api/auth/createUser`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: credential.fname + " " + credential.lname, email: credential.email, password: credential.password })
      });
      console.log(credential)
      const json = await response.json()

      if (json.success) {
        localStorage.setItem('token', json.token)
        showalert("Account created succesfully", "success")
        setInterval(() => {
          navigate("/")
        }, 3000)
      }
      console.log(json);
    }
    else {
      document.getElementsByClassName('text-danger')[0].setAttribute("style", "{{display:'block'}}");
      showalert("Error occured from our side", "danger")
    }
  }
  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className='container my-3 py-4' style={{ background: "#DCD6F7", borderRadius: "10px", height: "100%",  width: "80%",maxWidth:"550px" }}>
        <div className="fs-1 fw-bold ms-3"  >SignUp</div>
        <div className='fw-loght ms-3'>Please fill details to create account</div>
        <hr />
        <form className='container my-3 needs-validation' noValidate onSubmit={handelSubmit}>
          <div className="d-flex">
            <div className="mb-3 flex-lg-fill">
              <input type="text" className="form-control" id="fname" name="fname" placeholder='First Name' autoComplete="off" value={credential.fname} onChange={onChange} />
            </div>
            <div className="mb-3 ms-3 flex-lg-fill">
              <input type="text" className="form-control" id="lname" name="lname" placeholder='Last Name' autoComplete="off" value={credential.lname} onChange={onChange} />
            </div>
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder='Email address' autoComplete="email" value={credential.email} onChange={onChange} />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" id="password" name="password" placeholder='Password' value={credential.password} autoComplete="new-password" onChange={onChange} />
          </div>
          <div className="mb-3 ">
            <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" placeholder='Confirm Password' autoComplete="new-password" onChange={onChange} />
            <div className="text-danger" style={{ display: 'none' }} >Password does not match </div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
      <div className="container my-3 my-3 py-2 " style={{ background: "#DCD6F7", borderRadius: "10px", height: "100%",width: "70%", maxWidth:"500px" }}>
        <div className="d-flex justify-content-center">
          Have an account?  <Link type="button" to="/login" style={{ textDecoration: "none" }}>Log in</Link>

        </div>
      </div>
    </>
  )
}

export default SignUp
