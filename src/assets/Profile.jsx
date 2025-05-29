import React,{ useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: '',
        userId: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [changePassword, setChangePassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
    useEffect(() => {
        const loginDetails = JSON.parse(localStorage.getItem("loginDetails"));
        if (loginDetails) {
        setFormData({
            name: loginDetails.name || '',
            email: loginDetails.email || '',
            username: loginDetails.username || '',
            userId: loginDetails._id || ''
        });
        } else {
        navigate('/login');
        }
    }, [navigate]);
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
    
        try {
        const response = await fetch('https://bft-backend.vercel.app/api/profile/updateProfile', {
            method: "PUT",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        });
    
        if (response.ok) {
            const data = await response.json();
            localStorage.setItem("loginDetails", JSON.stringify(data));
            alert('Profile updated successfully!');
            setTimeout(() => navigate('/'),3000); // Redirect to home after successful update
        } else {
            const errorData = await response.json();
            setError(errorData.message || 'Profile update failed. Please try again.');
        }
        } catch (err) {
        console.error('Profile update failed:', err.message);
        setError('Profile update failed. Please try again.');
        } finally {
        setLoading(false);
        }
    };
    
    return (
        <div
            className="h-screen w-screen bg-cover bg-center relative flex items-center justify-center"
            style={{
                backgroundImage: "url('/login_page.jpg')",
            }}
        >
            <div className="absolute inset-0 bg-black opacity-30"></div>

            <div className="relative w-[95%] max-w-md md:ml-20 md:mt-0 mt-14 bg-[#D9D9D9] px-8 py-10 rounded-xl shadow-lg z-10">
                <img src="/Logo_1.png" alt="Logo" className="w-[180px] h-[40px] mb-12" />
                <h1 className="font-poppins font-extrabold text-[32px] text-black mb-4">Edit Profile</h1>
                <form onSubmit={handleUpdateProfile}>
                    <div className="mb-4">
                        <label className="block text-black mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black mb-2">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                            required
                        />
                    </div>
                    <button
                        type="button"
                        onClick={() => {setChangePassword(!changePassword); setNewPassword(''); setConfirmPassword('');}}
                        className="text-blue-500 mb-4"
                    >
                        Change Password
                        {changePassword && (
                            <div>
                                <div className="mb-4">
                                <label className="block text-black mb-2">New Password</label>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="newPassword"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="text-blue-500 mt-1"
                                >
                                    {showPassword ? 'Hide Password' : 'Show Password'}
                                </button>
                                </div>
                                <div className="mb-4">
                                    <label className="block text-black mb-2">Confirm New Password</label>
                                    <input
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        name="confirmPassword"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="text-blue-500 mt-1"
                                    >
                                        {showConfirmPassword ? 'Hide Password' : 'Show Password'}
                                    </button>
                                </div>
                            </div>
                        )}
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full px-4 py-2 bg-blue-600 text-white rounded ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {loading ? 'Updating...' : 'Update Profile'}
                    </button>
                </form>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <button
                    onClick={() => navigate('/')}
                    className="mt-4 w-full px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
}

export default Profile;