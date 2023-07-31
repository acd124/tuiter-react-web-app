import React from 'react';
import { Link, useLocation } from 'react-router-dom';
// import from react icons: house hashtag bell envelope bookmark list user ellipsis
import {
  FaHouseUser,
  FaHashtag,
  FaBell,
  FaEnvelope,
  FaBookmark,
  FaList,
  FaUser,
  FaEllipsisH
} from 'react-icons/fa';

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [_ignore, _tuiter, active] = pathname.split('/');
  const links = [
    { name: 'home', icon: FaHouseUser },
    { name: 'explore', icon: FaHashtag },
    { name: 'notifications', icon: FaBell },
    { name: 'messages', icon: FaEnvelope },
    { name: 'bookmarks', icon: FaBookmark },
    { name: 'lists', icon: FaList },
    { name: 'profile', icon: FaUser },
    { name: 'more', icon: FaEllipsisH }
  ];

  return (
    <div className="list-group">
      {links.map(link => (
        <Link
          to={`/tuiter/${link.name}`}
          className={`list-group-item text-capitalize ${active === link.name ? 'active' : ''}`}
        >
          <link.icon className="me-2" />
          <span className="d-none d-xl-inline">{link.name}</span>
        </Link>
      ))}
    </div>
  );
};
export default NavigationSidebar;
