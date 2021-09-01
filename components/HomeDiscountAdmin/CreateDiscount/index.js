import { useState } from 'react';

const CreateDiscount = () => {

    const [discountType, setDiscountType] = useState("none")
    const [code, setCode] = useState("");
    const [fixedAmount, setFixedAmount] = useState(0);
    const [percentage, setPercentage] = useState("0");
    const [minimunExpense, setMinimumExpense] = useState(0);
    const [maximumExpense, setMaximumExpense] = useState(0); // TODO, validar que en los valores de input se usen numeros, o no sea NaN (cuando ingresan texto)
    const [dueDate, setDueDate] = useState("");
    const [limitsOfUse, setLimitsOfUse] = useState(0);
    const [discountCap, setDiscountCap] = useState(0);

    const handleDiscountType = (e) => {
        e.preventDefault();
        setDiscountType(e.target.value);
    }

    const handleCode = (e) => {
        e.preventDefault();
        setCode(e.target.value);
    }

    const handleFixedAmount = (e) => {
        e.preventDefault();
        setFixedAmount(e.target.value);
    }

    const handlePercentage = (e) => {
        e.preventDefault();
        setPercentage(e.target.value);
    }

    const handleMinimumExpense = (e) => {
        e.preventDefault();
        setMinimumExpense(e.target.value);
    }

    const handleMaximumExpense = (e) => {
        e.preventDefault();
        setMaximumExpense(e.target.value);
    }

    const handleDuetDate = (e) => {
        e.preventDefault();
        setDueDate(e.target.value);
    }

    const handleLimitsOfUse = (e) => {
        e.preventDefault();
        setLimitsOfUse(e.target.value);
    }

    const handleDiscountCap = (e) => {
        e.preventDefault();
        setDiscountCap(e.target.value);
    }

    const validForm = () => {
        return (discountType === "monto" && fixedAmount && fixedAmount > 0 && code !== "") || // TODO enum
            (discountType === "porcentaje" && percentage && percentage > 0)
    }

    const save = (e) => {
        e.preventDefault();
        if (validForm()) {
            // TODO call firebase
        }
    }

    return (
        <div class="admin-descuento-crear">
            <div class="container-fluid">
                <div className="row">
                    <div className="col-12 breadcrumb">
                        <div className="inner-container">
                            <a href="admin-descuentos.html"><i className="far fa-arrow-left" /> Volver</a>
                        </div>
                    </div>
                    <div className="col-12 card-page-container">
                        <div className="card-page-content">
                            <div className="inner-container">
                                <div className="row">
                                    <div className="col-xl-9">
                                        <h3>Nuevo descuento</h3>
                                        <div className="form form-block">
                                            <div className="row">
                                                <div className="col form-element">
                                                    <label htmlFor="codigo" className="form-label">Código de descuento<span className="obligatorio">*</span></label>
                                                    <input type="text" className="form-control" name="codigo" placeholder="CODIGODEDESCUENTO" onChange={handleCode} />
                                                    <p className="form-text">Se recomienda utilizar un código fácil de recordar. Sin embargo, se debe evitar que sea adivinable (por ejemplo, si se pone DESCUENTO1, DESCUENTO2,... un usuario podría probar si existen en DESCUENTO3, etc).</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col form-element">
                                                    <label htmlFor="tipo-descuento" className="form-label">Tipo<span className="obligatorio">*</span></label>
                                                    <select name="tipo-descuento" className="form-select" aria-label="Tipo de descuento" onClick={handleDiscountType}>
                                                        <option value="none" selected>Elegir tipo</option>
                                                        <option value="monto">Monto fijo</option>
                                                        <option value="porcentaje">Porcentaje</option>
                                                    </select>
                                                </div>
                                                {
                                                    discountType === "monto" ?
                                                        <div className="col form-element">
                                                            <label htmlFor="monto" className="form-label">Monto<span className="obligatorio">*</span></label>
                                                            <div className="input-group">
                                                                <span className="input-group-text">$</span>
                                                                <input type="text" className="form-control" placeholder={150} name="monto" onChange={handleFixedAmount} />
                                                            </div>
                                                        </div>
                                                        :
                                                        (
                                                            discountType === "porcentaje" ?
                                                                <div className="col form-element">
                                                                    <label htmlFor="porcentaje" className="form-label">Porcentaje<span className="obligatorio">*</span></label>
                                                                    <div className="input-group">
                                                                        <input type="text" className="form-control" placeholder="150" name="porcentaje" onChange={handlePercentage} />
                                                                        <span className="input-group-text">%</span>
                                                                    </div>
                                                                </div>
                                                                :
                                                                <div className="col form-element" />
                                                        )
                                                }
                                            </div>
                                            <div className="row">
                                                {
                                                    discountType === "monto" ?
                                                        <>
                                                            <div className="col form-element">
                                                                <label htmlFor="gastominimo" className="form-label">Gasto mínimo</label>
                                                                <div className="input-group">
                                                                    <span className="input-group-text">$</span>
                                                                    <input type="text" className="form-control" name="gastominimo" onChange={handleMinimumExpense} />
                                                                </div>
                                                            </div>
                                                            <div className="col form-element">
                                                                <label htmlFor="gastomaximo" className="form-label">Gasto máximo</label>
                                                                <div className="input-group">
                                                                    <span className="input-group-text">$</span>
                                                                    <input type="text" className="form-control" name="gastomaximo" onChange={handleMaximumExpense} />
                                                                </div>
                                                            </div>
                                                        </>
                                                        :
                                                        <div className="col form-element">
                                                            <label htmlFor="tope" className="form-label">Tope descuento</label>
                                                            <div className="input-group">
                                                                <span className="input-group-text">$</span>
                                                                <input type="text" className="form-control" name="tope" onChange={handleDiscountCap}/>
                                                            </div>
                                                        </div>
                                                }
                                            </div>
                                            {
                                                discountType === "monto" || discountType === "porcentaje" ?
                                                    <div className="row">
                                                        <div className="col form-element">
                                                            <label htmlFor="vencimiento" className="form-label">Fecha de vencimiento</label>
                                                            <input type="date" name="vencimiento" className="form-control" onChange={handleDuetDate} />
                                                        </div>
                                                        <div className="col form-element">
                                                            <label htmlFor="limiteusos" className="form-label">Límite de usos</label>
                                                            <input type="text" name="limiteusos" className="form-control" onChange={handleLimitsOfUse} />
                                                        </div>
                                                    </div>
                                                    :
                                                    <></>
                                            }
                                        </div>
                                        <div className="btn-set">
                                            <button className="btn btn-primary" disabled={!validForm()} onClick={save}>Guardar cambios</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateDiscount;