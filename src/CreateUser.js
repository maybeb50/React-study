import React from 'react';

function CreateUser({ name, email, onChange, onCreate}) {
    return(
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} />
            <input name="email" placeholder="email" onChange={onChange} value={email} />
            <button type="button" onClick={onCreate}>확인</button>
        </div>
    );
}

export default CreateUser;