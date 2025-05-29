import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [step, setStep] = useState(1); // 1 = email, 2 = OTP, 3 = new password
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');
    try {
      const res = await fetch('https://bft-backend.vercel.app/api/reset-password/getOtp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setMessage(data.message);
      setStep(2);
    } catch (err) {
      setError(err.message || 'Failed to send OTP.');
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');
    try {
      const res = await fetch('https://bft-backend.vercel.app/api/reset-password/validateOTP', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setMessage(data.message);
      setStep(3);
    } catch (err) {
      setError(err.message || 'OTP validation failed.');
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('https://bft-backend.vercel.app/api/reset-password/resetPassword', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, newPassword }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      setMessage(data.message + " You can now log in with your new password.");
      setStep(1);
      setEmail('');
      setOtp('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      setError(err.message || 'Password reset failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="h-screen w-screen bg-cover bg-center relative flex items-center justify-center"
      style={{
        backgroundImage: "url('/signup_page.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <button
        className="absolute top-3 right-4 z-20"
        onClick={() => navigate('/')}
      >
        <img src="/closeButton.png" alt="Close" />
      </button>

      <div className="relative w-[95%] max-w-md md:mt-0 mt-14 bg-[#D9D9D9] px-8 py-10 rounded-xl shadow-lg z-10">
        <img src="/Logo_1.png" alt="Logo" className="w-[180px] h-[40px] mb-4" />
        {step===1 && (<h2 className="text-3xl font-bold text-center mb-2 text-gray-800">Forgot Password ?</h2>)}

        {step===2 && (<h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Validate OTP</h2>)}

        {step===3 && (<h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Enter New Password</h2>)}

        {step===1 && (<p className="text-sm text-gray-600 mb-4 text-center"> No worries, we got you covered! Just follow the steps below to reset your password.</p>)}

        {error && <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4 text-sm">{error}</div>}
        {message && <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-4 text-sm">{message}</div>}

        {step === 1 && (
          <form onSubmit={handleEmailSubmit}>
            <label className="block text-sm text-gray-700 mb-1">Enter Registered Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="example@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium"
              disabled={loading}
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleOtpSubmit}>
            <label className="block text-sm text-gray-700 mb-1">Enter OTP received on your mail</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder=""
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium"
              disabled={loading}
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleResetPassword}>
            <label className="block text-sm text-gray-700 mb-1">New Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="New password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <label className="block text-sm text-gray-700 mb-1">Confirm New Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium"
              disabled={loading}
            >
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        )}

        <div className="mt-6 text-center text-sm text-gray-500">
          Remember your password? <a href="/login" className="text-blue-600 hover:underline">Go to Login</a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
