import { useState,useContext } from 'react';
import './leftbar.scss';
import { AuthContext } from '../../context/authContext';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { useNavigate } from 'react-router-dom';

const Leftbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [err,setErr] = useState(null);

  const logoutHandle = async (e) => {
    e.preventDefault();
    try{
      await logout();
      navigate("/login");
    }catch(err){
      setErr(err.response.data);
    }
  }
  console.log(err);
  return (
    <div className='leftbar'>
      <div className="user">
        <img
            src={currentUser.profilePic}
            alt=""
        />
        <span>{currentUser.name}</span>
      </div>
      <div onClick={logoutHandle}>
        <ExitToAppOutlinedIcon/>Logout
      </div>
    </div>
  );
}

export default Leftbar;
