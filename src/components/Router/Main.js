
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';

function Main() {
  return (
    <>
    <div className="App">

    <BrowserRouter>
    
      <Routes>
        <Route path='/' element={<Navbar />}></Route>
        <Route path='/Home' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>

      </Routes>
    </BrowserRouter>
     
         

   
      
   

    </div>

    </>

    


  );
}

export default Main;
