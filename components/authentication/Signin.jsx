import {  signInWithEmailAndPassword } from "firebase/auth";
import {  auth } from "../../Config/firebase";
import { useState } from "react";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";


const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
navigate
  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response.user, "response");
      localStorage.setItem("product_admin", JSON.stringify(response?.user));
      navigate("/");
      notification.success({ description: "Successfully Login" });
    } catch (error) {
      let errorMsg = "Something went wrong!";

      if (error.code === "auth/invalid-credential") {
        errorMsg = "Wrong Credentials!";
      }
      notification.error({ description: errorMsg });
    }
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
          <h1 className="text-2xl font-semibold text-center mb-6">
            Welcome Back
          </h1>

          <form onSubmit={handleSignIn}>
            <div className="mb-4">
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>

            <div className="mb-2">
              <label className="block text-sm text-gray-600 mb-1">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-3 bg-black text-white py-2 rounded-lg transition cursor-pointer"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
