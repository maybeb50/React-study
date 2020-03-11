import React, { useState, useRef } from 'react';

function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });
    const { name, nickname } = inputs;
    const nameInput = useRef();
    // inputs.name
    // inputs.nickname

    /*
        const textState = useState('');
        cosst text = textState[0];
        const setText =  textState[1];
    */

    const onChange = (e) => {
        const { name, value } = e.target;
        // name = e.target.name
        // value = e.target.value
        setInputs({
            ...inputs,                          // 왜 불변성을 지켜야 하는지는 나중에 작업하면서 깨달아보자.
            [e.target.name]: e.target.value
        })      /// {name: '', nickname: '', [name]: value }
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });

        console.log(nameInput);
        nameInput.current.focus();
    };

    return(
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput} />
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 :</b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;