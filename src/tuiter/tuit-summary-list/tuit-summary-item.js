import React, { useEffect } from 'react';
import { timeDiff } from '../tuit-list/tuit-item';
const TuitSummaryItem = ({ tuit }) => {
  const [time, setTime] = React.useState(timeDiff(new Date(tuit.time)));
  useEffect(() => {
    const interval = setInterval(() => setTime(timeDiff(new Date(tuit.time))), 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-10">
          <div>
            {tuit.userName} . {time}
          </div>
          <div className="fw-bolder">{tuit.topic}</div>
          <div>{tuit.title}</div>
        </div>
        <div className="col-2">
          <img width={70} className="float-end rounded-3" src={`/images/${tuit.image}`} alt={''} />
        </div>
      </div>
    </li>
  );
};
export default TuitSummaryItem;
