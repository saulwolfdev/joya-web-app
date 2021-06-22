import React,{useState, useEffect} from 'react';

const Window = ({n}) => {

    const DEFAULT = 2;
    const MIN = 1;
    const MAX = 4;

    const [sizeH, setSizeH] = useState(DEFAULT);
    const [sizeW, setSizeW] = useState(DEFAULT);

    const handleSizeH = (e) => {
        let newValue = Number.parseFloat(e.target.value);
        setSizeH(newValue);
    }

    const handleSizeW = (e) => {
        let newValue = Number.parseFloat(e.target.value);
        setSizeW(newValue);
    }

    useEffect(()=>{
        if(sizeH > MAX) {
            setSizeH(MAX);
        } else if (sizeH < MIN) {
            setSizeH(MIN);
        }
        if(sizeW > MAX) {
            setSizeW(MAX);
        } else if (sizeW < MIN) {
            setSizeW(MIN);
        }
    }); 

    return (
        <div className="ventana">
            <h5>Paño #{n}</h5>
            <div className="row">
                <div className="col-sm-8 medidas">
                    <div className="row">
                        <div className="col-auto icon">
                            <i className="far fa-arrows-v"/>
                        </div>
                        <div className="col">
                            <input type="range" className="form-range" id={"altura"+n} min={MIN} max={MAX} step="0.5" value={sizeH} onChange={handleSizeH} data-vidriera={n} data-variable="alto"/>
                        </div>
                        <div className="col-auto">
                            <div className="input-group">
                                <input type="text" className="form-control form-aux" name={"altura"+n} data-vidriera={n} data-variable="alto" onKeyUp={handleSizeH} defaultValue={DEFAULT}/>
                                <span className="input-group-text">m</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-auto"><i className="far fa-arrows-h"/></div>
                        <div className="col">
                            <input type="range" className="form-range" id={"ancho"+n} min={MIN} max={MAX}  step="0.5" value={sizeW} onChange={handleSizeW} data-vidriera={n} data-variable="ancho"/>
                        </div>
                        <div className="col-auto">
                            <div className="input-group">
                                <input type="text" className="form-control form-aux" name={"ancho"+n} data-vidriera={n} data-variable="ancho" onKeyUp={handleSizeW} defaultValue={DEFAULT}/>
                                <span className="input-group-text">m</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-sm-4 representacion">
                    <div className="vidriera" id={"vidriera"+n} data-maxwidth="4" data-maxheight="4" style={{width: '50%', height: '50%'}} data-ancho="2" data-alto="2">
                        <p className="value">4m<sup>2</sup></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const WindowSizeSection = () => {

    const [inputList, setInputList] = useState([<Window key={1} n={1}/>]);

    const onAddBtnClick = event => {
        setInputList(inputList.concat(<Window key={inputList.length+1} n={inputList.length+1}/>));
    };

    const vidrieraRange= () => {
        let ventanaContainer = document.querySelector('.ventanas');
        let rangeSelector = 'input[type=range]';
        ventanaContainer.addEventListener('change', function(event) {
            let possibleTargets = ventanaContainer.querySelectorAll(rangeSelector);
            let target = event.target;

            for (let i = 0, l = possibleTargets.length; i < l; i++) {
              let el = target;
              let p = possibleTargets[i];

              while (el && el !== ventanaContainer) {
                if (el === p) {
                    let modificacion = [];
                    modificacion.vidriera = target.dataset.vidriera;
                    modificacion.variable = target.dataset.variable;
                    modificacion.value = target.value;
                    updateTextInput(modificacion);
                    updateVidriera(modificacion);
                }
                el = el.parentNode;
              }
            }
          });
    };

    const updateTextInput = (modificacion) => {
        document.querySelector('input.form-aux[data-vidriera="' + modificacion.vidriera + '"][data-variable="' + modificacion.variable + '"]').value = modificacion.value;
    };
    
    const updateVidriera = (modificacion) => {
        let vidriera = document.querySelector('#vidriera' + modificacion.vidriera);
        let maxWidth = vidriera.dataset.maxwidth;
        let maxHeight = vidriera.dataset.maxheight;

        if ('alto' == modificacion.variable) {
            vidriera.dataset.alto = modificacion.value;
            vidriera.style.height = (100 * modificacion.value / maxHeight)  + '%';
        }
        if ('ancho' == modificacion.variable) {
            vidriera.dataset.ancho = modificacion.value;
            vidriera.style.width = (100 * modificacion.value / maxWidth) + '%';
        }
        vidrieraMetrosCuadrados(modificacion.vidriera);
    };

    const vidrieraMetrosCuadrados = (numVidriera) => {
        let vidriera = document.querySelector('#vidriera' + numVidriera);
        let metroscuadrados = vidriera.dataset.alto * vidriera.dataset.ancho;
        vidriera.querySelector('.value').innerHTML = metroscuadrados + 'm<sup>2</sup>';
    };

    useEffect(()=>{
        vidrieraRange();
    });
    return (
        <div className="ventanas"> 
            <h4>Tamaño de la vidriera</h4>
            <p>A continuación especificá el tamaño aproximado de tu vidriera. 
            <br/><strong>El alto y ancho máximo de cada paño de ventana es de 4 metros.</strong></p>
            {inputList}
            <button className="btn-set" onClick={onAddBtnClick}>+ Agregar otro paño de ventana</button>
        </div>
    );
}

export default WindowSizeSection;