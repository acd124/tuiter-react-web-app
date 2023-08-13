import React from 'react';
import { useDispatch } from 'react-redux';
import TuitStats from './tuit-stats';
import { deleteTuit } from '../reducers/tuits-reducer';
import { FaCheckCircle } from 'react-icons/fa';
import { HiOutlineX } from 'react-icons/hi';

const TuitSummaryItem = ({ tuit }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = id => {
    dispatch(deleteTuit(id));
  };

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-1">
          <img width={48} className="rounded-circle" src={`/images/${tuit.image}`} alt={''} />
        </div>
        <div className="col-11">
          <div>
            <HiOutlineX
              className="bi bi-x-lg float-end"
              onClick={() => deleteTuitHandler(tuit._id)}
            />
            <span className="fw-bold">{tuit.userName}</span>
            <FaCheckCircle color="#09d" className="mx-1" />
            {tuit.handle + ' '}
            &middot; {tuit.time}
          </div>
          <div>{tuit.tuit}</div>
          <TuitStats tuit={tuit} />
        </div>
      </div>
    </li>
  );
};
export default TuitSummaryItem;
