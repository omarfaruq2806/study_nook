"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { authClient } from "../../../lib/auth-client";
import { useState } from "react";

const Register = () => {
  const router = useRouter();

  const [passwordError, setPasswordError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    // console.log({name,email, photo,password});

    const passwordValidation = /(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (!passwordValidation.test(password)) {
      setPasswordError(
        "Password must be at least 6 characters long and contain at least one uppercase letter and one lowercase letter.",
      );
      return;
    }

    const { data, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
    });
    console.log(data, error);
    if (data) {
      alert("Account created successfully");
      router.push("/login");
    }
    if (error) {
      alert(error.message);
    }
  };

  return (
    <div className=" max-w-6xl mx-auto">
      <form
        onSubmit={handleSignUp}
        className="border p-4 rounded-2xl border-gray-200 shadow-md md:w-md  mx-auto my-10"
      >
        <h1 className="text-2xl font-bold mb-4 text-center ">Sign Up</h1>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2 ">Name</label>
          <input
            type="text"
            name="name"
            required
            className=" shadow  border border-gray-300 rounded-full w-full py-2 px-3 text-gray-700   "
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            className="shadow  border border-gray-300 rounded-full w-full py-2 px-3 text-gray-700   "
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Image URL
          </label>
          <input
            type="text"
            name="photo"
            required
            className="shadow appearance-none border border-gray-300 rounded-full w-full py-2 px-3 text-gray-700 leading-tight "
            placeholder="Enter your image URL"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-1">Password</label>
          <input
            type="password"
            name="password"
            required
            className="shadow appearance-none border border-gray-300 rounded-full w-full py-2 px-3 text-gray-700 leading-tight "
            placeholder="Enter your password"
          />
        </div>
        {passwordError && (
          <p className="text-red-500 text-xs pb-2">{passwordError}</p>
        )}

        <button
          type="submit"
          className="font-bold py-2 px-4 rounded-full border border-purple-600 text-purple-500 w-full "
        >
          Register Now
        </button>

        <p className=" mt-4 flex justify-center gap-2 border-b border-gray-200 pb-2">
          Don't have an account ?
          <Link href={"/login"}>
            <span className="text-purple-500">Log In</span>
          </Link>
        </p>
        <button
          //   onClick={socialsignIn}
          className="font-bold mt-4 py-2 px-4 rounded-full border border-purple-600 text-purple-500 w-full flex justify-center gap-2 items-center"
        >
          <FaGoogle />
          Sign Up With Google
        </button>
      </form>
    </div>
  );
};

export default Register;
