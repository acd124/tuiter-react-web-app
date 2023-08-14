import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import TuitStats from './tuit-stats';
import { deleteTuitThunk } from '../services/tuits-thunks';
import { FaCheckCircle } from 'react-icons/fa';
import { HiOutlineX } from 'react-icons/hi';

/**
 * find how much time has passed since the given time
 * @param {Date} time
 * @returns {string} time difference in words
 */
const timeDiff = time => {
  const timeDiffSecs = (Date.now() - time.getTime()) / 1000;
  if (timeDiffSecs < 60) {
    return `${Math.round(timeDiffSecs)}s`;
  } else if (timeDiffSecs < 60 * 60) {
    return `${Math.round(timeDiffSecs / 60)}m`;
  } else if (timeDiffSecs < 60 * 60 * 24) {
    return `${Math.round(timeDiffSecs / 60 / 60)}h`;
  } else if (timeDiffSecs < 60 * 60 * 24 * 30) {
    return `${Math.round(timeDiffSecs / 60 / 60 / 24)}d`;
  } else if (timeDiffSecs < 60 * 60 * 24 * 365) {
    return `${Math.round(timeDiffSecs / 60 / 60 / 24 / 30)}mo`;
  } else {
    return `${Math.round(timeDiffSecs / 60 / 60 / 24 / 365)}y`;
  }
};

const TuitSummaryItem = ({ tuit }) => {
  const dispatch = useDispatch();
  const [time, setTime] = React.useState(timeDiff(new Date(tuit.time)));
  const deleteTuitHandler = id => {
    dispatch(deleteTuitThunk(id));
  };

  useEffect(() => {
    const interval = setInterval(() => setTime(timeDiff(new Date(tuit.time))), 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

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
            &middot; {time}
          </div>
          <div>{tuit.tuit}</div>
          <TuitStats tuit={tuit} />
        </div>
      </div>
    </li>
  );
};

export default TuitSummaryItem;
