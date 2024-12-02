import React, { useState } from "react";
import { registerUser, loginUser } from "../constants/Api_service";
import { useNavigate } from "react-router-dom";

const LoginRegister = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
      phone: "",
    });
    setError("");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (isRegistering) {
      // Registration Logic
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      const response = await registerUser(formData);
      if (response == 200) {
        alert("Registration successful! Please log in.");
        toggleForm();
      } else {
        setError(response.message || "Registration failed");
      }
    } else {
      // Login Logic
      const response = await loginUser({
        email: formData.email,
        password: formData.password,
      });

      if (response == 200) {
        // Store the token in localStorage
        localStorage.setItem("token", response.token);
        localStorage.setItem("refreshToken", response.refreshToken);
        alert("Login successful");
        navigate("/home");
      } else {
        setError(response.message || "Login failed");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF3E0]">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-[#4CAF50] mb-6">
          {isRegistering ? "Register" : "Login"}
        </h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form className="space-y-4" onSubmit={handleSubmit}>
          {isRegistering && (
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
              required
            />
          </div>

          {isRegistering && (
            <>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#4CAF50]"
                  required
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="w-full bg-[#4CAF50] text-white font-medium py-2 px-4 rounded hover:bg-[#388E3C]"
          >
            {isRegistering ? "Register" : "Login"}
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            {isRegistering ? "Already have an account?" : "New here?"}{" "}
            <button
              className="text-[#4CAF50] font-medium hover:underline"
              onClick={toggleForm}
            >
              {isRegistering ? "Login" : "Register"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
