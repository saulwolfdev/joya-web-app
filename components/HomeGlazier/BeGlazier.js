import GlazierSuscription from './GlazierSuscription'

const BeGlazier = () => {
    return (
        <div className="hero">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5 col-md-12 hero-content">
                        <h1>Convertite en vidrierista Joya!</h1>		
                        <p>Sumate a Joya y generá ingresos de hasta $20.000* mensuales!</p>
                        <p className="small">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="col-md-12 col-lg-7 col-xl-6 offset-xl-1 form-vidrierista">
                        <div className="form-container">
                            <h4>¡Postulate!</h4>
                            <p>Dejanos tus datos y nos pondremos en contacto con vos en la brevedad.</p>
                            <GlazierSuscription/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default BeGlazier;