import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import Title from './Components/Shared/Title.jsx';
import Container from 'react-bootstrap/Container';
import HomePage from './Pages/HomePage.jsx';
import Footer from './Components/Shared/Footer';
import Header from './Components/Shared/Header.jsx';



function App() {


  return (
    <BrowserRouter>
      <div className='d-flex flex-column side-allpage min-width'>
        <Header/>
        <main>
         <Container >
          <Routes>
            <Route path= "/" element={<HomePage/>}></Route>
          </Routes>
         </Container>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>


  )
}

export default App
