import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDragon } from '../../redux/dragon/dragon';

const DragonPage = () => {
  const dispatch = useDispatch();
  const dragonDetail = useSelector((state) => state.dragonReducer);
  useEffect(() => {
    dispatch(fetchDragon());
  }, []);
  return (
    <div>
      {dragonDetail.map((dragonDetail) => (
        <div key={dragonDetail.id}>
          <h3>{dragonDetail.name}</h3>
          <p1>{dragonDetail.type}</p1>
        </div>
      ))}
    </div>
  );
};
export default DragonPage;
