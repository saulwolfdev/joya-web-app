const Footer = () => {
    return (
        <footer>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-2 logo">
						<img src="/img/logo-small@2x.jpg" alt="Joya" className="img-fluid" width="85" height="31"/>
						<p className="copy">© 2021 Joya</p>
					</div>
					<div className="col-md-10 link-blocks">
						<div className="row">
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
							<div className="col col-lg-4 link-block">
								<p className="title">Nosotros</p>
								<ul>
									<li><a href="#">Sobre nosotros</a></li>
									<li><a href="#">Convertite en vidrierista JOYA</a></li>
								</ul>
							
							</div>
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
						</div>
					</div>
				</div>
			</div>
		</footer>
    )
}

export default Footer;