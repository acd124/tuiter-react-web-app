import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import Nav from '../nav';
import NavigationSidebar from './navigation-sidebar';
import HomeScreen from './home-screen';
import ExploreScreen from './explore-screen';
import BookmarksScreen from './bookmarks-screen';
import WhoToFollowList from './who-to-follow-list';

import ProfileScreen from './user/profile-screen';
import LoginScreen from './user/login-screen';
import RegisterScreen from './user/register-screen';

import whoReducer from './reducers/who-reducer';
import tuitsReducer from './reducers/tuits-reducer';
import authReducer from './reducers/auth-reducer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import AuthContext from './auth-context';
const store = configureStore({
  reducer: { who: whoReducer, tuits: tuitsReducer, user: authReducer },
});

function Tuiter() {
  return (
    <Provider store={store}>
      <AuthContext>
        <div>
          <Nav />
          <div className="row">
            <div className="col-2 col-lg-1 col-xl-2">
              <NavigationSidebar />
            </div>
            <div className="col-10 col-lg-8 col-xl-7">
              <Routes>
                <Route path="/" element={<Navigate to={'home'} />} />
                <Route path="/home" element={<HomeScreen />} />
                <Route path="/explore" element={<ExploreScreen />} />
                <Route path="/bookmarks" element={<BookmarksScreen />} />
                <Route path="/profile" element={<ProfileScreen />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/register" element={<RegisterScreen />} />
              </Routes>
            </div>
            <div className="col-3 d-none d-lg-block">
              <WhoToFollowList />
            </div>
          </div>
        </div>
      </AuthContext>
    </Provider>
  );
}
export default Tuiter;
