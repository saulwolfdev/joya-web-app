import Image from 'next/image'

const GlazierPostulateWithinForm = () => {
    return (
        <div class="home-vidrieristas section">
            <div class="container-fluid">
                <div class="row">
                    <div class="offset-lg-1 col-md-4 misc col-12">
                        <Image src="/vidrierista-end.jpg" alt="Podes ser vidrierista de Joya" class="img-fluid" width="302" height="220"/>	
                    </div>
                    <div class="col content">
                        <h3>Comenzá a gestionar tus ingresos!</h3>
                        <p>Dejanos tus datos de contacto para empezar.</p>
                        <a href="#" class="btn btn-primary">Postulate</a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default GlazierPostulateWithinForm;