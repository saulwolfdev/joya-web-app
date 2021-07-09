import Link from 'next/link'
import { useState } from 'react';

const RequestService = () => {

    const[direction,setDirection] = useState('');
    const[email,setEmail] = useState('');

    const handleDirection = (e) => {
        setDirection(e.currentTarget.value);
    }

    const handleEmail = (e) => {
        setEmail(e.currentTarget.value);
    }

    return (
        <div className="col-12 col-lg-4 content">
            <h3>¡Solicitanos en minutos!</h3>
            <div className="form form-rounded">

                <label htmlFor="direction2" className="form-label sr-only">Dirección de tu vidriera</label>
                <input type="text" className="form-control" id="direction2" aria-describedby="direccionHelp" placeholder="Dirección de tu vidriera..." value={direction} onChange={handleDirection}/>

                <label htmlFor="email" className="form-label sr-only">Tu email</label>
                <input type="email" className="form-control" id="email" placeholder="Tu email..." value={email} onChange={handleEmail}/>

                <Link href={'/apply/' + (direction === '' ? 'new' : direction) + (email === '' ? '' : "?email=" + email)}>
                    <a className="btn btn-secondary btn-round" aria-label="¡Comenzar!">
                        <i className="far fa-arrow-right"/>
                    </a>
                </Link>
            </div>
        </div>
    );
}
 
export default RequestService;