import { useState } from "react";

function TodoForm(props) {

    const [newTodoText, setNewTodoText] = useState('');

    function handleChange(event) {
        setNewTodoText(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const data = {
            id: Date.now(),
            text: newTodoText,
            completed: false
        }
        props.onCreate(data);
        setNewTodoText('')

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={newTodoText} onChange={handleChange} placeholder="할 일을 입력해주세요." />
                <button type="submit">추가</button>
            </form>
        </div>
    )

}

export default TodoForm