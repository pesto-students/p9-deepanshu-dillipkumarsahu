import React from 'react';
import Shortly from '../components/Shortly';
import { UserAuth } from '../context/AuthContext';
import BaseLayout from '../layout/BaseLayout';
import '../style/account.style.css';

const Account = () => {
  const { user } = UserAuth();

  return (
    <BaseLayout>
      {
        user ?
          <>
            <div className='profileCard'>
              <h1>User Profile</h1>
              <img src={user?.photoURL} alt="avatar" />
              <div>
                <p>Welcome, {user?.displayName}</p>
              </div>
            </div>
            <Shortly user={user} />
          </>
          : <h5>Loading...</h5>
      }

    </BaseLayout>
  );
};

export default Account;
