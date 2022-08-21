import React from 'react';

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoHeader } from '../TodoHeader';
import { useTodos } from './useTodos';
import { ChangeAlertWithStorageListener } from '../ChangeAlertStorage';

function App() {
   const {
      error,
      loading,
      searchedTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      totalTodos,
      completedTodos,
      searchValue,
      setSearchValue,
      addTodo,
      sincronizeTodos,
   } = useTodos();

   return (
      <>
         <TodoHeader loading={loading}>
            <TodoCounter {...{ totalTodos, completedTodos }} />
            <TodoSearch {...{ searchValue, setSearchValue }} />
         </TodoHeader>

         <TodoList
            {...{ error, loading, searchedTodos, searchValue, totalTodos }}
            onError={() => <TodosError />}
            onLoading={() => <TodosLoading />}
            onEmpty={() => <EmptyTodos />}
            onEmptySearchResults={(searchText) => (
               <p>No hay resultados para {searchText}</p>
            )}
            // render={(todo) => (
            //    <TodoItem
            //       key={todo.text}
            //       text={todo.text}
            //       completed={todo.completed}
            //       onComplete={() => completeTodo(todo.text)}
            //       onDelete={() => deleteTodo(todo.text)}
            //    />
            // )}
         >
            {(todo) => (
               <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => deleteTodo(todo.text)}
               />
            )}
         </TodoList>

         {!!openModal && (
            <Modal>
               <TodoForm {...{ addTodo, setOpenModal }} />
            </Modal>
         )}

         <CreateTodoButton setOpenModal={setOpenModal} />

         <ChangeAlertWithStorageListener sincronize={sincronizeTodos} />
      </>
   );
}

export default App;
