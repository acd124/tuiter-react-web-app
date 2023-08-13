import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  FaHome,
  FaHashtag,
  FaBell,
  FaEnvelope,
  FaBookmark,
  FaList,
  FaUser,
  FaEllipsisH,
} from 'react-icons/fa';

const NavigationSidebar = () => {
  const { currentUser } = useSelector(state => state.user);
  const { pathname } = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [_ignore, _tuiter, active] = pathname.split('/');
  const links = [
    { name: 'home', icon: FaHome },
    { name: 'explore', icon: FaHashtag },
    { name: 'notifications', icon: FaBell },
    { name: 'messages', icon: FaEnvelope },
    { name: 'bookmarks', icon: FaBookmark },
    { name: 'lists', icon: FaList },
    { name: 'profile', icon: FaUser, requiresUser: true },
    { name: 'login', icon: FaUser, requiresAnonymous: true },
    { name: 'register', icon: FaUser, requiresAnonymous: true },
    { name: 'more', icon: FaEllipsisH },
  ];

  return (
    <div className="list-group">
      {links
        .filter(
          link => (currentUser && !link.requiresAnonymous) || (!currentUser && !link.requiresUser)
        )
        .map(link => (
          <Link
            key={`link-${link.name}`}
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
