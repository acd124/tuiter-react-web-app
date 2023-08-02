import React from 'react';
import { FaRegComment, FaRetweet, FaRegHeart, FaHeart } from 'react-icons/fa';
import { BsUpload } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { toggleLike } from '../reducers/tuits-reducer';

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
  const toggleLikeHandler = () => {
    dispatch(toggleLike(tuit._id));
  };
  return (
    <div className="row">
      <div className="col-3">
        <FaRegComment /> {tuit.comments}
      </div>
      <div className="col-3">
        <FaRetweet /> {tuit.retuits}
      </div>
      <div className="col-3" onClick={toggleLikeHandler}>
        {tuit.liked ? <FaHeart color="red" /> : <FaRegHeart />} {tuit.likes}
      </div>
      <div className="col-3">
        <BsUpload />
      </div>
    </div>
  );
};

export default TuitStats;
