import React, { useContext, useEffect, useState } from 'react'
import { getAuth, signOut, RecaptchaVerifier, signInWithPhoneNumber, onAuthStateChanged, onIdTokenChanged } from 'firebase/auth';
import { auth } from './firebase';
import { UserContext } from '../myapi/MainMenu';

export default function OTPLogin() {
  const [phone, setPhone] = useState(918498000172)
  const [otp, setOTP] = useState('')
  const [phoneDiv, showPhone] = useState(true)
  const [captchaDiv, showCaptcha] = useState(true)
  const [otpDiv, showOTP] = useState(false)
  const { user, setUser } = useContext(UserContext);



  function sendsms() {
    const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});
    window.recaptchaVerifier = recaptchaVerifier
    const phoneNumber = '+' + phone;
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        console.log('sms sent')
        showCaptcha(false)
        showOTP(true)
        showPhone(false)
        window.confirmationResult = confirmationResult;
      }).catch((error) => {
        console.log(error);
      });
  }
  function handleOTP() {
    const code = otp
    const confirmationResult = window.confirmationResult
    confirmationResult.confirm(code)
      .then((result) => {
        setUser(result.user)
        console.log('sign in success')
        setPhone('')
        setOTP('')
      }).catch((error) => {
        console.log(error);
      });
  }
  function handleLogout() {
    auth.signOut().then(function () {
      setUser(null)
    }, function (error) {
      console.log(error);
    });
  }


  return (
    <>
      <p>User: {JSON.stringify(user)}
      </p>

      {user ?
        <>
          <p>User is logged in: {user.phoneNumber}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
        :
        <>
          <p>User is not logged in</p>

          {phoneDiv && <div>
            <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <button onClick={sendsms}>Send SMS</button>
          </div>}

          {captchaDiv && <div id='recaptcha-container'></div>}

          {otpDiv && <div>
            <input type='text' value={otp} onChange={(e) => setOTP(e.target.value)} />
            <button onClick={handleOTP}>SUbmit OTP</button>
          </div>}
        </>
      }
    </>
  )
}
