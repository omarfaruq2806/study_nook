import Link from "next/link";
import React from "react";
import { FaHome } from "react-icons/fa";

const notfound = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-[var(--color-accent)] px-4">
        <div className="text-center space-y-6">
          {/* Big 404 */}
          <h1 className="text-7xl font-bold text-[var(--color-primary)]">
            404
          </h1>

          {/* Message */}
          <h2 className="text-2xl font-semibold text-secondary">
            Page Not Found
          </h2>

          <p className="text-gray-600 max-w-md mx-auto">
            Oops! The page you are looking for doesn’t exist or has been moved.
          </p>

          {/* Button */}
          <Link href="/">
            <button className="mt-4 px-6 py-3 bg-secondary text-white rounded-full flex items-center gap-2 mx-auto hover:bg-[var(--color-primary)] transition">
              <FaHome />
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default notfound;
