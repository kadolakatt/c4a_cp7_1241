import Status from './Status';

function ProyectListItem(props) {

    //Funcion controladora del evento click del botón completar
    const onCompletarProyecto = function(e) {
        //evita que se ejecute el comportamiento por defecto que el navegador
        //tiene configurado para este elemento.
        e.preventDefault();

        //Invoca función completar proyecto que se encuentra en componente
        //App, lo podemos hacer porque la hemos recibido como prop
        props.completarProyecto(props.id);
    }

    //Función controladora del evento click del boton eliminar
    const onEliminarProyecto = function (e) {
        //evita que se ejecute el comportamiento por defecto que el navegador
        //tiene configurado para este elemento.
        e.preventDefault(); 
        //Invoca función completar proyecto que se encuentra en componente
        //App, lo podemos hacer porque la hemos recibido como prop
        props.eliminarProyecto(props.id);
        //alert('eliminar');
    }

    return (
        <a href="none" className="list-group-item list-group-item-action" aria-current="true">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{ props.nombre }</h5>
                    <small>{ props.fecha }</small>
                </div>
                <Status status={props.completado} activo="TERMINADO" inactivo="PENDIENTE" />
                <p className="mb-1">{ props.descripcion }</p>
                <small>{ props.director }</small>
                <button onClick={onEliminarProyecto} className="btn btn-sm btn-danger float-sm-end mx-lg-2">Borrar</button>
                <button className="btn btn-sm btn-success float-sm-end mx-lg-1">Editar</button>
                <button onClick={onCompletarProyecto} className="btn btn-sm btn-primary float-sm-end">
                    { props.completado ? "Reabrir" : "Completar" } 
                </button>
            </a>
    );
}

export default ProyectListItem;