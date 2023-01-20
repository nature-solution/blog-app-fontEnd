import './App.css';
import Navbar from './component/sheared/Navbar/Navbar';
import Footer from './component/sheared/Footer/Footer';

import Landing from './component/pages/Landing';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Landing/>
      <Footer/>
    </div>
  );
}

export default App;
