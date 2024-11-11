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

export default function SingUp() {
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="bg-blue-50 flex items-center justify-center py-12 px-2 ">
      <Helmet>
        <title>Sign Up | Gadget Pookie</title>
        <meta name="description" content="Sign Up" />
      </Helmet>
      <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 w-96">
        <h2 className="text-3xl font-semibold mb-6 text-center text-[#cb8bff]">
          Sign Up
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
              className="input input-bordered input-secondary border-[#cb8bff] w-full max-w-xs"
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
              className="input input-bordered input-secondary border-[#cb8bff] w-full max-w-xs"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-500 text-base font-medium mb-2"
              for="password"
            >
              Confirm Password
            </label>

            <input
              type="Password"
              placeholder="Confirm Password"
              className="input input-bordered input-secondary border-[#cb8bff] w-full max-w-xs"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="btn  w-full bg-[#b253ff] hover:bg-[#ac46ff] text-white"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <button
            onClick={handleSignIn}
            className="flex items-center justify-center mt-4 w-full px-6 py-3 bg-gray-100 hover:bg-gray-200 text-black font-semibold rounded-md shadow-md transition duration-300 ease-in-out"
          >
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google icon"
              className="w-6 h-6 mr-3"
            />
            Sign in with Google
          </button>
        </div>
        <p class="mt-4 text-center text-gray-700">
          You already have account?
          <Link to="/login" class="text-blue-500 hover:underline ml-2">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
