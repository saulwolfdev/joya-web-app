import Image from 'next/image'

const GlazierProfits = () => {
    return (
        <div className="home-beneficios-vidrierista section">
            <div className="container-fluid">
                <h3>Te conectamos con locales de Capital Federal para que <strong>generes ganancias</strong> limpiando vidrieras</h3>
                <div className="row">
                    <div className="col-sm-6 col-md-4 beneficio-vidrierista">
                        <div className="img-block">
                            <Image className="img-fluid" src="/beneficio-v1.jpg" alt="Solicitá un vidrierista" width="112" height="82"/>
                        </div>
                        <div className="text">
                            <h5>Gestioná tus ingresos de hasta $20.000 mensuales</h5>
                            <p>Vos elegís los recorridos de limpieza que te resulten más convenientes. No te exigimos un mínimo de tiempo. Lo que trabajás, lo cobrás.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 beneficio-vidrierista">
                        <div className="img-block">
                            <Image className="img-fluid" src="/beneficio-v2.jpg" alt="Elegí día, horario y frecuencia" width="110" height="108"/>
                        </div>
                        <div className="text">
                            <h5>Administra tu propio tiempo</h5>
                            <p>Los recorridos que te proponemos son de hasta 6hs diarias. Son ideales para aprovechar el día y combinar con otro trabajo o estudio al terminar.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 beneficio-vidrierista">
                        <div className="img-block">
                            <Image className="img-fluid" src="/beneficio-v3.jpg" alt="Pago seguro" width="114" height="74"/>
                        </div>
                        <div className="text">
                            <h5>Productos de limpieza incluídos</h5>
                            <p>No necesitás más que tu bici, del resto nos ocupamos nosotros. Con nuestras sesiones informativas contás con toda la capacitación necesaria para empezar!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlazierProfits;