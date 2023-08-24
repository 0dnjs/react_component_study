import React, { useRef, useState } from 'react';
import MainLayout from '../../components/MainLayout/MainLayout';

function BPage({ setHeader }) {
    const menus = [
        {
            id: 1,
            name: "내 계정 정보"
        },
        {
            id: 2,
            name: "비밀번호 변경"
        },
        {
            id: 3,
            name: "이메일 인증 또는 변경"
        },
        {
            id: 4,
            name: "계정 업그레이드"
        }
    ];

    let [ content, setContent ] = useState("기본값");

    let inputText = "";

    const inputRef = useRef();

    const handleInputChange = (e) => {
        inputText = e.target.value;
    }

    const handleOkClick = () => {
        // console.log(document.querySelector("input").value);
        // console.log(inputRef.current.value);
        setHeader(inputText);
    }

    return (
        <MainLayout title={"B페이지"} menus={menus} >
            <div>
                <h1>{content}</h1>
                <input type="text" onChange={handleInputChange} ref={inputRef}/>
                <button onClick={handleOkClick}>확인</button>
            </div>
        </MainLayout>
    );
}

export default BPage;