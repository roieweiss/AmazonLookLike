import './App.css'
import "react-toastify/dist/ReactToastify.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import Title from './Components/Shared/Title.jsx';
import Container from 'react-bootstrap/Container';
import HomePage from './Pages/HomePage.jsx';
import Footer from './Components/Shared/Footer';
import Header from './Components/Shared/Header.jsx';
import SignIn from './Pages/SignIn.jsx';
import {  } from "module";
import { ToastContainer } from 'react-toastify';



function App() {


  return (
    <BrowserRouter>
      <div className='d-flex flex-column side-allpage min-width'>
        <ToastContainer position='bottom-center' limit={1}/>
        <Header/>
        <main>
         <Container className='mt-3' >
          <Routes>
            <Route path= "/" element={<HomePage/>}></Route>
            <Route path= "/signin" element={<SignIn/>}></Route> 
          </Routes>
         </Container>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>


  )
}

export default App
