import React from 'react'
import Layout from '../Layout/Layout'

const Login = () => {
  return (
    <Layout>
    <div className="register">
    <h2>Login</h2>
      <form>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
       
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" />
      </div>
    
      <button type="submit" className="btn btn-primary">Login</button>
    </form>
    </div>
    </Layout>
  )
}

export default Login
