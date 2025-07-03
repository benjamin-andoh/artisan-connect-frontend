import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/landingPage/EmailVerification.css';

const EmailVerification: React.FC = () => {
  return (
    <div className="email-verification-container">
      <div className="email-verification-card">
        <h2 className="verification-title">Verify Your Email</h2>
        <p className="verification-message">
          We've sent a verification link to your email address. Please check your inbox and click the link to verify your account before logging in.
        </p>

        <p className="verification-note">
          Didn't get the email? Check your spam or junk folder, or <Link to="/resend-verification" className="resend-link">resend verification</Link>.
        </p>
      </div>
    </div>
  );
};

export default EmailVerification;
