import React from "react";
import Layout from "../Layout/Layout";
import { useState } from "react";
import toast from 'react-hot-toast';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useAuth } from "../../context/Auth";

const Login = () => {
  const [auth, setAuth] = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
 

  // form submit function
  const loginHandle = async (e) =>{
    e.preventDefault();
      try {
        const res = await axios.post('/api/v1/auth/login',{email,password})
        if(res && res.data.success){
          toast.success(res && res.data.message)
          setAuth({
            ...auth ,
            user: res.data.user,
            token:res.data.token,
          })
          localStorage.setItem('auth', JSON.stringify(res.data))  // to keep data in local storage.
          navigate('/');
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
        <h2>Login </h2>
        <form onSubmit={loginHandle}>
          <div className="mb-3">
           
            

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

         

          <button type="submit" className="btn btn-primary my-3">
            Login
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
