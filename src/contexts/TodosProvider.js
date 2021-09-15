import React, { useState } from 'react'


export const TodosContext = React.createContext();

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

    const [todos, setTodos] = useState(initialTodos);

    return (
        <TodosContext.Provider value={[todos, setTodos]}>
            {children}
        </TodosContext.Provider>
    );

}

export default TodosProvider;