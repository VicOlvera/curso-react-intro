import {TodoCounter} from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({completedTodos,totalTodos,searchedTodos,completeTodo,deleteTodo,searchValue,setSearchValue}) {
 return (
    < >
      <div className="main__Div">
        <TodoCounter completed={completedTodos} total={totalTodos}/>
        <TodoSearch 
         searchValue = {searchValue}
         setSearchValue = {setSearchValue}
        />
        
        <TodoList>
          {searchedTodos.map(todo =>(
            <TodoItem 
            key={todo.text}
            text={todo.text} 
            completed = {todo.completed}
            onComplete = {() =>  completeTodo(todo.text)}
            onDelete = {() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        
        <CreateTodoButton />
      </div>
    </>
 )
}

export {AppUI};
