import logo from './logo.svg';
import './App.css';

import Header from './Header';
import Footer from './Footer';
import WordsList from './WordsList'


function App() {
  return (
    <div className="App">
      <Header/>
      <WordsList/>
      <Footer/>
    </div>
  );
}

export default App;
