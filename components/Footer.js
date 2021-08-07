import Link from 'next/link'

const Footer = ({glazier, admin}) => {
    return (
        <>
            {
                admin ?
                    <div className="container-fluid">
                        <p className="copy">© 2021 Joya</p>
                    </div>
                :
                    <footer>
                        <div className="container-fluid">
                            <div className="row">
                                <Footer.Logo/>
                                <div className="col-md-10 link-blocks">
                                    <div className="row">
                                        <Footer.Service/>
                                        <Footer.We/>
                                        { glazier ? <></> : <Footer.Contact/> }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
            }
        </>
        
    )
}

const We = () => {
    return (
        <div className="col col-lg-4 link-block">
            <p className="title">Nosotros</p>
            <ul>
                <li><a href="#">Sobre nosotros</a></li>
                <li><a href="#">Convertite en vidrierista JOYA</a></li>
            </ul>
        </div>
    )
}
Footer.We = We;

const Service = () => {
    return (
        <div className="col col-lg-4 link-block">
            <p className="title">Servicio</p>
            <ul>
                <li><a href="#">Contratá JOYA</a></li>	
                <li><a href="#">Política de cancelación</a></li>
                <li><a href="#">Ayuda</a></li>
                <li><a href="#">Términos y condiciones</a></li>
                <li><a href="#">Política de privacidad</a></li>
            </ul>
        </div>
    )
}
Footer.Service = Service;

const Contact = () => {
    return (
        <div className="col col-lg-4 link-block">
            <p className="title">Contacto</p>
            <ul>
                <li>
                    <i className="far fa-envelope"/>
                    <a href="mailto:ayuda@joya.com">ayuda@joya.com</a>
                </li>
                <li>
                    <i className="far fa-phone"/>
                    <a href="tel:+5491145674568">011.4567.4568</a>
                </li>
            </ul>
        </div>
    )
}
Footer.Contact = Contact;

const Logo = () => {
    let logoImage = {
        width:"85",
        height:"31",
        backgroundImage:"url(/logo-small@2x.jpg)"
    }
    return (
        <div className="col-md-2 logo">
            <Link href='/'><a className="img-fluid" href="#" rel="home" style={logoImage}>Joya</a></Link>
            <p className="copy">© 2021 Joya</p>
        </div>
    )
}

Footer.Logo = Logo;

export default Footer;