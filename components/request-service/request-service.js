const RequestService = () => {
    return (
        <div className="col-12 col-lg-4 content">
            <h3>¡Solicitanos en minutos!</h3>
            <div className="form form-rounded">

                <label htmlFor="direccion2" className="form-label sr-only">Dirección de tu vidriera</label>
                <input type="text" className="form-control" id="direccion2" placeholder="Dirección de tu vidriera..."/>

                <label htmlFor="email" className="form-label sr-only">Tu email</label>
                <input type="email" className="form-control" id="email" placeholder="Tu email..."/>

                <button className="btn btn-primary btn-big">¡Comenzar!</button>
            
            </div>
        </div>
    );
}
 
export default RequestService;