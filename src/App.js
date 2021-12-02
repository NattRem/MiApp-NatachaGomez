
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      
        <NavBar />
        <ItemListContainer saludo="¡Bienvenid@s a nuestra página!"/>

    </div>
  );
}

export default App;
