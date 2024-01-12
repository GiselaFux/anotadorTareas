
import './App.css';
import freecodecampLogo from './imagenes/freecodecampLogo.jpg';
/* import Tareas from './componentes/Tareas.js'; */
/* import TareaFormulario from './componentes/TareaFormulario.js'; */
import ListaDeTareas from './componentes/ListaDeTareas.js';



function App() {
  return (
    <div className="aplicacion-tareas">

      <div className='freecodecamp-logo-contenedor'>
        <img src={freecodecampLogo}
          className='freecodecamp-logo'
          alt='imagen logo freeCodeCamp'
        />
      </div>

      <div className='tareas-lista-principal'>
        <h1>Mis tareas:</h1>
       <ListaDeTareas />

      </div>

    </div>
  );
}

export default App;
