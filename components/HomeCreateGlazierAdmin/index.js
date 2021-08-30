import { useState } from 'react';

const HomeCreateGlazierAdmin = () => {
    return (
        <div className="main-content">
            <div className="admin-recorrido-armar">
                <div className="container-fluid">
                    <div className="row">
                        <HomeCreateGlazierAdmin.Return/>
                        <HomeCreateGlazierAdmin.Form/>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Return = () => {

    const handleReturn = (e) => {
        e.preventDefault();
    }

    return (
        <div className="col-12 breadcrumb">
            <div className="inner-container">
                <a href="admin-vidrieristas.html" onClick={handleReturn}><i className="far fa-arrow-left"/> Volver</a>
            </div>
        </div>
    );
}
HomeCreateGlazierAdmin.Return = Return;

const Form = () => {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [cbu, setCbu] = useState("");
    const [note, setNote] = useState("");
    const [type, setType] = useState("Postulante");
    const [description, setDescription] = useState("");

    const handleName = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const handleLastName = (e) => {
        e.preventDefault();
        setLastName(e.target.value);
    }

    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const handlePhone = (e) => {
        e.preventDefault();
        setPhone(e.target.value);
    }

    const handleCbu = (e) => {
        e.preventDefault();
        setCbu(e.target.value);
    }

    const handleNote = (e) => {
        e.preventDefault();
        setNote(e.target.value);
    }

    const handleType = (e) => {
        e.preventDefault();
        setType(e.target.value);
    }

    const handleDescription = (e) => {
        e.preventDefault();
        setDescription(e.target.value);
    }

    const createGlazier = (e) => {
        e.preventDefault();
        if(
            name !== "" &&
            lastName !=="" &&
            email !== "" &&
            phone !== "" &&
            cbu !== ""
        ){ // TODO, confirmar condiciones
            // TODO call firebase
        } else {
            // Error
        }
    }

    return(
        <div className="col-12 card-page-container">
            <div className="card-page-content">
                <div className="inner-container">
                    <div className="row">
                        <div className="col-xl-10">
                            <h3>Nuevo vidrierista</h3>
                            <div className="form form-block">
                                <div className="row">
                                    <div className="col form-element">
                                        <label htmlFor="nombre" className="form-label">Nombre<span className="obligatorio">*</span></label>
                                        <input type="text" className="form-control" name="nombre" placeholder="Nombre" onChange={handleName}/>
                                    </div>
                                    <div className="col form-element">
                                        <label htmlFor="apellido" className="form-label">Apellido<span className="obligatorio">*</span></label>
                                        <input type="text" className="form-control" name="apellido" placeholder="Apellido" onChange={handleLastName}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col form-element">
                                        <label htmlFor="telefono" className="form-label">Teléfono<span className="obligatorio">*</span></label>
                                        <input type="text" className="form-control" placeholder name="telefono" onChange={handlePhone}/>
                                    </div>
                                    <div className="col form-element">
                                        <label htmlFor="email" className="form-label">Email<span className="obligatorio">*</span></label>
                                        <input type="email" className="form-control" placeholder name="email" onChange={handleEmail}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col form-element">
                                        <label htmlFor="cbu" className="form-label">CBU</label>
                                        <input type="text" className="form-control" placeholder name="cbu" onChange={handleCbu}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col form-element">
                                        <label htmlFor="notas" className="form-label">Notas</label>
                                        <textarea className="form-control" name="notas" rows={3} defaultValue={""} onChange={handleNote}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 form-element">
                                        <label htmlFor="estado-vidrierista" className="form-label">Estado<span className="obligatorio">*</span></label>
                                        <select name="estado-vidrierista" className="form-select" aria-label="Estado vidrierista" onClick={handleType}>
                                            <option value="postulante">Postulante</option>{/* Nuevo sin evaluar */}
                                            <option value="descartado">Descartado</option>{/* Nuevo, no les gustó lo descartaron antes de que sea vidrierista*/}
                                            <option value="activo">Activo</option>{/* aceptado, en actividad */}
                                            <option value="inactivo">Inactivo</option>{/* aceptado, no activo */}
                                            <option value="suspendido">Suspendido</option>{/* fue aceptado y después eliminado por algún problema */}
                                        </select> {/* // TODO enum */}
                                    </div>
                                    <div className="col-lg-8 form-element">
                                        <label htmlFor="descripcion" className="form-label">Descripción</label>
                                        <input type="text" className="form-control" name="descripcion" onChange={handleDescription}/>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-set">
                                <a className="btn btn-primary ms-auto" href="#" onClick={createGlazier}>Guardar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
HomeCreateGlazierAdmin.Form = Form;

export default HomeCreateGlazierAdmin;