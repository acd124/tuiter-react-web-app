import React, { useState } from 'react';
import { createTuitThunk } from './services/tuits-thunks';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlinePicture } from 'react-icons/ai';
import { MdFormatListBulleted } from 'react-icons/md';
import { BsEmojiSmile, BsFiletypeGif } from 'react-icons/bs';
import { TbCalendarStats } from 'react-icons/tb';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BiBold, BiItalic } from 'react-icons/bi';

const defaultUser = {
  username: 'NASA',
  handle: '@nasa',
  image: 'nasa.png',
};

const templateTuit = {
  topic: 'Space',
};

const WhatsHappening = () => {
  const { currentUser } = useSelector(state => state.user);
  let [whatsHappening, setWhatsHappening] = useState('');
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    const newTuit = {
      ...templateTuit,
      ...defaultUser,
      ...(currentUser && {
        username: currentUser.username,
        handle: `@${currentUser.username.toLowerCase().replaceAll(' ', '')}`,
      }),
      title: whatsHappening.split(' ').slice(0, 5).join(' '),
      tuit: whatsHappening,
    };
    dispatch(createTuitThunk(newTuit));
    setWhatsHappening('');
  };
  return (
    <div className="row">
      <div className="col-auto">
        <img src="/images/nasa.png" width={60} alt="your pfp" />
      </div>
      <div className="col-10">
        <textarea
          value={whatsHappening}
          placeholder="What's happening?"
          className="form-control border-0"
          onChange={event => setWhatsHappening(event.target.value)}
        ></textarea>
        <div>
          <button
            className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
            onClick={tuitClickHandler}
          >
            Tuit
          </button>
          <div className="text-primary fs-2">
            <AiOutlinePicture className="me-3" />
            <BsFiletypeGif className="me-3" />
            <MdFormatListBulleted className="me-3" />
            <BsEmojiSmile className="me-3" />
            <TbCalendarStats className="me-3" />
            <HiOutlineLocationMarker className="me-3" />
            <BiBold className="me-3" />
            <BiItalic className="me-3" />
          </div>
        </div>
      </div>
      <div className="col-12">
        <hr />
      </div>
    </div>
  );
};
export default WhatsHappening;
