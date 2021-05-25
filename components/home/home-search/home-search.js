import DirectionSearch from "./direction-search/direction-search"

const HomeSearch = () => {
    return (
        <div className="hero">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-9 hero-content">
                        <h1>Tus vidrieras siempre limpias</h1>		
                        <p>Solicitá tu servicio, desde $50 la limpieza.</p>
                        <DirectionSearch></DirectionSearch>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSearch;