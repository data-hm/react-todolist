import styles from './TodoItem.module.css'

function TodoItem(props) {
    function handleDelete() {
        props.onDelete(props.item.id);
    }

    function handleToggle(event) {
        props.onUpdate(props.item.id, {completed: event.target.checked});
    }


    return(
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>

            <p className= {props.item.completed ? styles.completed : ""}>{props.item.text}</p>

            <button onClick={handleDelete}>삭제</button>

            <label htmlFor={'check' + props.item.id}></label>
            <input id={'check' + props.item.id} type="checkbox" checked={props.item.completed} onChange={handleToggle}/>
            <span style={{'color' : props.item.completed ? "green" : "white" }}>{props.item.completed === false ? '미완료' : '완료'}</span>

            
            
        </div>
    )

}

export default TodoItem