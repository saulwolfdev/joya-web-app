import Image from 'next/image'

const GlazierPostulateWithinForm = () => {
    return (
        <div className="home-vidrieristas section">
            <div className="container-fluid">
                <div className="row">
                    <div className="offset-lg-1 col-md-4 misc col-12">
                        <Image src="/vidrierista-end.jpg" alt="Podes ser vidrierista de Joya" className="img-fluid" width="302" height="220"/>	
                    </div>
                    <div className="col content">
                        <h3>Comenzá a gestionar tus ingresos!</h3>
                        <p>Dejanos tus datos de contacto para empezar.</p>
                        <a href="#" className="btn btn-primary">Postulate</a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default GlazierPostulateWithinForm;