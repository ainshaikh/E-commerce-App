import React from "react";
import Layout from "../Layout/Layout";
import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  // form submit function
  const submitHandle =(e) =>{
    e.preventDefault();
    console.log(name,email,password,phone,address);
  }

  return (
    <Layout>
      <div className="register">
        <h2>Register Here</h2>
        <form onSubmit={submitHandle}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="name"
              value={name}
              onChange={(e)=> setName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              required
            />

            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>

          <label htmlFor="exampleInputEmail1" className="form-label">
            Address
          </label>
          <input type="text" value={address} onChange={(e)=> setAddress(e.target.value)} className="form-control" id="exampleInputEmail1" required />

          <label htmlFor="exampleInputEmail1" className="form-label">
            Phone
          </label>
          <input type="text" value={phone} onChange={(e)=> setPhone(e.target.value)} className="form-control" id="exampleInputEmail1" required />

          <button type="submit" className="btn btn-primary my-3">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
