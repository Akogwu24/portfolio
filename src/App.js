import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Portfolio from './components/portfolio';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Portfolio />
      </BrowserRouter>
    </div>
  );
}

export default App;
