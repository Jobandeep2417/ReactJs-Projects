import logo from './logo.svg';
import './App.css';
import List from './List';

import { Container } from '@material-ui/core';


function App() {
  return (
   
    <Container maxWidth="sm" className='Container'>
        <List/>
    </Container>
  );
}

export default App;
