import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaPhoneAlt, FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5";

const Register = () => {
  const router = useRouter();
  const [createUserLoading, setCreateUserLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const { name, phone, email, password, cPassword } = formData;
  const [confirmErrors, setConfirmErrors] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (password !== cPassword) {
      setConfirmErrors(true);
    } else {
      setConfirmErrors(false);
      setCreateUserLoading(true);

      const userData = {
        name,
        phone,
        email,
        password,
      };

      try {
        const response = await axios.post("/api/students/signup", userData);
        console.log("Signup success", response.data);

        toast.success("Signup successful! Redirecting to login...");
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      } catch (error: any) {
        console.log("Signup failed", error.message);
        toast.error(
          "Signup failed: " + error.response?.data?.message || error.message
        );
      } finally {
        setCreateUserLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-main">
      <div className="flex flex-col bg-main border-2 shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md">
        <div className="font-medium self-center text-xl sm:text-2xl uppercase text-white">
          REGISTER YOUR ACCOUNT
        </div>
        <div className="mt-10">
          <form onSubmit={handleSubmit} encType="application/json">
            {/* Name Input */}
            <div className="flex flex-col mb-6">
              <label
                htmlFor="name"
                className="mb-1 text-xs sm:text-sm tracking-wide text-white"
              >
                Name:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <FaUserAlt />
                </div>
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  id="name"
                  type="text"
                  name="name"
                  className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-orange-400"
                  placeholder="Name"
                />
              </div>
            </div>

            {/* Phone Input */}
            <div className="flex flex-col mb-6">
              <label
                htmlFor="phone"
                className="mb-1 text-xs sm:text-sm tracking-wide text-white"
              >
                Phone:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <FaPhoneAlt />
                </div>
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  id="phone"
                  type="text"
                  name="phone"
                  className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-orange-400"
                  placeholder="Phone"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="flex flex-col mb-6">
              <label
                htmlFor="email"
                className="mb-1 text-xs sm:text-sm tracking-wide text-white"
              >
                E-Mail Address:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  id="email"
                  type="email"
                  name="email"
                  className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-orange-400"
                  placeholder="E-Mail Address"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="flex flex-col mb-6">
              <label
                htmlFor="password"
                className="mb-1 text-xs sm:text-sm tracking-wide text-white"
              >
                Password:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                </div>
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  required
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-orange-400"
                  placeholder="Password"
                />
                <span
                  className="absolute right-3 cursor-pointer top-3 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IoEyeOff /> : <IoEye />}
                </span>
                {passwordError && (
                  <p className="text-red-500 text-xs italic">{passwordError}</p>
                )}
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="flex flex-col mb-6">
              <label
                htmlFor="c-password"
                className="mb-1 text-xs sm:text-sm tracking-wide text-white"
              >
                Confirm Password:
              </label>
              <div className="relative">
                <div className="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400">
                  <span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                </div>
                <input
                  onChange={(e) =>
                    setFormData({ ...formData, cPassword: e.target.value })
                  }
                  id="c-password"
                  type={showConfirmPassword ? "text" : "password"}
                  name="c-password"
                  className="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-orange-400"
                  placeholder="Confirm Password"
                />
                <span
                  className="absolute right-3 cursor-pointer top-3 text-gray-500"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <IoEyeOff /> : <IoEye />}
                </span>
                {confirmErrors && (
                  <p className="text-red-500 text-xs italic">
                    Passwords do not match.
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex w-full">
              <button
                type="submit"
                className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-purple-600 hover:bg-purple-700 rounded py-2 w-full transition duration-150 ease-in"
              >
                {createUserLoading ? (
                  <span className="loading loading-spinner loading-md text-white"></span>
                ) : (
                  <div className="flex">
                    <span className="mr-2 uppercase">Register</span>
                    <span>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                  </div>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Link to Login Page */}
        <div className="flex justify-center items-center mt-6">
          <Link
            href="/login"
            className="inline-flex items-center font-bold text-purple-500 hover:text-purple-700 text-md text-center"
          >
            <span>
              <FaSignInAlt className="text-xl" />
            </span>
            <span className="ml-2">Already have an account?</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
