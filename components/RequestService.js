import Link from 'next/link'
import Notification from './Notification';
import { validateEmail } from '../helpers';
import { useRouter } from 'next/router'
import { useState } from 'react';

const RequestService = () => {

    const router = useRouter()

    const[direction,setDirection] = useState('');

    const[email,setEmail] = useState('');
    const[errorNotification, setErrorNotification] = useState('');
    const[viewError, setViewError] = useState(false);

    const handleEmail = (e) => {
        setEmail(e.currentTarget.value);
        e.preventDefault();
        if(!validateEmail(email)) {
            setErrorNotification('El email no tiene un formato correcto')
            setViewError(true);
        } else {
            setErrorNotification('')
            setViewError(false)
            router.push(path);
        }
    }

    const setView = (view) => {
        setViewError(view);
    }

    const handleDirection = (e) => {
        setDirection(e.currentTarget.value);
    }

    return (
        <div className="col-12 col-lg-4 content">
            <h3>¡Solicitanos en minutos!</h3>
            <div className="form form-rounded">

                <label htmlFor="direction2" className="form-label sr-only">Dirección de tu vidriera</label>
                <input type="text" className="form-control" id="direction2" aria-describedby="direccionHelp" placeholder="Dirección de tu vidriera..." value={direction} onChange={handleDirection}/>

                <label htmlFor="email" className="form-label sr-only">Tu email</label>
                <input type="email" className="form-control" id="email" placeholder="Tu email..." value={email} onChange={handleEmail}/>

                <a href="#" onClick={(e) => handleClick(e, '/apply/' + (direction === '' ? 'new' : direction) + (email === '' ? '' : "?email=" + email))}>
                    <a className="btn btn-secondary btn-round" aria-label="¡Comenzar!">
                        <i className="far fa-arrow-right"/>
                    </a>
                </a>
            </div>
            <Notification view={viewError} setView={setView} message={errorNotification} type={"warning"}/>
        </div>
    );
}
 
export default RequestService;