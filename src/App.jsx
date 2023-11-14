import React from "react";
import { useState } from 'react';
import './App.css';
import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';
import { useTodo } from './hooks/useTodo';
import { ChakraProvider } from '@chakra-ui/react';
import { Box, Text, Button, Flex, Spinner } from '@chakra-ui/react';

function App() {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleCompleteTodo,
    handleUpdateTodo,
  } = useTodo();

  return (
    <ChakraProvider>
      <>
        <Box className='card-to-do'>
          <h1>.: Lista de Tareas :. </h1>
          <div className='counter-todos'>
            <h3>
              N° Tareas: <span>{todosCount}</span>
            </h3>
            <h3>
              Pendientes: <span>{pendingTodosCount}</span>
            </h3>
          </div>

          <div className='add-todo'>
            <h3>.: Agregar Tarea :.</h3>
            <TodoAdd handleNewTodo={handleNewTodo} />
          </div>

          <TodoList
            todos={todos}
            handleUpdateTodo={handleUpdateTodo}
            handleDeleteTodo={handleDeleteTodo}
            handleCompleteTodo={handleCompleteTodo}
          />
        </Box>
      </>
    </ChakraProvider>
  );
}

export default App;