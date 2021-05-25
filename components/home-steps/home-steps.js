const HomeSteps = () => {
    return (
        <div className="home-steps section">
            <div className="container-fluid">
            <div className="row">
                <div className="col step">
                    <div className="num">01</div>
                    <div className="img-block">
                    <img className="img-fluid" src="step1.jpg" alt="Solicitá un vidrierista" width="80" height="67"/>       
                </div>
                    <div className="text">
                    <h4>Solicitá un vidrierista</h4>
                    <p>indicando ubicación, tamaño de la vidriera.</p>
                    </div>
                </div>
                <div className="col step">
                    <div className="num">02</div>
                    <div className="img-block">
                    <img className="img-fluid" src="/step2.jpg" alt="Elegí día, horario y frecuencia" width="67" height="68"/>
                    </div>
                    <div className="text">
                    <h4>Vos elegís día, horario y frecuencia</h4>
                    <p>Los días que quieras, a la hora que quieras.</p>
                    </div>
                </div>
                <div className="col step">
                    <div className="num">03</div>
                    <div className="img-block">
                    <img className="img-fluid" src="/step3.jpg" alt="Pago seguro" width="76" height="67"/>
                    </div>
                    <div className="text">
                    <h4>Pagá de forma segura</h4>
                    <p>con tu tarjeta de crédito o adhieriéndote al débito automático.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default HomeSteps;