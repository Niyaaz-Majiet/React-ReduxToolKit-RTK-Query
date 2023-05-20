import React from "react";
import {useDeleteTodoMutation, useUpdateTodoMutation} from "../../features/api/apiSlice";

const TodoListItem = (props) => {
    const [updateTodo] = useUpdateTodoMutation();
    const [deleteTodo] = useDeleteTodoMutation();

    return (
        <article key={props.todo.id}>
            <div className="todo">
                <input
                    type="checkbox"
                    checked={props.todo.completed}
                    id={props.todo.id}
                    onChange={() => updateTodo({...props.todo, completed: !props.todo.completed})}
                />
                <label>{props.todo.title} : ID = {props.todo.id}</label>
                <button htmlFor="trash" onClick={() => deleteTodo({id: props.todo.id})}>
                    DELETE
                </button>
            </div>
        </article>
    )
}
export default TodoListItem;
