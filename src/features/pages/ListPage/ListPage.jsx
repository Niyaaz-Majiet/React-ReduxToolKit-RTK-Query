import {useState} from "react";
import {
    useGetTodosQuery,
    useAddToDoMutation,
} from "../../api/apiSlice";
import InputForm from "../../../components/InputForm/InputForm";
import ListDisplay from "../../../components/ListDisplay/ListDisplay";

const ListPage = () => {
    const [newTodo, setNewTodo] = useState("");

    const {
        data: todos,
        isLoading,
        isSuccess,
        isError
    } = useGetTodosQuery();

    const [addTodo] = useAddToDoMutation();

    const handleSubmit = (e) => {
        e.preventDefault();
        //TODO: Add logic to prevent duplicate entries
        addTodo({userId: 1, title: newTodo, completed: false});
        setNewTodo("");
    }

    return (
        <main>
            <div className="list-header-container">
                <h1 className='list-header-text'>ToDo List : </h1>
            </div>

            <InputForm
                handleSubmit={handleSubmit}
                newTodo={newTodo}
                setNewTodo={setNewTodo}
            />

            <div className="list-container">
                <ListDisplay
                    isLoading={isLoading}
                    isSuccess={isSuccess}
                    todos={todos}
                    isError={isError}
                />
            </div>
        </main>
    )
}

export default ListPage;
