import React, { Component } from "react";
import Img from '../../Img';
import InputLocalName from './InputLocalName'

class CleanType extends Component {

    constructor() {
        super();
        this.state = {
            
        };
        this.onInputchange = this.onInputchange.bind(this);
    }
    
    onInputchange(event) {
        this.props.info.accept = event.target.value;
    }

    render() {
        return (
            <>
                <InputLocalName/>
                <div className="form-group row">
                    <div className="col-auto d-none d-md-block">
                        <Img src="/ico-balde-form.jpg" alt="Limpiamos tu vidriera" className="img-fluid"/>
                    </div>
                    <div className="col">
                        <h4>Tipo de limpieza incluida</h4>
                        <p>Vamos a limpiar tus vidrieras de todo tipo de suciedad que sea soluble al agua. No podemos limpiar tus vidrieras de graffitis o pintura al ácido.</p>
                        <p><input name="accept" type="checkbox"/>Entiendo y acepto lo que está incluido.</p>
                    </div>
                </div>
            </>
        );
    }
}

export default CleanType;