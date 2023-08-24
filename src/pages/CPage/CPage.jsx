import React, { useState } from 'react';
import UseMemoContainer from '../../components/UseMemoContainer/UseMemoContainer';

function CPage(props) {
    const [ studentYear, setStudentYear ] = useState("");
    const [ hobby, setHobby ] = useState("");

    const handleInputsChange = (e) => {
        const { name, value } = e.target;
        if(name === "studentYear") {
            setStudentYear(value);
        }else {
            setHobby(value);
        }
    }


    return (
        <div>
            <p>당신의 학년은 몇 학년입니까?</p>
            <input type="number" name='studentYear' onChange={handleInputsChange}/>
            <p>당신의 취미는 무엇입니까?</p>

            <label htmlFor="h1">soccer</label>
            <input type="radio" id='h1' name='hobby' value={"soccer"} onChange={handleInputsChange}/>

            <label htmlFor="h1">basketball</label>
            <input type="radio" id='h2' name='hobby' value={"basketball"} onChange={handleInputsChange}/>

            <label htmlFor="h1">baseball</label>
            <input type="radio" id='h3' name='hobby' value={"baseball"} onChange={handleInputsChange}/>

            <label htmlFor="h1">golf</label>
            <input type="radio" id='h4' name='hobby' value={"golf"} onChange={handleInputsChange}/>

            <UseMemoContainer studentYear={studentYear} hobby={hobby} />
        </div>
    );
}

export default CPage;