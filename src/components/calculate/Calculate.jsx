import { useContext } from 'react';
import './calculate.scss';
import { GunContext } from '../../context/gunChoseContext';
import { Link } from 'react-router-dom';

const Calculate = () => {
  const { currentGun } = useContext(GunContext);
  return (
    <div className='calculate'>
      <h1>GunId:{currentGun.id}</h1>
      <div className="gun">
        <input type="number" placeholder='ရှေ့မူ'/>
        <input type="number" placeholder='မြောက်မူ'/>
        <input type="number" placeholder='အမြင့်'/>
      </div>
      <div className="target">
        <input type="number" placeholder='ရှေ့မူ'/>
        <input type="number" placeholder='မြောက်မူ'/>
        <input type="number" placeholder='အမြင့်'/>
      </div>
      <button>Calculate</button>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
}

export default Calculate;
