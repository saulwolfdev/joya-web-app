const PurchaseDetails = ({subtotal, withDiscount, discount, percent, total}) => {

    return (
        <div className="col-xl-4 col-md-5 col-detalle">
            <h4>Detalle de compra</h4>
            <table className="detalle-compra">
                <tbody>
                    <tr className="item">
                        <td className="descripcion">Subtotal</td>
                        <td className="valor"><span className="currency">$</span><span className="price">{subtotal}</span></td>
                    </tr>
                    <tr className="item">
                        <td className="descripcion">Descuentos</td>
                        {
                            withDiscount ?
                                <td className="valor destacado">-<span className="currency">$</span><span className="price">{discount}</span><span className="percent">{"(" + percent + ")"}</span></td>
                            :
                                <></>
                        }
                    </tr>
                </tbody>
                <tfoot>
                    <tr className="total">
                        <td className="descripcion">Total</td>
                        <td className="valor"><span className="currency">$</span><span className="price">{total}</span></td>
                    </tr>
                </tfoot>
            </table>
            <p><a href="#">Tenés un cupón de descuento?</a></p>
        </div>
    );
}

export default PurchaseDetails;