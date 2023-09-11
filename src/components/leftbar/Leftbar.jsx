import { useContext } from 'react';
import './leftbar.scss';
import { AuthContext } from '../../context/authContext';

const Leftbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className='leftbar'>
      <div className="user">
        <img
            src={currentUser.profilePic}
            alt=""
        />
        <span>{currentUser.name}</span>
      </div>
    </div>
  );
}

export default Leftbar;
