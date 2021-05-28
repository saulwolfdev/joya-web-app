const Footer = () => {
    return (

        
        <footer>
			<div className="container-fluid">
				<div className="row">
					<Footer.Logo/>
					<div className="col-md-10 link-blocks">
						<div className="row">
							<Footer.Service/>
							<Footer.We/>
							<Footer.Contact/>
						</div>
					</div>
				</div>
			</div>
		</footer>
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
                    <i className="far fa-envelope"></i>
                    <a href="mailto:ayuda@joya.com">ayuda@joya.com</a>
                </li>
                <li>
                    <i className="far fa-phone"></i>
                    <a href="tel:+5491145674568">011.4567.4568</a>
                </li>
            </ul>
        </div>
    )
}
Footer.Contact = Contact;

const Logo = () => {
    return (
        <div className="col-md-2 logo">
            <img src="/logo-small@2x.jpg" alt="Joya" className="img-fluid" width="85" height="31"/>
            <p className="copy">© 2021 Joya</p>
        </div>
    )
}
Footer.Logo = Logo;

export default Footer;