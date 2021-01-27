import React from 'react';
import 'firebase/firestore';
import 'firebase/auth';

import {signInWithGoogle} from '../firebase';

function SignIn() {


    // const signInWithGoogle = () => {
    //     const provider = new firebase.auth.GoogleAuthProvider();
    //     auth.signInWithPopup(provider);
    // }

    return (
        <div>
            <button className="sign-in" onClick={() => {signInWithGoogle()}}>Sign In With Google</button>
        </div>
    )
}

export default SignIn;