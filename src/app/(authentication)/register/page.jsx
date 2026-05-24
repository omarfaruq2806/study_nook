"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { authClient } from "../../../lib/auth-client";
import { useState } from "react";
import toast from "react-hot-toast";

const Register = () => {
  const router = useRouter();

  const [passwordError, setPasswordError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;

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
    if (data) {
      toast.success("Account created successfully");
      router.push("/login");
    }
    if (error) {
      toast.error(error.message);
    }
  };

  const socialsignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    toast.success("Signed in successfully");
  };

  return (
    <div className=" min-h-screen flex items-center justify-center ">
      {/* <div></div> */}

      <form
        onSubmit={handleSignUp}
        className="border p-6 rounded-2xl border-gray-200 shadow-md md:w-md  mx-auto my-10"
      >
        <h1 className="text-2xl font-bold mb-4 text-center text-secondary">
          Sign Up
        </h1>
        <div className="mb-4">
          <label className="block text-primary font-semibold mb-2 ">Name</label>
          <input
            type="text"
            name="name"
            required
            className=" w-full py-2 px-3 border border-secondary/30 rounded-full focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-primary font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full py-2 px-3 border border-secondary/30 rounded-full focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition "
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-primary font-semibold mb-2">
            Image URL
          </label>
          <input
            type="text"
            name="photo"
            required
            className="w-full py-2 px-3 border border-secondary/30 rounded-full focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition"
            placeholder="Enter your image URL"
          />
        </div>
        <div className="mb-4">
          <label className="block text-primary font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            className="w-full py-2 px-3 border border-secondary/30 rounded-full focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition"
            placeholder="Enter your password"
          />
        </div>
        {passwordError && (
          <p className="text-red-500 text-xs pb-2">{passwordError}</p>
        )}

        <button
          type="submit"
          className="font-bold mt-4 py-2 px-4 rounded-full border border-secondary text-secondary w-full "
        >
          Register Now
        </button>

        <p className=" mt-4 flex justify-center gap-2 border-b border-secondary pb-2">
          Don't have an account ?
          <Link href={"/login"}>
            <span className="text-secondary font-semibold hover:underline">
              Log In
            </span>
          </Link>
        </p>
        <button
          onClick={socialsignIn}
          className="font-bold mt-4 py-2 px-4 rounded-full border border-secondary text-secondary w-full flex justify-center gap-2 items-center"
        >
          <FaGoogle />
          Sign Up With Google
        </button>
      </form>
    </div>
  );
};

export default Register;
