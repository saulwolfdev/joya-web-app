import React, { Component } from "react";

const InputDirection = ({inputDirection, handleInputDirection}) => {
    
    const onInputchange = (event) => {
        handleInputDirection(event.target.value);
    }

    return (
        <div className="form-element">
            <label htmlFor="direccion" className="form-label">Dirección</label>
            <div className="input-group">
                <span className="input-group-text"><i className="far fa-map-marker-alt"/></span>
                <input type="text" className="form-control" placeholder="Dirección del local..." value={inputDirection} onChange={onInputchange} name="direction"/>
            </div>
            <p className="form-text">El servicio sólo aplica a vidrieras en planta baja, de un máximo de 4 metros de altura.</p> 
        </div>
    );

}

export default InputDirection;