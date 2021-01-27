import React from 'react';
import 'firebase/firestore';
import 'firebase/auth';

import {auth} from '../firebase';


function SignOut() {
    return auth.currentUser && (
        <div>
            <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    )
}

export default SignOut;