import { GoogleAuthProvider } from "firebase/auth";

import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { signInWithPopup } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAm2j45J5u9hTFwOvx6pminAJRW-9Z-8cc",
  authDomain: "gadgetpookie.firebaseapp.com",
  projectId: "gadgetpookie",
  storageBucket: "gadgetpookie.firebasestorage.app",
  messagingSenderId: "493758732439",
  appId: "1:493758732439:web:b790d440a55097552b31d2",
  measurementId: "G-FH6QV98X34",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export default function Login() {
  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-blue-50 flex items-center justify-center px-2 py-24 ">
      <Helmet>
        <title>Login | Gadget Pookie</title>
        <meta name="description" content="Login" />
      </Helmet>
      <div className=" bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 max-w[26rem] md:w-96">
        <h2 className="text-3xl font-semibold mb-6 text-center text-[#68cdff]">
          Login
        </h2>
        <div>
          <div className="mb-4">
            <label
              className="block text-gray-500 text-base font-medium mb-2"
              for="email"
            >
              Email
            </label>

            <input
              type="Email"
              placeholder="Enter Your Email"
              className="input input-bordered input-info border-[#68cdff] w-full max-w-xs"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-500 text-base font-medium mb-2"
              for="password"
            >
              Password
            </label>

            <input
              type="Password"
              placeholder="Enter Password"
              className="input input-bordered input-info border-green-500 w-full max-w-xs"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="btn  w-full bg-[#43c0ff] hover:bg-[#43c0ff] text-white"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </div>
        <button
          onClick={handleSignInWithGoogle}
          className="flex items-center justify-center mt-4 w-full px-6 py-3 bg-gray-100 hover:bg-gray-200 text-black font-semibold rounded-md shadow-md transition duration-300 ease-in-out"
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google icon"
            className="w-6 h-6 mr-3"
          />
          Sign in with Google
        </button>
        <p class="mt-4 text-center text-sm text-gray-700">
          Don't have an account?
          <Link to="/singUp" class="text-blue-500 hover:underline ml-2">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}
