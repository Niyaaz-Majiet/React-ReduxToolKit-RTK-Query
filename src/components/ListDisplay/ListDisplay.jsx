import React from "react";
import ListItem from "../ListItem/ListItem";

const ListDisplay = (props) => {
    const {isLoading, isSuccess, todos, isError} = props

    if (isLoading) {
        return <p>Loading</p>
    } else if (isSuccess) {
        return todos.map(todo => {
            return (
                <ListItem
                    todo = {todo}
                />
            )
        })
    } else if (isError) {
        return <p>ERROR</p>
    }
}

export default ListDisplay;
