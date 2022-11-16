import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContactForm from './components/contact-section/ContactForm';
import Main from './components/main-section/Main';
import Info from "./components/main-section/Info";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/about' element={<Info/>}/>
          <Route path='/contact' element={<ContactForm/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
