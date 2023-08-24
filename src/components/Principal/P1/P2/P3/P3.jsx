import React, { useRef } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRecoilState } from 'recoil';
import { principalState } from '../../../../../store/principalStore';

const SContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    background-color: #fff;
`;

function P3({ num, setNum }) {
    const [ principal, setPrincipal ] = useRecoilState(principalState);
    const inputRef = useRef();

    const handleInputChange = (e) => {
        const value = e.target.value.replace(/[^0-9]/g, "");
        // 정규식, 0에서 9만 허용하는거임
        e.target.value = value;
        // if(!!value) {
        //     inputValue = parseInt(value);
        // }
    }

    const handleButtonClick = (e) => {
        const { name } = e.target;
        if(name === "plus") {
            setNum(num + parseInt(inputRef.current.value));
        }else {
            setNum(num - parseInt(inputRef.current.value));
        }
    }

    return (
        <div css={SContainer}>
            <div>userID: {principal.userId}</div>
            <div>username: {principal.username}</div>
            <div>name: {principal.name}</div>
            <div>email: {principal.email}</div>
            <div>phone: {principal.phone}</div>
            <div></div>
            <input type="text" onChange={handleInputChange} ref={inputRef}/>
            <button name='plus' onClick={handleButtonClick}>증가</button>
            <button name='minus' onClick={handleButtonClick}>감소</button>
        </div>
    );
}

export default P3;