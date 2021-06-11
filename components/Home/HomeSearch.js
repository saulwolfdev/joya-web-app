import Link from 'next/link'

const HomeSearch = () => {
    return (
        <div className="hero">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-9 hero-content">
                        <h1>Tus vidrieras siempre limpias</h1>		
                        <p>Solicitá tu servicio, desde $50 la limpieza.</p>
                        <HomeSearch.DirectionSearch/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const DirectionSearch = () => {
    return (
        <div className="form form-rounded">
            <label htmlFor="direccion" className="form-label sr-only">Dirección de tu vidriera</label>
            <div className="input-group-btn">
                <input type="text" className="form-control" id="direccion" aria-describedby="direccionHelp" placeholder="Dirección de tu vidriera"/>
                <Link href='/apply'>
                    <a className="btn btn-secondary btn-round" aria-label="Solicitar limpieza ya">
                        <i className="far fa-arrow-right"/>
                    </a>
                </Link>
            </div>
            <div id="direccionHelp" className="form-text">Servicio para Capital Federal únicamente. Pronto tendremos más cobertura.</div>
        </div>
    )
}
HomeSearch.DirectionSearch = DirectionSearch;

export default HomeSearch;