import React, { useReducer, useCallback } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import CountActiveUsers from './CountActiveUsers';

const initialState = {
  inputs: {
    name: '',
    email: '',
  },
  users: [
      {
          id: 1,
          username: 'syrup',
          email: 'syrup@example.com',
          active: true,
      },
      {
          id: 2,
          username: 'tester',
          email: 'tester@example.com',
          active: false,
      },
      {
          id: 3,
          username: 'purple',
          email: 'purple@example.com',
          active: false
      }
  ]
}

function reducer(state, action) {
  return state;
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const { name, email } = state.inputs;

  const onChange = useCallback(e => {
    const {name, value} = e.target;
    dispatch({
      type: 'CHANGE_INPUT', 
      name, 
      value
    })
  }, []);

  return (
    <>
      <CreateUser name={name} email={email} onChange={onChange} />
      <UserList users={users} />
      <CountActiveUsers users={users} />
    </>
  );
}

export default App;
