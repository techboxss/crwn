import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { auth, signInWithGooglePopup, createUserDocument, signInWithGoogleRedirect } from "../../utils/firebase";
import { Button } from 'primereact/button'; 
import Signup from "../../components/sign-up.form/Sign-up";
export default function SignInComponent() {
  

  useEffect(() => {
    const fetchRedirectResult = async () => {
      const response = await getRedirectResult(auth);
      console.log(response);
    };

    fetchRedirectResult(); 
  }, []);

  const loggoogle = async () => {
    const response = await signInWithGooglePopup();
    const userAuth = response.user;
    createUserDocument(userAuth);
  };

  const logGoogleRedirect = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log({ user });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-semibold text-blue-500 mb-6">Sign Up Page</h1>
<Signup /> <br />
    
      <Button 
        label="Sign In with Google" 
        icon="pi pi-google" 
        className="p-button-rounded p-button-success mb-4" 
        onClick={loggoogle} 
      /> <br /> <br />
      <Button 
        label="Sign In with Redirect" 
        icon="pi pi-sign-in" 
        className="p-button-rounded p-button-info" 
        onClick={logGoogleRedirect} 
      />
    </div>
  );
}
