import './App.css';
import Header from './components/Header';
import { Firstpage } from './components/Firstpage';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Pro from './components/Pro';


function App() {

  return (
   <>
   <div><Header/></div>

    
  <Routes>
    <Route path='/' element={<Firstpage/>}/>
    <Route path='*' element={<NotFound/>}/>
    <Route path='!' element={<Blog/>}/>
     <Route path='c' element={<Contact/>}/>
     <Route path='a' element={<Pro/>}/>

  </Routes>

   </>
  );
}

export default App;
