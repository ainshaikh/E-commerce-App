import React from "react";
import Layout from "../Layout/Layout";
import { useState } from "react";
import toast from 'react-hot-toast';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  // form submit function
  const submitHandle = async (e) =>{
    e.preventDefault();
      try {
        const res = await axios.post('/api/v1/auth/register',{name,email,password,phone,address})
        if(res && res.data.success){
          toast.success(res && res.data.message)
          navigate('/login')
        }
        else{
          toast.error(res.data.message)
        }
      } catch (error) {
        console.log(error);
        toast.error('Something went wrong')
      }
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
