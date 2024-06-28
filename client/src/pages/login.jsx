// components/login.jsx
import React from 'react';
import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from '@/utils/FirebaseConfig';
import { CHECK_USER_ROUTE } from "@/utils/ApiRoutes";
import { useRouter } from "next/router";
import axios from 'axios';

function Login() {
  const router = useRouter();

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(firebaseAuth, provider);
      const { user: { email } } = result;

      if (email) {
        const { data } = await axios.post(CHECK_USER_ROUTE, { email });
        console.log("API response:", data);

        if (!data.status) {
          router.push("/onboarding");
        } else {
          console.log('User exists:', data.data);
        }
      }
    } catch (err) {
      console.error("Error during login:", err);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-panel-header-background h-screen w-screen">
      <div className="flex items-center justify-center gap-2 text-white">
        <Image src="/whatsapp.gif" alt="whatsapp" height={300} width={300} />
        <span className="text-3xl">Whatsapp</span>
      </div>
      <button
        className="flex items-center gap-7 justify-center p-5 bg-search-input-container-background rounded-lg"
        onClick={handleLogin}
      >
        <FcGoogle className="text-4xl" />
        <span className="text-white text-2xl">Login with Google</span>
      </button>
    </div>
  );
}

export default Login;
