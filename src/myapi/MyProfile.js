import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import { auth } from '../fb/firebase';
import { getAuth, signOut, RecaptchaVerifier, signInWithPhoneNumber, onAuthStateChanged, onIdTokenChanged } from 'firebase/auth';
import { Button } from 'semantic-ui-react';
import { UserContext } from './MainMenu';
import OTPLogin from '../fb/OTPLogin';


export default function MyProfile() {
  const { userid } = useParams()
  const { user, setUser } = useContext(UserContext);

  function handleLogout() {
    auth.signOut().then(function () {
      setUser(null)
    }, function (error) {
      console.log(error);
    });
  }

  return (
    <div>
      {user ?
        <Button color='red' onClick={handleLogout}>Logout</Button>
        : <OTPLogin />
      }
    </div>
  )
}
