import Img from '../Img';

const profits = [
    {
        key: "01",
        image: "/beneficio-v1.jpg",
        alt: "Solicitá un vidrierista",
        width: 112,
        height: 82,
        title: "Gestioná tus ingresos de hasta $20.000 mensuales",
        text: "Vos elegís los recorridos de limpieza que te resulten más convenientes. No te exigimos un mínimo de tiempo. Lo que trabajás, lo cobrás."
    },
    {
        key: "02",
        image: "/beneficio-v2.jpg",
        alt: "Elegí día, horario y frecuencia",
        width: 110,
        height: 108,
        title: "Administra tu propio tiempo",
        text: "Los recorridos que te proponemos son de hasta 6hs diarias. Son ideales para aprovechar el día y combinar con otro trabajo o estudio al terminar."
    },
    {
        key: "03",
        image: "/beneficio-v3.jpg",
        alt: "Pago seguro",
        width: 114,
        height: 74,
        title: "Productos de limpieza incluídos",
        text: "No necesitás más que tu bici, del resto nos ocupamos nosotros. Con nuestras sesiones informativas contás con toda la capacitación necesaria para empezar!"
    }
]

const Profit = ({profit}) => {
    return (
        <div className="col-sm-6 col-md-4 beneficio-vidrierista">
            <div className="img-block">
                <Img className="img-fluid" src={profit.image} alt={profit.alt} width={profit.width} height={profit.height}/>
            </div>
            <div className="text">
                <h5>{profit.title}</h5>
                <p>{profit.text}</p>
            </div>
        </div>
    );
}

const GlazierProfits = () => {
    return (
        <div className="home-beneficios-vidrierista section">
            <div className="container-fluid">
                <h3>Te conectamos con locales de Capital Federal para que <strong>generes ganancias</strong> limpiando vidrieras</h3>
                <div className="row">
                    { profits.map((profit) => {return <Profit profit={profit} key={profit.key}/>}) }
                </div>
            </div>
        </div>
    );
};

export default GlazierProfits;