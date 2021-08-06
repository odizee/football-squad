import React from 'react'
//COMPONENTS AND PAGES
import Home from './pages/home'
import Nav from './components/Nav'

//Styles
import GlobalStyles from './components/GlobalStyles';
import styled from 'styled-components';

//Router
import {Route} from 'react-router-dom';

function App() {
  
  return (
    <MainApp className="App">
      <GlobalStyles />
      <Route path={['/team/:id', '/']}>
        <Nav/>
        <Home />
      </Route>
    </MainApp>
  );
}


const MainApp = styled.div`
  background-color: #923cb5;
  background-image: linear-gradient(147deg, #200 0%, #001220 74%);
`
export default App;
