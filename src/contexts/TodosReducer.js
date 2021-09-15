export default function TodosReducer(todos, {todoItem, id}){
    if(todoItem && id >=0){
        // modify todo
        return todos.map((val,idx)=>((id===idx)?{...todoItem}:val));
    }
    else if(todoItem){
        // add todo
        return todos.concat(todoItem);
    }
    else {
        // delete todo
        return todos.filter((_val,idx)=>(id!==idx));
    }

}
