import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import CountActiveUsers from './CountActiveUsers';

function App() {
  const [users, setUsers] = useState([
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
  ]);

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
  });
  const {name, email} = inputs;

  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      name,
      email
    };
    setUsers([
      ...users, 
      user
    ]);
    setInputs({
      name: '',
      email: ''
    });
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setUsers(
      users.filter(
        user => user.id !== id    // 조건에 만족하는 경우에는 새로운 배열에 넣는다. (true인 것만)
      )
    );
  };

  const onToggle = (id) => {
    setUsers(
      users.map(
        user => user.id === id 
        ? {...user, active: !user.active} : user
      )
    )
  };

  return (
    <>
      <CreateUser 
        name={name}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      {/* <div>활성 사용자 수 : {count}</div> */}
      <CountActiveUsers users={users} />
    </>
  );
}

export default App;
