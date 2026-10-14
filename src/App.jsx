import Navbar from './components/Navbar/Navbar';
import AlumnoCard from './components/AlumnoCard';
import Contador from './components/Contador/Contador';
import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h2 className="mb-4">Directorio de Alumnos</h2>

        {/* Fila 1 */}
        <div className="row mb-4">
          <AlumnoCard
            nombre="Daniel32"
            carrera="Desarrollo de Software"
            estadoInicial="Matriculado"
          />
          <AlumnoCard
            nombre="Maria12"
            carrera="Diseño Grafico"
            estadoInicial="Inactivo"
          />
          <AlumnoCard
            nombre="Carlosxd"
            carrera="Administracion Industrial"
            estadoInicial="Matriculado"
          />
        </div>

        {/* Fila 2 */}
        <div className="row mb-4">
          <AlumnoCard
            nombre="Cotrina"
            carrera="Ingenieria de Software con IA"
            estadoInicial="Matriculado"
          />
          <AlumnoCard
            nombre="Luis"
            carrera="Redes y Seguridad"
            estadoInicial="Inactivo"
          />
          <AlumnoCard
            nombre="Ana"
            carrera="Diseño y Desarrollo de Software"
            estadoInicial="Matriculado"
          />
        </div>

        {/* Fila 3 */}
        <div className="row mb-4">
          <AlumnoCard
            nombre="Jorge Marin"
            carrera="Mecatronica Industrial"
            estadoInicial="Matriculado"
          />
          <AlumnoCard
            nombre="Carmen"
            carrera="Administracion de Empresas"
            estadoInicial="Inactivo"
          />
          <AlumnoCard
            nombre="Pedro Castillo"
            carrera="Soporte de TICs"
            estadoInicial="Matriculado"
          />
        </div>

        {/* Contador de Alumnos Seleccionados */}
        <Contador />
      </div>
    </>
  );
}

export default App;