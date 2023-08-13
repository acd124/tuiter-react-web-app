import React from 'react';
import TuitList from '../tuit-list';
import WhatsHappening from '../whats-happening';

function HomeScreen() {
  return (
    <div>
      <h1>Home</h1>
      <WhatsHappening />
      <TuitList />
    </div>
  );
}
export default HomeScreen;
