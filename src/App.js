import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter basename='home'>
      <Switch>
        <Route path='/' exact component={Home} />
        {/* <Route path='/education' exact component={Education} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
