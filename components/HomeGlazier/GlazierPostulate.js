import GlazierSuscription from '../GlazierSuscription'
import Img from '../Img';

const GlazierPostulate = () => {
    return (
        <div className="home-simple section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-auto d-none d-md-block pe-5 pe-lg-3 col-lg-5 col-xl-6 miscelaneas">	    				
                        <Img className="img-fluid d-none d-lg-block" src="/ciclista.jpg" width="560" height="505" alt="Joya se ocupa de que tu vidriera esté siempre limpia"/>
                        <div className="celular">
                            <Img className="img-fluid d-none d-md-block" src="/celu-sample.png" width="217" height="443" alt="Joya se ocupa de que tu vidriera esté siempre limpia"/>
                        </div>
                    </div>
                    <div className="col col-lg-5  offset-lg-1 main-content">
                        <h3>¡Sólo necesitás tu bicicleta y celular!</h3>
                        <p>Postulate como vidrierista Joya. Dejanos tus datos y nos pondremos en contacto con vos en la brevedad.</p>
                        <GlazierSuscription/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GlazierPostulate;