import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import API from '../utils/api'; // adjust this path as needed

const VerifyEmail: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState('Verifying email...');
  const token = searchParams.get('token');
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setMessage('No verification token provided.');
        return;
      }

      try {
        const res = await API.get(`/auth/verify-email?token=${token}`);
        setMessage(res.data.message);

        setTimeout(() => navigate('/login'), 3000);
      } catch (error: any) {
        console.error('Verification failed:', error);
        setMessage(error.response?.data?.error || 'Email verification failed.');
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded text-center">
      <h2 className="text-2xl font-semibold mb-4">Email Verification</h2>
      <p>{message}</p>
    </div>
  );
};


export default VerifyEmail;
