import { Link, useNavigate } from "react-router-dom";
import "./register.scss";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [inputs,setInputs] = useState({
    name: "",
    password: "",
    phonenumber: ""
  });
  const [err,setErr] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleClick = async e => {
    e.preventDefault();
    try{
      await axios.post("http://localhost:8800/api/auth/register", inputs);
      navigate("/login");
    }catch(err){
      setErr(err.response.data);
    }
  }
  console.log(err);
  return (
    <div className='register'>
        <h1>Register</h1>
        <form>
            <input type="text" placeholder='Username' name="name" onChange={handleChange}/>
            <input type="password" placeholder='Password' name="password" onChange={handleChange} />
            <input type="number" placeholder='Phonenumber' name="phonenumber" onChange={handleChange} />
            <span>Do you have an account?<Link to='/login'>Login.</Link></span>
            { err && err }
            <button onClick={handleClick}>Register</button>
        </form>
    </div>
  )
}

export default Register;
