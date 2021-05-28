import Image from 'next/image'

const profits = [
    {
        key:"01",
        image: "/xq_01.jpg",
        width: 142,
        height: 86,
        title: "Mejorá la exposición de tus productos",
        text: "Con tus vidrieras siempre limpias, tu local se luce."
    },
    {
        key:"02",
        image: "/xq_02.jpg",
        width: 142,
        height: 86,
        title: "Programá tus visitas y despreocupate",
        text: "A la hora que digas, las veces que quieras, ahí estaremos."
    },
    {
        key:"03",
        image: "/xq_03.jpg",
        width: 111,
        height: 102,
        title: "Mantené tus empleados enfocados",
        text: "Mientras hacen su trabajo, nuestros profesionales dejarán perfectas tus vidrieras. "
    },
    {
        key:"04",
        image: "/xq_04.jpg",
        width: 117,
        height: 91,
        title: "Evitá movimientos confusos de caja ",
        text: "Pagá con tarjeta de crédito y recibí factura A o C, según tu necesidad."
    },
    {
        key:"05",
        image: "/xq_05.jpg",
        width: 119,
        height: 106,
        title: "Evitá el trabajo informal",
        text: "Evitá los riesgos del trabajo informal habitual en este tipo de servicio."
    },
    {
        key:"06",
        image: "/xq_06.jpg",
        width: 130,
        height: 112,
        title: "Cubrite ante urgencias",
        text: "Ante un imprevisto solicitá que un vidrierista te visite en el acto."
    }
]

const Profit = ({profit}) => {
    return (
        <div className="beneficio col-6" key={profit.key}>
            <div className="img-block">
                <img className="img-fluid" src={profit.image}  width={profit.width} height={profit.height} alt={profit.title}/>         
            </div>
            <div className="text">
                <h5 className="title">{profit.title}</h5>
                <p>{profit.text}</p>
            </div>
        </div>
    )
}

export default HomeProfits = () => {
    return (
        <div className="home-beneficios section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-7 col-lg-6 beneficios">
                        <h3>¿Por qué elegir Joya?</h3>
                        <div className="row">
                            { profits.map((profit) => {return <Profit profit={profit}/>}) }
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