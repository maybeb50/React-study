import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

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
      users.filter( user => user.id !== id) 
    );
    /* 선택한 id 값이 아닌 id 원소들을 filter 해서 배열로 추출 */
  }

  const onToggle = (id) => {
    console.log(id);
    setUsers(
      users.map(
        user => user.id === id 
          ? {...user, active: !user.active} : user
      )
    );
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
    </>
  );
}

export default App;
