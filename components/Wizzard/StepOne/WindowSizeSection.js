import React,{useState, useEffect} from 'react';

const Window = ({n, handleWindowTotalSize}) => {

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
        handleWindowTotalSize(n, sizeH*sizeW)
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

const WindowSizeSection = ({handleSurfaceAprox}) => {

    const [windowTotalSize, setWindowTotalSize] = useState([]);
    const handleWindowTotalSize = (key, total) => {
        if(windowTotalSize.length === 0) {
            setWindowTotalSize([{key, total}]);
        } else {
            setWindowTotalSize([{key, total}]); // TODO No, bad code
        }
    }

    const [inputList, setInputList] = useState([<Window handleWindowTotalSize={handleWindowTotalSize} key={1} n={1}/>]);
    

    const onAddBtnClick = event => {
        event.preventDefault();
        setInputList(inputList.concat(<Window key={inputList.length+1} n={inputList.length+1} handleWindowTotalSize={handleWindowTotalSize}/>));
    };

    const windowRange= () => {
        let windowContainer = document.querySelector('.ventanas');
        let rangeSelector = 'input[type=range]';
        windowContainer.addEventListener('change', function(event) {
            let possibleTargets = windowContainer.querySelectorAll(rangeSelector);
            let target = event.target;

            for (let i = 0, l = possibleTargets.length; i < l; i++) {
              let el = target;
              let p = possibleTargets[i];

              while (el && el !== windowContainer) {
                if (el === p) {
                    let modification = [];
                    modification.window = target.dataset.vidriera;
                    modification.variable = target.dataset.variable;
                    modification.value = target.value;
                    updateTextInput(modification);
                    updateVidriera(modification);
                }
                el = el.parentNode;
              }
            }
          });
    };

    const updateTextInput = (modification) => {
        document.querySelector('input.form-aux[data-vidriera="' + modification.window + '"][data-variable="' + modification.variable + '"]').value = modification.value;
    };
    
    const updateVidriera = (modification) => {
        let window = document.querySelector('#vidriera' + modification.window);
        let maxWidth = window.dataset.maxwidth;
        let maxHeight = window.dataset.maxheight;

        if ('alto' == modification.variable) {
            window.dataset.alto = modification.value;
            window.style.height = (100 * modification.value / maxHeight)  + '%';
        }
        if ('ancho' == modification.variable) {
            window.dataset.ancho = modification.value;
            window.style.width = (100 * modification.value / maxWidth) + '%';
        }
        windowSquareMeter(modification.window);
    };

    const windowSquareMeter = (windowKey) => {
        let window = document.querySelector('#vidriera' + windowKey);
        let squareMeter = window.dataset.alto * window.dataset.ancho;
        window.querySelector('.value').innerHTML = squareMeter + 'm<sup>2</sup>';
    };

    useEffect(()=>{
        handleSurfaceAprox(windowTotalSize.length === 0 ? 0 : windowTotalSize.map(i => i.total).reduce((a, b) => a + b)) // TODO as String
        windowRange();
    });
    return (
        <div className="ventanas"> 
            <h4>Tamaño de la vidriera</h4>
            <p>A continuación especificá el tamaño aproximado de tu vidriera. 
            <br/><strong>El alto y ancho máximo de cada paño de ventana es de 4 metros.</strong></p>
            {inputList}
            <a href="#" className="btn-set" onClick={onAddBtnClick}>+ Agregar otro paño de ventana</a>
        </div>
    );
}

export default WindowSizeSection;