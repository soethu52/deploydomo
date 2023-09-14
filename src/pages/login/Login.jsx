import { Link, useNavigate } from "react-router-dom";
import "./login.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const [inputs,setInputs] = useState({
    name: "",
    password: ""
  });
  const [err,setErr] = useState(null);

  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try{
      console.log("Try");
      await login(inputs);
      navigate("/");
    }catch(err){
      setErr(err.response.data);
    }
  }
  console.log(inputs);

  return (
    <div className='login'>
        <h1>Login</h1>
        <form>
            <input type="text" placeholder='Username' name="name" onChange={handleChange} />
            <input type="password" placeholder='Password' name="password" onChange={handleChange} />
            <span>Don't you have an account?  <Link to='/register'>Register.</Link></span>           
            { err && err }
            <button onClick={handleLogin}>Login</button>
        </form>
    </div>
  )
}

export default Login;
