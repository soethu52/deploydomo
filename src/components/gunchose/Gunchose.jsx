import { useContext } from 'react';
import './gunchose.scss';
import { GunContext } from '../../context/gunChoseContext';
import { useNavigate } from 'react-router-dom';

const Gunchose = () => {
  const { selectGun } = useContext(GunContext);
  const navigate = useNavigate();

  //TEMPORARY
  const guns = [
    {
      id: 1,
      name: "122mm MLRS",
      gunPic: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "240mm MLRS",
      gunPic: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 3,
      name: "122mm 4Tubes",
      gunPic: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 4,
      name: "122mm MLRS DI",
      gunPic: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 5,
      name: "122mm MLRS",
      gunPic: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 6,
      name: "240mm MLRS",
      gunPic: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 7,
      name: "122mm 4Tubes",
      gunPic: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 8,
      name: "122mm MLRS DI",
      gunPic: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  const getId = (li) => {
    console.log(li);
    selectGun(li);
    navigate("/calculate");
  }

  return (
    <div className='gunchose'>
      <ul className='left'>
        {guns.map((val)=> {
          return(
            <li key={val.id} className='card' onClick={() => getId(val.id)}>
              <div><img src={val.gunPic} alt="" /></div>
              <div>{val.name}</div>
            </li>
          )
        })}
      </ul>
      <div className="right">
        <div className="layout">
          <img src={"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600"} alt=''/>
        </div>
      </div>
    </div>
  );
}

export default Gunchose;
