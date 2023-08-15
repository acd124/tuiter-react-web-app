import React, { useEffect } from 'react';
import TuitSummaryItem from './tuit-summary-item';
import { useDispatch, useSelector } from 'react-redux';
import { findTuitsThunk } from '../services/tuits-thunks';

const TuitSummaryList = () => {
  const { tuits } = useSelector(state => state.tuits);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk());
  }, []);

  return (
    <ul className="list-group">
      {tuits.map(tuit => (
        <TuitSummaryItem key={tuit._id} tuit={tuit} />
      ))}
    </ul>
  );
};
export default TuitSummaryList;
