import React, { useReducer } from 'react'
import TodosReducer from './TodosReducer';


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

    const [todos, todosDispatch] = useReducer(TodosReducer, initialTodos);

    return (
        <TodosContext.Provider value={[todos, todosDispatch]}>
            {children}
        </TodosContext.Provider>
    );

}

export default TodosProvider;