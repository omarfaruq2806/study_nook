"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";


const LogIn = () => {
  const router = useRouter();

  const handleLogIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email: email,
      password: password,
    });

    if (data) {
      toast.success("Logged in successfully");
      router.push("/");
    }
    if (error) {
      toast.error(error.message);
    }
  };

  const socialsignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form
        onSubmit={handleLogIn}
        className="border border-secondary/20 bg-white  p-6 rounded-2xl shadow-md md:w-md mx-auto my-10"
      >
        <h1 className="text-2xl font-bold mb-2 text-center text-primary">
          Welcome Back 👋
        </h1>

        <p className="text-sm text-gray-500 text-center mb-6">
          Please login to continue
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-primary font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            className="w-full py-2 px-3 border border-secondary/30 rounded-full focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-primary font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="w-full py-2 px-3 border border-secondary/30 rounded-full focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition"
            placeholder="Enter your password"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="font-semibold py-2 px-4 rounded-full w-full bg-secondary text-white hover:bg-white hover:text-secondary hover:border-secondary border  transition"
        >
          Log In
        </button>

        {/* Link */}
        <p className="text-center mt-4 flex justify-center gap-2 border-b border-secondary/20 pb-2">
          Don't have an account ?
          <Link href={"/register"}>
            <span className="text-secondary font-semibold hover:underline">
              Sign Up
            </span>
          </Link>
        </p>

        {/* Google Button */}
        <button
          onClick={socialsignIn}
          className="mt-4 py-2 px-4 border border-secondary text-secondary w-full flex justify-center gap-2 items-center rounded-full hover:bg-secondary hover:text-white transition"
        >
          <FaGoogle />
          Log In With Google
        </button>
      </form>
    </div>
  );
};

export default LogIn;
