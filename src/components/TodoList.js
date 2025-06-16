import TodoItem from "./TodoItem"



function TodoList(props) {


    return (
        <div>
            <div className="list-header-text">
                <h2>할일 목록</h2>
            </div>
            <div className="count-text">
                <p>총 해야할 일: {props.items.filter(item => !item.completed).length}</p>
            </div>
            <ul>
                {props.items.filter(item => !item.completed).map((item, index) => (
                    <li key={index}>
                        <TodoItem item={item}
                            onUpdate={props.onUpdate}
                            onDelete={props.onDelete} />
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default TodoList