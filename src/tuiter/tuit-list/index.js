import React from 'react';
import TuitItem from './tuit-item';
import { useSelector } from 'react-redux';

const TuitList = () => {
  const { tuits, loading } = useSelector(state => state.tuits);

  return (
    <ul className="list-group">
      {loading && <li className="list-group-item">Loading...</li>}
      {tuits.map(tuit => (
        <TuitItem key={tuit._id} tuit={tuit} />
      ))}
    </ul>
  );
};
export default TuitList;
