import './App.css';
import Home from './components/Home';
import Services from './components/Services'
import About from './components/About'
import Career from './components/Career'
import Contact from './components/Contact'
import Error from './components/Error'

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Mainpage from './components/Mainpage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Mainpage />}>
            <Route index element={<Home />} />
            <Route path='services' element={<Services />}/>
            <Route path='about' element={<About />}/>
            <Route path='career' element={<Career />}/>
            <Route path='contact' element={<Contact />}/>
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
