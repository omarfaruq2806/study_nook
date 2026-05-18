"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";

const LogIn = () => {
  const router = useRouter();

  const handleLogIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ email, password });

    const { data, error } = await authClient.signIn.email({
      email: email,
      password: password,
    });
    console.log(data, error);

    if (data) {
      alert("Logged in successfully");
      router.push("/");
    }
    if (error) {
      alert(error.message);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <form
        onSubmit={handleLogIn}
        className="border p-4 rounded-2xl border-gray-200 shadow-md md:w-md  mx-auto my-10 "
      >
        <h1 className="text-2xl font-bold mb-2 text-center">Welcome Back 👋</h1>
        <p className="text-sm text-gray-500 text-center mb-4">
          Please login to continue
        </p>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            className="shadow  border border-gray-300  w-full py-2 px-3 text-gray-700 rounded-full  "
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Password</label>
          <input
            type="password"
            name="password"
            className="shadow appearance-none border border-gray-300 rounded-full w-full py-2 px-3 text-gray-700 leading-tight "
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="font-bold py-2 px-4 rounded-full border border-purple-600 text-purple-500 w-full "
        >
          Log In
        </button>
        <p className="text-center mt-4 flex justify-center gap-2 border-b border-gray-200 pb-2 rounded-full">
          Don't have an account ?
          <Link href={"/register"}>
            <span className="text-purple-500">Sign Up</span>
          </Link>
        </p>
        <button
          // onClick={socialsignIn}
          className="font-bold mt-4 py-2 px-4 border border-purple-600 text-purple-500 w-full flex justify-center gap-2 items-center rounded-full"
        >
          <FaGoogle />
          Log In With Google
        </button>
      </form>
    </div>
  );
};

export default LogIn;
