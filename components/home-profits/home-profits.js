import Image from 'next/image'

const HomeProfits = () => {
    return (
        <div className="home-beneficios section">
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-7 col-lg-6 beneficios">
                <h3>¿Por qué elegir Joya?</h3>
                <div className="row">
                    <div className="beneficio col-6">
                    <div className="img-block">
                    <img className="img-fluid" src="/xq_01.jpg"  width="142" height="86" alt="Programá tus visitas y despreocupate"/>         
                        </div>
                    <div className="text">
                        <h5 className="title">Mejorá la exposición de tus productos</h5>
                        <p>Con tus vidrieras siempre limpias, tu local se luce.</p>
                    </div>
                    </div>
                    <div className="beneficio col-6">
                    <div className="img-block">
                        <img className="img-fluid" src="/xq_02.jpg"  width="142" height="86" alt="Programá tus visitas y despreocupate"/>
                    </div>
                    <div className="text">
                        <h5 className="title">Programá tus visitas y despreocupate</h5>
                        <p>A la hora que digas, las veces que quieras, ahí estaremos.</p>
                    </div>
                    </div>
                    <div className="beneficio col-6">
                    <div className="img-block"><img className="img-fluid" src="/xq_03.jpg"  width="111" height="102" alt="Mantené tus empleados enfocados"/></div>
                    <div className="text">
                        <h5 className="title">Mantené tus empleados enfocados</h5>
                        <p>Mientras hacen su trabajo, nuestros profesionales dejarán perfectas tus vidrieras. </p>
                    </div>
                    </div>
                    <div className="beneficio col-6">
                    <div className="img-block"><img className="img-fluid" src="/xq_04.jpg"  width="117" height="91" alt="Evitá movimientos confusos de caja"/></div>
                    <div className="text">
                        <h5 className="title">Evitá movimientos confusos de caja </h5>
                        <p>Pagá con tarjeta de crédito y recibí factura A o C, según tu necesidad.</p>
                    </div>
                    </div>
                    <div className="beneficio col-6">
                    <div className="img-block"><img className="img-fluid" src="/xq_05.jpg"  width="119" height="106" alt="Evitá el trabajo informal"/></div>
                    <div className="text">
                        <h5 className="title">Evitá el trabajo informal</h5>
                        <p>Evitá los riesgos del trabajo informal habitual en este tipo de servicio.</p>
                    </div>
                    </div>
                    <div className="beneficio col-6">
                    <div className="img-block"><img className="img-fluid" src="/xq_06.jpg"  width="130" height="112" alt="Cubrite ante urgencias"/></div>
                    <div className="text">
                        <h5 className="title">Cubrite ante urgencias</h5>
                        <p>Ante un imprevisto solicitá que un vidrierista te visite en el acto.</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-md-5 offset-lg-1 miscelaneas">
                <Image src="/beneficios-side.jpg" alt="Joya se ocupa de que tu vidriera esté siempre limpia" width={495} height={784} />          	    				
                </div>
            </div>
            </div>
        </div>
    )
}

export default HomeProfits;