import Img from '../../Img';

const CleanType = ({handleAccept}) => { 
    return (
        <>
            <div className="form-group row">
                <div className="col-auto d-none d-md-block">
                    <Img src="/ico-balde-form.jpg" alt="Limpiamos tu vidriera" className="img-fluid"/>
                </div>
                <div className="col">
                    <h4>Tipo de limpieza incluida</h4>
                    <p>Vamos a limpiar tus vidrieras de todo tipo de suciedad que sea soluble al agua. No podemos limpiar tus vidrieras de graffitis o pintura al ácido.</p>
                    <p><input name="accept" onChange={handleAccept} type="checkbox"/>Entiendo y acepto lo que está incluido.</p>
                </div>
            </div>
        </>
    );
}

export default CleanType;