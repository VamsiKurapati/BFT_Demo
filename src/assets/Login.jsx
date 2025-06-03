import React, { useEffect, useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ identifier: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [google, setGoogle] = useState(null);

  const backgroundImages = [
      "/Login_1.jpg",
      "/Login_2.jpg",
      "/Login_3.jpg",
      "/Login_4.jpg",
    ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 1000); // Change image every 1 seconds

    return () => clearInterval(interval);
  }, []);
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://bft-backend.vercel.app/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('loginDetails', JSON.stringify(data));
        navigate('/');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      console.error('Login failed:', err.message);
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Google login popup
  const handleGoogleLogin = () => {
    if (google) {
      google.accounts.oauth2
        .initCodeClient({
          client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
          scope: 'openid email profile',
          ux_mode: 'popup',
          redirect_uri: 'postmessage',
          callback: async (response) => {
            try {
              const res = await fetch('https://bft-backend.vercel.app/api/auth/google-login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code: response.code }),
              });

              if (res.ok) {
                const data = await res.json();
                localStorage.setItem('loginDetails', JSON.stringify(data));
                navigate('/');
              } else {
                const err = await res.json();
                setError(err.message || 'Google login failed');
              }
            } catch (err) {
              console.error('Google login error:', err);
              setError('Google login failed. Please try again.');
            }
          },
        })
        .requestCode();
    }
  };

  useEffect(() => {
    if (window.google) setGoogle(window.google);
  }, []);

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
          Welcome back ,
        </h1>
        <p className="font-poppins font-light text-[16px] md:text-[20px] text-black mb-6">
          Enter to Escape the Ordinary
        </p>

        <form className="space-y-4" onSubmit={handleLogin}>
          <input
            type="text"
            name="identifier"
            placeholder="Email / Username"
            value={formData.identifier}
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

          <div className="text-right text-sm text-[#003566] cursor-pointer hover:underline">
            <button
              type="button"
              className="font-poppins font-normal text-[16px] text-[#003566]"
              onClick={() => navigate('/forgot-password')}
            >
              Forgot Password?
            </button>
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
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <div className="mt-4 flex items-center gap-4 w-full max-w-xs mx-auto">
          <div className="flex-1 border-t-[2px] border-[#00000033]" />
          <div className="text-center font-poppins font-normal text-[#000000] text-[14px]">
            or continue with
          </div>
          <div className="flex-1 border-t-[2px] border-[#00000033] "/>
        </div>

        <div className="mt-3 flex justify-center">
          <img
            src="/google_logo.png"
            alt="Google Sign-In"
            className="w-10 h-10 cursor-pointer hover:scale-105 transition"
            onClick={handleGoogleLogin}
          />
        </div>

        <div className="mt-6 text-center font-poppins font-normal text-[#000000] text-[16px]">
          New to BFT?{' '}
          <span
            className="text-[#F5B501] hover:text-[#003566] font-semibold cursor-pointer"
            onClick={() => navigate('/signup')}
          >
            Sign Up
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

export default Login;
