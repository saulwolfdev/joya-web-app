import Image from 'next/image'

const GlazierInfo = () => {
    return (
        <div className="home-vidrieristas section">
            <div className="container-fluid">
                <div className="row">
                    <div className="offset-lg-1 col-md-4 misc col-12">
                        <Image src="/vidrierista.jpg" alt="Podes ser vidrierista de Joya" width={302} height={220} />       
                    </div>
                    <div className="col content">
                        <h3>¿Querés ser vidrierista?</h3>
                        <p>Registrate y generá las ganancias que vos quieras</p>
                        <a href="#" className="btn btn-primary">Informate acá</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GlazierInfo;