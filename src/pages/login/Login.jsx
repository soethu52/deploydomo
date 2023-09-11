import { Link } from "react-router-dom";
import "./login.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin =()=> {
    login();
  }

  return (
    <div className='login'>
        <h1>Login</h1>
        <form>
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' />
            <span>Don't you have an account?</span>
            <Link to='/register'><button>Register</button></Link>
            <button onClick={handleLogin}>Login</button>
        </form>
    </div>
  )
}

export default Login;
