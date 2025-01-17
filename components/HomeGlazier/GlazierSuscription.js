import Glazier from '../../Entities/glazier.ts'

const GlazierSuscription = () => {

    async function registerGlazier(e){
        e.preventDefault(e);
        const email = e.target.email.value;
        const cel = e.target.celular.value;
        const firstName = e.target.nombre.value;
        const lastName = e.target.apellido.value;

        var newGlazier = new Glazier(email,lastName,firstName,"Postulante",cel,null);
        newGlazier.Insert(newGlazier);

        Array.from(document.querySelectorAll("input")).forEach(
           input => (input.value = "")
        );

    };
    return (
        <form className="subscription-form form" onSubmit={registerGlazier}>
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
                <button type="submit" className="btn btn-primary">Enviar</button>
            </div>
        </form>
    );
}

export default GlazierSuscription;