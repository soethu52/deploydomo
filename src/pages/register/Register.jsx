import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className='register'>
        <h1>Register</h1>
        <form>
            <input type="text" placeholder='Username' />
            <input type="password" placeholder='Password' />
            <input type="number" placeholder='Phonenumber' />
            <span>Do you have an account?</span>
            <Link to='/login'><button>Login</button></Link>
            <button>Register</button>
        </form>
    </div>
  )
}

export default Register;
