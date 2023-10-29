import './App.css';
import AdaLogo from './imagenes/ada.png';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='ada-contenedor'>
        <img 
          src={AdaLogo} 
          className='ada-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>.: Lista de Tareas :.</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
