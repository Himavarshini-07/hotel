import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleSignup = () => {
    localStorage.setItem(
      "registeredUser",
      JSON.stringify(formData)
    );

    alert("Registration Successful");

    navigate("/");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow-lg w-96">

        <h1 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Name"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) =>
            setFormData({
              ...formData,
              phone: e.target.value,
            })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) =>
            setFormData({
              ...formData,
              password: e.target.value,
            })
          }
        />

        <button
          onClick={handleSignup}
          className="w-full bg-green-600 text-white p-3 rounded"
        >
          Register
        </button>

        <p className="mt-4 text-center">
          Already have an account?
          <Link
            to="/"
            className="text-blue-600 ml-1"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Signup;