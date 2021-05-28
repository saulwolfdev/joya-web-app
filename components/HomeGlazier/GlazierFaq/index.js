const faqs = [
    {
        key: "headingOne",
        target: "collapseOne",
        question: "¿Qué es un vidrierista?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla dui justo, volutpat mollis ex iaculis eget. Phasellus metus est, vulputate in ultrices quis, volutpat ut ex. Aliquam erat volutpat. Aenean tincidunt vehicula malesuada. </p><p>Vestibulum sollicitudin enim et elit dapibus tristique. Proin pharetra, metus ut tempus rhoncus, enim leo elementum ex, eget eleifend nibh purus quis tortor. Proin aliquet commodo lobortis. Sed hendrerit massa mi, posuere blandit ex mollis in. Etiam ex ligula, pretium nec pharetra vel, pretium ac sem. Pellentesque tincidunt facilisis ligula."
    },
    {
        key: "headingTwo",
        target: "collapseTwo",
        question: "¿Qué es un vidrierista?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla dui justo, volutpat mollis ex iaculis eget. Phasellus metus est, vulputate in ultrices quis, volutpat ut ex. Aliquam erat volutpat. Aenean tincidunt vehicula malesuada. </p><p>Vestibulum sollicitudin enim et elit dapibus tristique. Proin pharetra, metus ut tempus rhoncus, enim leo elementum ex, eget eleifend nibh purus quis tortor. Proin aliquet commodo lobortis. Sed hendrerit massa mi, posuere blandit ex mollis in. Etiam ex ligula, pretium nec pharetra vel, pretium ac sem. Pellentesque tincidunt facilisis ligula."
    },
    {
        key: "headingThree",
        target: "collapseThree",
        question: "¿Qué es un vidrierista?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla dui justo, volutpat mollis ex iaculis eget. Phasellus metus est, vulputate in ultrices quis, volutpat ut ex. Aliquam erat volutpat. Aenean tincidunt vehicula malesuada. </p><p>Vestibulum sollicitudin enim et elit dapibus tristique. Proin pharetra, metus ut tempus rhoncus, enim leo elementum ex, eget eleifend nibh purus quis tortor. Proin aliquet commodo lobortis. Sed hendrerit massa mi, posuere blandit ex mollis in. Etiam ex ligula, pretium nec pharetra vel, pretium ac sem. Pellentesque tincidunt facilisis ligula."
    },
];

const GlazierFaq = () => { // TODO review: styles
    return (
        <div className="home-faq section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-lg-9 preguntas-frecuentes">
                        <div className="faq-container">
                            <h3>Preguntas frecuentes</h3>
                            <div className="accordion accordion-flush" id="accordionFaq">
                                { faqs.map((faq) => {
                                    return (
                                        <div className="accordion-item" key={faq.key}>
                                            <h2 className="accordion-header" id={faq.key}>
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#" + faq.target} aria-expanded="true" aria-controls="collapseOne">
                                                    {faq.question}
                                                </button>
                                            </h2>
                                            <div id={faq.target} className="accordion-collapse collapse show" aria-labelledby={faq.key} data-bs-parent="#accordionFaq">
                                                <div className="accordion-body">
                                                    <p>{faq.answer}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }) }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GlazierFaq;