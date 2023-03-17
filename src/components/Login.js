import React, { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import AlertContext from "../contexts/notes/alertContext";

function Login() {
    const context = useContext(AlertContext);
    const { showalert } = context;
    const [credential, setCredential] = useState({ email: "", password: "" })
    const navigate = useNavigate();

    const handelSubmit = async (e) => {
        e.preventDefault();
        const url = `http://localhost:5000/api/auth/login`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: credential.email, password: credential.password })
        });
        const json = await response.json()
        if (json.success) {
            localStorage.setItem('token', json.token)
            showalert("login into account...", "success")
            setInterval(() => {
                navigate("/")
              }, 3000)
        }
        else {
            showalert(json, "danger")
        }

    }
    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className="container my-3 py-4 " style={{ background: "lightblue", borderRadius: "10px", height: "100%", width: "80%",maxWidth:"550px" }}>
                <div className="fs-1 fw-bold ms-3 mb-3">Log In</div>
                <hr />
                <form onSubmit={handelSubmit}>
                    <div className="">
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={credential.email} name="email" onChange={onChange} placeholder="Email address" autoComplete="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label"></label>
                        <input type="password" className="form-control" id="password" value={credential.password} name="password" onChange={onChange} placeholder="Password" autoComplete="current-password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="container my-3 my-3 py-2 " style={{ background: "lightblue", borderRadius: "10px", height: "100%", width: "70%", maxWidth:"500px" }}>
                <div className="d-flex justify-content-center">
                    Don't have an account?  <Link type="button" to="/signup" style={{ textDecoration: "none" }}>Sign Up</Link>
                </div>
            </div>
        </>
    )
}

export default Login
