import React, {useState} from 'react';

import './LandingUser.css';

import AddUser from '../components/AddUser';
import UsersList from '../components/UsersList';

const LandingUser = () => {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {id: Math.random().toString(), name: uName, age: uAge}];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {
        usersList.length > 0 && <UsersList users={usersList} />
      }
    </div>
  );
}

export default LandingUser;
