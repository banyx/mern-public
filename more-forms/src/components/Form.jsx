import React, { useState } from 'react'

const Form = () => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""

    })

    const createUser = (e) => {
        e.preventDefault();
    }

    const changeHandler = (e) => {
        setUser({...user,[e.target.id]: e.target.value});
    }

    return (
        <div>
            <form className="px-3 py-5 offset-3 col-md-6" onSubmit={createUser}>
                <div className="mb-3 d-flex">
                    <label htmlFor="firstName" className="form-label col-md-2">First Name</label>
                    <input type="text" class="form-control" id="firstName" onChange={changeHandler}/>
                </div>
                    {user.firstName.length > 0 && user.firstName.length < 2 ? <p className="offset--4">First Name must be at least 2 characters.</p>:null}
                <div className="mb-3 d-flex">
                    <label htmlFor="lastName" className="form-label col-md-2">Last Name</label>
                    <input type="text" className="form-control" id="lastName" onChange={changeHandler}/>
                </div>
                    {user.lastName.length > 0 && user.lastName.length < 2  ? <p className="offset-2">Last Name must be at least 2 characters.</p>:null}
                <div className="mb-3 d-flex">
                    <label htmlFor="email" className="form-label col-md-2">Email</label>
                    <input type="text" className="form-control" id="email" onChange={changeHandler}/>
                </div>
                    {user.email.length > 0 && user.email.length < 5  ? <p className="offset-2">Email must be at least 5 characters.</p>:null}
                <div className="mb-3 d-flex">
                    <label htmlFor="password" className="form-label col-md-2">Password</label>
                    <input type="password" className="form-control" id="password" onChange={changeHandler}/>
                </div>
                    {user.password.length > 0 && user.password.length < 8  ? <p className="offset-2">Password must be at least 8 characters.</p>:null}
                <div className="mb-3 d-flex">
                    <label htmlFor="confirmPassword" className="form-label col-md-2"> Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPassword" onChange={changeHandler}/>
                </div>
                    {user.confirmPassword.length > 0 && user.confirmPassword != user.password ? <p className="offset-2">Passwords must match.</p>:null}

                <div className="btn btn-primary offset-1">Submit</div>
            </form>
        </div>
    )
}

export default Form