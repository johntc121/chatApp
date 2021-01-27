import React from 'react';
import './App.css';

import 'firebase/firestore';
import 'firebase/auth';
import {auth} from './firebase';

import {useAuthState} from 'react-firebase-hooks/auth';

import SignIn from './Components/SignIn';
import SignOut from './Components/SignOut';
import ChatRoom from './Components/ChatRoom';

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

export default App;