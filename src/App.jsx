import Navbar from './components/Navbar/Navbar';
import AlumnoCard from './components/AlumnoCard';
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
            nombre="Daniel32 " 
            carrera="Desarrollo de Software" 
            estado="Matriculado" 
          />
          <AlumnoCard 
            nombre="Maria12 " 
            carrera="Diseño Grafico" 
            estado="Inactivo" 
          />
          <AlumnoCard 
            nombre="Carlosxd " 
            carrera="Administracion Industrial" 
            estado="Matriculado" 
          />
        </div>

        {/* Fila 2 */}
        <div className="row mb-4">
          <AlumnoCard 
            nombre="Cotrina" 
            carrera="Ingenieria de Software con IA" 
            estado="Matriculado" 
          />
          <AlumnoCard 
            nombre="Luis " 
            carrera="Redes y Seguridad" 
            estado="Inactivo" 
          />
          <AlumnoCard 
            nombre="Ana " 
            carrera="Diseño y Desarrollo de Software" 
            estado="Matriculado" 
          />
        </div>

        {/* Fila 3 */}
        <div className="row mb-4">
          <AlumnoCard 
            nombre="Jorge Marin" 
            carrera="Mecatronica Industrial" 
            estado="Matriculado" 
          />
          <AlumnoCard 
            nombre="Carmen " 
            carrera="Administracion de Empresas" 
            estado="Inactivo" 
          />
          <AlumnoCard 
            nombre="Pedro Castillo" 
            carrera="Soporte de TICs" 
            estado="Matriculado" 
          />
        </div>

      </div>
    </>
  );
}

export default App;