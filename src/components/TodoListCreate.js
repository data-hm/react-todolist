
import { useState } from "react";


function TodoListCreate(props) {
    const [name, setName] = useState('');

    function handleNameChange(event) {
        setName(event.target.value);

    }

    function handleNameSubmit(event) {
        event.preventDefault();
        if (!name.trim()) {
            alert('이름을 입력해주세요.')
            return;
        }
        props.onCreateList(name.trim());
        setName('');
    }



    return (
        <div className="start-page">
            <p>당신의 이름은 무엇입니까?</p>
            <form onSubmit={handleNameSubmit}>
                <input type="text" value={name} onChange={handleNameChange} placeholder="이름을 입력하세요" />
                <button type="submit">TodoList 생성하기</button>
            </form>
        </div>
    )
}

export default TodoListCreate;