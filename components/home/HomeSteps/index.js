const steps = [
    {
        key: "01",
        image: "/step1.jpg",
        description: "Solicitá un vidrierista",
        title: "Solicitá un vidrierista",
        text: "indicando ubicación, tamaño de la vidriera.",
        width: 80,
        height: 67
    },
    {
        key: "02",
        image: "/step2.jpg",
        description: "Elegí día, horario y frecuencia",
        title: "Vos elegís día, horario y frecuencia",
        text: "Los días que quieras, a la hora que quieras.",
        width: 67,
        height: 68
    },
    {
        key: "03",
        image: "/step3.jpg",
        description: "Pago seguro",
        title: "Pagá de forma segura",
        text: "con tu tarjeta de crédito o adhieriéndote al débito automático.",
        width: 76,
        height: 67
    }
]

const Step = ({step}) => {
    return (
        <div className="col step" key={step.key}>
            <div className="num">{step.step}</div>
            <div className="img-block">
                <img className="img-fluid" src={step.image} alt={step.description} width={step.width} height={step.height}/>       
            </div>
            <div className="text">
                <h4>{step.title}</h4>
                <p>{step.text}</p>
            </div>
        </div>
    )
}

export default HomeSteps = () => {
    return (
        <div className="home-steps section">
            <div className="container-fluid">
                <div className="row">
                    { steps.map((step) => {return <Step step={step}/>}) }
                </div>
            </div>
        </div>
    )
}