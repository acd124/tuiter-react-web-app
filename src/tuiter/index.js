import React from 'react';
import { Routes, Route } from 'react-router';
import Nav from '../nav';
import NavigationSidebar from './navigation-sidebar';
import HomeScreen from './home-screen';
import ExploreScreen from './explore-screen';
import BookmarksScreen from './bookmarks-screen';
import ProfileScreen from './profile-screen';
import WhoToFollowList from './who-to-follow-list';

function Tuiter() {
  return (
    <div>
      <Nav />
      <div className="row">
        <div className="col-2 col-lg-1 col-xl-2">
          <NavigationSidebar />
        </div>
        <div className="col-10 col-lg-8 col-xl-7">
          <Routes>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/explore" element={<ExploreScreen />} />
            <Route path="/bookmarks" element={<BookmarksScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        </div>
        <div className="col-3 d-none d-lg-block">
          <WhoToFollowList />
        </div>
      </div>
    </div>
  );
}
export default Tuiter;
