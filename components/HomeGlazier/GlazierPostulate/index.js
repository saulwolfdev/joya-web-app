import Image from 'next/image'

const GlazierPostulate = () => {
    return (
        <div className="home-simple section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-auto d-none d-md-block pe-5 pe-lg-3 col-lg-5 col-xl-6 miscelaneas">	    				
                        <Image className="img-fluid d-none d-lg-block" src="/ciclista.jpg" width="560" height="505" alt="Joya se ocupa de que tu vidriera esté siempre limpia"/>
                        <div className="celular">
                            <Image className="img-fluid d-none d-md-block" src="/celu-sample.png" width="217" height="443" alt="Joya se ocupa de que tu vidriera esté siempre limpia"/>
                        </div>
                    </div>
                    <div className="col col-lg-5  offset-lg-1 main-content">
                        <h3>¡Sólo necesitás tu bicicleta y celular!</h3>
                        <p>Postulate como vidrierista Joya. Dejanos tus datos y nos pondremos en contacto con vos en la brevedad.</p>
                        {/*Este código se repite tal cual más arriba en esta página*/}
                            <div className="subscription-form form">
                                <div className="form-element">
                                    <label htmlFor="email" className="form-label sr-only">Email</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fal fa-envelope"/></span>
                                        <input type="email" className="form-control" name="email" placeholder="Mail"/>
                                    </div>
                                    
                                </div>
                                <div className="row">
                                    <div className="col pe-0 form-element">
                                        <label htmlFor="nombre" className="form-label sr-only">Nombre</label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="fal fa-user-circle"/></span>
                                            <input type="text" className="form-control" name="nombre" placeholder="Nombre"/>
                                        </div>
                                        
                                    </div>
                                    <div className="col ps-0  form-element">
                                        <label htmlFor="apellido" className="form-label sr-only">Apellido</label>
                                        <input type="text" className="form-control" name="apellido" placeholder="Apellido"/>
                                    </div>
                                </div>
                                <div className="form-element">
                                    <label htmlFor="celular" className="form-label sr-only">Número de celular</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fal fa-mobile-android-alt"/></span>
                                        <input type="text" className="form-control" name="celular" placeholder="Número de celular"/>
                                    </div>
                                </div>
                                <div className="form-element">
                                    <p>Al continuar, aceptás nuestra <a href="#">política de privacidad</a>.</p>
                                </div>
                                <div className="btn-set">
                                    <button className="btn btn-primary">Enviar</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GlazierPostulate;