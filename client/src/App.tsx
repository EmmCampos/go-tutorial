import {Container, Stack } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForms';
import TodoList from './components/TodoList';


export const BASE_URL = "http://localhost:5002/api";

function App() {
  return (
    <Stack h="100vh">
      <Navbar />
      <Container>
       <TodoForm />

        <TodoList />
      </Container>
      </Stack>
  );
}

export default App;
