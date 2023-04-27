import React, { useState } from 'react'

const Form = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const changeHandler = (e) => {
        setUser({...user,[e.target.id]: e.target.value})
    }

    return (
        <div>
            <form className="mx-auto px-3 py-5 col-md-6">
                <div className="mb-3 d-flex">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" class="form-control" id="firstName" onChange={changeHandler}/>
                </div>
                <div className="mb-3 d-flex">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastName" onChange={changeHandler}/>
                </div>
                <div className="mb-3 d-flex">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control" id="email" onChange={changeHandler}/>
                </div>
                <div className="mb-3 d-flex">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" onChange={changeHandler}/>
                </div>
                <div className="mb-3 d-flex">
                    <label htmlFor="confirmPassword" className="form-label"> Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPassword" onChange={changeHandler}/>
                </div>
            </form>
            <div className="mx-auto px-3 py-3 col-md-6">
                <h4>Your Form Data</h4>
                <p>First Name: {user.firstName}</p>
                <p>Last Name: {user.lastName}</p>
                <p>Email: {user.email}</p>
                <p>Password: {user.password}</p>
                <p>Confirm Password: {user.confirmPassword}</p>
            </div>
        </div>
    )
}

export default Form