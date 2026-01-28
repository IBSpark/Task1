// import logo from './logo.svg';
import './App.css';
import {HashRouter as Router , Routes , Route} from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import FAQ from './FAQ';
import SignIn from './SignIn';

function App() {
  return (
    <>
    <Router>
      {/* <Navbar/> */}
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path ='/home' element = {<Home/>} />
      <Route path ='/signin' element = {<SignIn/>} />
      <Route path ='/faq' element = {<FAQ/>} />
     
      </Routes>
      <Footer />
    </Router>
    
    </>
  );
}

export default App;
