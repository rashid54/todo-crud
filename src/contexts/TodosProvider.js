import React, { useReducer, useState } from 'react'


export const TodosContext = React.createContext();
export const TodosCommands = { ADD: "add", DELETE: "delete", MODIFY: "modify" };

function todosReducer(todos, { type, todoItem, id }) {
    switch (type) {
        case TodosCommands.ADD:
            return todos.concat(todoItem);
        case TodosCommands.MODIFY:
            return todos.map((val, idx) => ((id === idx) ? { ...todoItem } : val));
        case TodosCommands.DELETE:
            return todos.filter((_val, idx) => (id !== idx));
        default:
            return todos;
    }
}

function TodosProvider({ children }) {
    const initialTodos = [
        {
            username: "User1",
            email: "user.1@mail.com",
            todo: "This is Todo 1 ",
            updatingItem: false,

        },
        {
            username: "User2",
            email: "user.2@mail.com",
            todo: "This is Todo 2",
            updatingItem: false,
        },
    ];

    const [todos, todosDispatch] = useReducer(todosReducer, initialTodos);

    return (
        <TodosContext.Provider value={[todos, todosDispatch]}>
            {children}
        </TodosContext.Provider>
    );

}

export default TodosProvider;