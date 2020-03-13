import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
    const { username, email, id, active } = user;
    
    // useState 로 관리하고 있는 값을 참조하고 있는 경우에 deps 배열을 꼭 넣어줘야 된다. 
    // user 값이 최신의 값을 가리키게 된다. 
    // user 가 없는 상태에서 user를 조회하게 된다면, 의도하지 않은대로 나올 수 있다. 
    // 부모 컴포넌트가 리렌더링 되면 자식 컴포넌트도 리렌더링 된다. 
    // 실제 브라우저에 업데이트 되는 것은, 업데이트 된 부분만 나오지만, vitual DOM 에서는 모든 내용을 렌더링하고 나서 비교해서 바뀐 부분만 적용한다.
    // 가상 돔에 렌더링 된다고해서 느려진다고는 하지 않지만, 내용이 많으면 느려질 수도 있음. 
    // 가상 돔에서도 리소스를 아껴야 할떄  => 컴포넌트 리렌더링 성능 최적화 라고 한다.
      
    // useEffect(() => {
    //     console.log('user 값이 설정됨');
    //     console.log(user);  // 컴포넌트가 처음 호출 할 때와 값이 바뀔 될 때마다 호출 된다. 
    //     return() => {
    //         console.log('user 값이 바뀌기 전');
    //         console.log(user);
    //     }
    // }, [user]); 

    return(
        <div>
            <b 
                style={{
                    cursor: 'pointer',
                    color: active ? 'green' : 'black'
                }}
                onClick={() => onToggle(id)}
            >
                {username}
            </b> <span>{email}</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    );
}

function UserList({ users, onRemove, onToggle }) {    
    return(
        <div>
            {
                users.map(
                    user => (<User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />)
                )
            }
        </div>
    );
}

export default UserList;