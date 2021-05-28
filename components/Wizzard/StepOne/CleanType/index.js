const CleanType = () => {
    return (
        <div className="form-group row">
            <div className="col-auto d-none d-md-block">
                {  /* <Image src="/ico-balde-form.jpg" alt="Limpiamos tu vidriera" className="img-fluid"/> */ /* TODO review*/ }
            </div>
            <div className="col">
                <h4>Tipo de limpieza incluida</h4>
                <p>Vamos a limpiar tus vidrieras de todo tipo de suciedad que sea soluble al agua. No podemos limpiar tus vidrieras de graffitis o pintura al ácido.</p>
                <p><input type="checkbox"/>Entiendo y acepto lo que está incluido.</p>
            </div>
        </div>
    );
}

export default CleanType;