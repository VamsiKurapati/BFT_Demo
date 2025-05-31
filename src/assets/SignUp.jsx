import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const backgroundImages = [
      "/SignUp_1.jpg",
      "/SignUp_2.jpg",
      "/SignUp_3.jpg",
      "/SignUp_4.jpg",
    ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('https://bft-backend.vercel.app/api/auth/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          username: formData.username,
          password: formData.password,
        }),
      });

      if (response.ok) {
        alert("Registration Successful!");
        setTimeout(() => navigate('/login'), 2000);
      } else {
        const resData = await response.json();
        setError(resData.message || "Signup failed. Please try again.");
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Registration error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="max-w-screen min-h-screen bg-white p-4 flex items-center justify-center"
    >
      <div
        className='w-full h-full relative left-0 bg-cover bg-center transition-all duration-500 ease-in-out rounded-xl'
        style={{ backgroundImage: `url(${backgroundImages[currentIndex]})` }}
      >
      <div className="absolute inset-0 bg-black opacity-30 rounded-xl"></div>

      <div className="relative w-[95%] max-w-md ml-1 sm:ml-20 my-14 bg-[#FFFFFF] px-8 py-10 rounded-xl shadow-lg z-10">
        <img src="/Logo_1.png" alt="Logo" className="w-[180px] h-[40px] mb-16" />
        <h1 className="font-poppins font-extrabold text-[32px] md:text-[40px] text-black">
          Sign Up ,
        </h1>
        <p className="font-poppins font-light text-[16px] md:text-[20px] text-black mb-4">
          for Secrets, Surprises & Spontaneity
        </p>

        <form className="space-y-3" onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full h-[50px] px-4 py-2 border border-2 border-[#003566] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003566]"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full h-[50px] px-4 py-2 border border-2 border-[#003566] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003566]"
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            className="w-full h-[50px] px-4 py-2 border border-2 border-[#003566] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003566]"
          />
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full h-[50px] px-4 py-2 border border-2 border-[#003566] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003566]"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full h-[50px] px-4 py-2 border border-2 border-[#003566] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#003566]"
            />
            <span
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
            >
              {showConfirmPassword ? '🙈' : '👁️'}
            </span>
          </div>

          {error && (
            <div className="text-red-600 font-semibold text-sm">{error}</div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-[#003566] text-[24px] text-white py-2 rounded-xl font-poppins font-regular hover:bg-[#A11616E5] ${
              loading && 'opacity-50 cursor-not-allowed'
            }`}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>

        <div className="mt-6 text-center font-poppins font-normal text-[#000000] text-[16px]">
          Already a member?{' '}
          <span
            className="text-[#F5B501] hover:text-[#003566] font-semibold cursor-pointer"
            onClick={() => navigate('/login')}
          >
            Login
          </span>
        </div>
      </div>

      <button
        className="absolute top-4 md:top-12 right-4 z-20"
        onClick={() => navigate('/')}
      >
        <img src="/closeButton.png" alt="Close" />
      </button>
    </div>
    </div>
  );
};

export default SignUp;
