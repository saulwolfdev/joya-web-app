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
                            <div className="subscription-form form">
                                <div className="form-element">
                                    <label htmlFor="email" className="form-label sr-only">Email</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fal fa-envelope"></i></span>
                                        <input type="email" className="form-control" name="email" placeholder="Mail"/>
                                    </div>
                                    
                                </div>
                                <div className="row">
                                    <div className="col pe-0 form-element">
                                        <label htmlFor="nombre" className="form-label sr-only">Nombre</label>
                                        <div className="input-group">
                                            <span className="input-group-text"><i className="fal fa-user-circle"></i></span>
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
                                        <span className="input-group-text"><i className="fal fa-mobile-android-alt"></i></span>
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
        </div>
    );
};

export default BeGlazier;