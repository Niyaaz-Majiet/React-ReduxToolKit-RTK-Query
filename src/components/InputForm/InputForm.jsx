import React from "react";


const InputForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="new-todo-label">Enter TODO : </label>
            <div className="new-todo-input-container">
                <input
                    type="text"
                    id="new-todo"
                    value={props.newTodo}
                    onChange={(e) => props.setNewTodo(e.target.value)}
                    placeholder="Enter New Todo"
                />
            </div>
            <button id='submit-btn' className="submit">
                Submit
            </button>
        </form>
    );
}


export default InputForm;
