import React from 'react';
import { FaRegComment, FaRetweet, FaRegHeart, FaHeart } from 'react-icons/fa';
import { BsUpload } from 'react-icons/bs';
import { AiFillDislike, AiOutlineDislike } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { updateTuitThunk } from '../services/tuits-thunks';

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
  const toggleLikeHandler = () => {
    dispatch(
      updateTuitThunk({ ...tuit, liked: !tuit.liked, likes: tuit.likes + (tuit.liked ? -1 : 1) })
    );
  };
  const toggleDislikeHandler = () => {
    dispatch(
      updateTuitThunk({
        ...tuit,
        disliked: !tuit.disliked,
        dislikes: tuit.dislikes + (tuit.disliked ? -1 : 1),
      })
    );
  };
  return (
    <div className="row">
      <div className="col-2">
        <FaRegComment /> {tuit.comments}
      </div>
      <div className="col-2">
        <FaRetweet /> {tuit.retuits}
      </div>
      <div className="col-2" onClick={toggleLikeHandler}>
        {tuit.liked ? <FaHeart color="red" /> : <FaRegHeart />} {tuit.likes}
      </div>
      <div className="col-2" onClick={toggleDislikeHandler}>
        {tuit.disliked ? <AiFillDislike /> : <AiOutlineDislike />} {tuit.dislikes}
      </div>
      <div className="col-2">
        <BsUpload />
      </div>
    </div>
  );
};

export default TuitStats;
