import React, { Component } from "react";

class InputLocalName extends Component {

    constructor() {
        super();
        this.state = {
            
        };
        this.onInputchange = this.onInputchange.bind(this);
    }
    
    onInputchange(event) {
        this.setState({
            [event.target.value]: event.target.value
        });
    }

    render() {
        return (
            <div className="form-element">
                <label htmlFor="local" className="form-label">Nombre del local</label>
                <select className="form-control" placeholder="Nombre del local..." name="local" aria-label="Nombre del local...">
                    <option defaultValue>Seleccioná un local</option>
                    <option value="1">+Nuevo local</option>
                </select>
            </div>
        );
    }
}

export default InputLocalName;