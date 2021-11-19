import './App.css';

import Cadastro from './pages/cadastro';

import Header from './components/header/index.jsx';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Cursos from './components/courses/index.jsx';
import Inicio from './components/home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={Inicio}/>
        <Route path="/courses" component={Cursos}/>
        <Route path='/cadastro/novo' component={Cadastro}/>
        <Route path='/cadastro/editar/:colecaoId' component={Cadastro}/>
      </div>
    </Router>
    
  );
}

export default App;