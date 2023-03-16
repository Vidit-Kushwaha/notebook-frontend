import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SignUp() {

  const [credential, setCredential] = useState({fname:"",lname:"", email: "", password: "" })
  const navigate = useNavigate();
  
  const handelSubmit = async (e) => {
    e.preventDefault();
    const url = `http://localhost:5000/api/auth/createUser`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name: credential.fname+" "+credential.lname , email: credential.email, password: credential.password })
    });
    console.log(credential)
    const json = await response.json()

    if (json.success) {
        localStorage.setItem('token', json.token)
        navigate("/")
    }
    console.log(json);
}
const onChange = (e) => {
  setCredential({ ...credential, [e.target.name]: e.target.value })
}
  return (
    <div className='container my-3 py-2' style={{ background: "lightblue", borderRadius: "10px", height: "100%",width:"60%" }}>
      <div className="fs-1 fw-bold ms-3"  >SignUp</div>
      <div className='fw-loght ms-3'>Please fill details to create account</div>
      <hr />
      <form className='container my-3' onSubmit={handelSubmit}>
            <div className="d-flex">
              <div className="mb-3 flex-lg-fill">
                <input type="text" className="form-control" id="fname" name="fname" placeholder='First Name' autoComplete="username" value={credential.fname} onChange={onChange}/>
              </div>
              <div className="mb-3 ms-3 flex-lg-fill">
                <input type="text" className="form-control" id="lname" name="lname" placeholder='Last Name' autoComplete="username" value={credential.lname} onChange={onChange}/>
              </div>
            </div>
        <div className="mb-3">
            <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder='Email address' autoComplete="username" value={credential.email} onChange={onChange}/>
        </div>
        <div className="mb-3">
            <input type="password" className="form-control" id="password" name="password" placeholder='Password' value={credential.password} autoComplete="new-password" onChange={onChange} />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" placeholder='Confirm Password'  autoComplete="new-password" onChange={onChange}/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default SignUp
