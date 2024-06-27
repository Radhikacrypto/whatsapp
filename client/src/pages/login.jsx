import React from "react";
import Image from 'next/image';
import {FcGoogle} from 'react-icons/fc'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {firebaseAuth} from '@/utils/FirebaseConfig'

function login() {

const handleLogin= async ()=>{
  const provider = new GoogleAuthProvider();
  const {user:{displayName: name, email, photoURL: profileImage}} = await signInWithPopup(firebaseAuth, provider)
  try{
    if(email){

    } 
  } catch(err){
    console.log(err);
  }
}

  return (
  
  <div className="flex  flex-col justify-center items-center bg-panel-header-background h-screen w-screen ">
    <div className="flex items-center justify-center gap-2 text-white">
      <Image src="/whatsapp.gif" alt="whatsapp" height={300} width={300}/>
      <span className="text-3xl">Whatsapp</span>

    </div>
    <button className="flex  items-center gap-7 justify-center p-5  bg-search-input-container-background rounded-lg" 
    onClick={handleLogin}
    >
      <FcGoogle className="text-4xl"/>
      <span className="text-white text-2xl"> Login with Google</span>
    </button>
    </div>
    )
}

export default login;
