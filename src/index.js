import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//ReactDOM.createRoot(document.getElementById('root')).render(<Profile />);

/* <FriendListItem 
      avatar={friends.avatar}
      name={friends.name}
      isOnlime={friends.isOnlime}
      /> */
