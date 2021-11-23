//import logo from './logo.svg';
import NavBar from './components/NavBar';
import ProyectList from './components/ProyectList';
import Footer from './components/Footer';

import { useState } from 'react';

import './App.css';

function App() {
  
  //Vector utilizado en el CP6
  /*const lista_datos = [
    { id:"1", nombre: "Sistema de Control de Reservas", fecha: "11/12/2021", descripcion: "Sistema para controlar las reservas y facturación a huspedes de un hotel.", director:"MisionTIC 2022" },
    { id:"2", nombre: "Sistema de Control de Inventarios", fecha: "11/12/2021", descripcion: "Sistema para controlar inventarios de bodegas con multiples ubicaciones.", director:"MisionTIC 2022" },
    { id:"3", nombre: "Sistema de Reconocimiento Facial de Mascarillas", fecha: "11/12/2021", descripcion: "Sistema para reconocer si las personas traen o no puesta la mascarilla.", director:"MisionTIC 2022" },
    { id:"4", nombre: "Sistema de Control de Riego de Cultivos", fecha: "11/12/2021", descripcion: "Servicio RESTful para para dispositivos IoT que activan o desactivan los sistemas de riego de cultivos.", director:"MisionTIC 2022" },
    { id:"5", nombre: "Sistema de Control de Temperatura", fecha: "11/12/2021", descripcion: "Servicio RESTful para para dispositivos IoT que emite alertas cuando la temperatura de los contenedores sale de los umbrales permitidos.", director:"MisionTIC 2022" }
  ];*/

  //Vector de datos agregado al estado del componente App CP7
  const [ lista_datos, setListaDatos ] = useState([
    { id:"1", nombre: "Sistema de Control de Reservas", fecha: "11/12/2021", descripcion: "Sistema para controlar las reservas y facturación a huspedes de un hotel.", director:"MisionTIC 2022", completado: true },
    { id:"2", nombre: "Sistema de Control de Inventarios", fecha: "11/12/2021", descripcion: "Sistema para controlar inventarios de bodegas con multiples ubicaciones.", director:"MisionTIC 2022", completado: false },
    { id:"3", nombre: "Sistema de Reconocimiento Facial de Mascarillas", fecha: "11/12/2021", descripcion: "Sistema para reconocer si las personas traen o no puesta la mascarilla.", director:"MisionTIC 2022", completado: true },
    { id:"4", nombre: "Sistema de Control de Riego de Cultivos", fecha: "11/12/2021", descripcion: "Servicio RESTful para para dispositivos IoT que activan o desactivan los sistemas de riego de cultivos.", director:"MisionTIC 2022", completado: false },
    { id:"5", nombre: "Sistema de Control de Temperatura", fecha: "11/12/2021", descripcion: "Servicio RESTful para para dispositivos IoT que emite alertas cuando la temperatura de los contenedores sale de los umbrales permitidos.", director:"MisionTIC 2022", completado: false }
  ]);

  //Función para marcar un proyecto como completado si se encuentra pendiente.
  //Si el proyecto está terminado lo coloca abierto.
  const completarProyecto = function(id) {
    const nuevoProyectos = [...lista_datos];
    const proyecto = nuevoProyectos.find( (p) => p.id === id );
    proyecto.completado = !proyecto.completado;
    setListaDatos(nuevoProyectos);
  }

  //Eliminar del vector de proyectos el proyecto con el id dado.
  const eliminarProyecto = function (id) {
    const nuevosProyectos = [...lista_datos];
    const nuevosProyectos2 = nuevosProyectos.find( (p) => p.id !== id);
    console.log(nuevosProyectos2);
    setListaDatos(nuevosProyectos2);
  }

  const datos_empresa = {
    compania: "Republica de Colombia",
    division: "Ministerio de las TIC",
    direccion: "Av 000 No. 000 - 000",
    telefono: "+57 5 000 0000",
    ciudad: "Barranquilla - Colombia",
    zipcode: "08020"
  }

  //Modicamos ProyectList para enviar como props las funciones para modificar 
  //el estado lista_datos
  return (
    <div>
      <NavBar />
      <ProyectList proyectos={ lista_datos } 
                   completarProyecto={ completarProyecto }
                   eliminarProyecto={ eliminarProyecto }/>
      <Footer {...datos_empresa} />
    </div>
  );
}

export default App;
