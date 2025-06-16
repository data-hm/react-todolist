import TodoItem from "./TodoItem";

function DoneList(props) {

    return (
        <div>
            <div className="list-header-text">
                <h2>완료 목록</h2>
            </div>
            <div className="count-text">
                <p>총 완료한 일: {props.items.filter(item => item.completed).length}</p>
            </div>
            <ul>
                {props.items.filter(item => item.completed).map((item, index) => (
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

export default DoneList;