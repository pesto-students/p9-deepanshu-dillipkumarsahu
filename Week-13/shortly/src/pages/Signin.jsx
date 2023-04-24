import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import BaseLayout from '../layout/BaseLayout';
import { signinCard } from '../style/signin.style';

const Signin = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/account');
    }
  }, [user]);

  return (
    <BaseLayout>
      <div style={signinCard}>
        <h1>Sign in to SHORTLY</h1>
        <div>
          <GoogleButton onClick={handleGoogleSignIn} />
        </div>
      </div>
    </BaseLayout>
  );
};

export default Signin;
