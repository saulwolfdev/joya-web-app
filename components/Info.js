const Info = ({title}) => {
    return (
        <div className="section-header row">
            <div className="col col-md-12">
                <h4>{title}</h4>
                <h3 className="d-md-block d-none">Tus vidrieras siempre limpias</h3>
            </div>
            <div className="col-auto btn-set d-md-none">
                <a href="#" className="btn btn-primary btn-small">
                + Visita
                </a>
            </div>
        </div>
    );
}

export default Info;