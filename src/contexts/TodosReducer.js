export const TodosCommands = { ADD: "add", DELETE: "delete", MODIFY: "modify" };

function TodosReducer(todos, { type, todoItem, id }) {
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

export default TodosReducer;