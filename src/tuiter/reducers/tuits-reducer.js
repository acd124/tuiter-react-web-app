import { createSlice } from '@reduxjs/toolkit';
import tuits from './tuits.json';

const currentUser = {
  userName: 'NASA',
  handle: '@nasa',
  image: 'nasa.png',
};

const templateTuit = {
  ...currentUser,
  topic: 'Space',
  time: '1h',
  liked: false,
  replies: 0,
  retuits: 0,
  likes: 0,
};

const tuitsSlice = createSlice({
  name: 'tuits',
  initialState: { tuits: tuits },
  reducers: {
    deleteTuit(state, action) {
      const index = state.tuits.findIndex(tuit => tuit._id === action.payload);
      state.tuits.splice(index, 1);
    },
    createTuit(state, action) {
      state.tuits.unshift({
        ...action.payload,
        ...templateTuit,
        _id: new Date().getTime(),
      });
    },
    toggleLike(state, action) {
      const index = state.tuits.findIndex(tuit => tuit._id === action.payload);
      state.tuits[index].liked = !state.tuits[index].liked;
      if (state.tuits[index].liked) {
        state.tuits[index].likes++;
      } else {
        state.tuits[index].likes--;
      }
    },
  },
});

export const { createTuit, deleteTuit, toggleLike } = tuitsSlice.actions;
export default tuitsSlice.reducer;
