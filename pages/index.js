export default function Home() {
    return (
	    <div id="wrapper">
		<div class="overlay"></div>
		<header class="fixed-top-scroll fixed-top">
	        <nav class="navbar">
	            <div class="container-fluid">
	                <div class="row">
	                    <div class="col-auto logo-div">
	                        <h1 class="site-title">
	                            <a class="navbar-brand main-logo" href="#" rel="home" style="background-image: url('/img/logo@2x.png');">Joya</a>
	                        </h1>
	                    </div>
	                   <div class="col menu-col user-nav">
	                    	<button class="navbar-toggler user-toggle hamburger is-closed" type="button" data-toggle="offcanvas" data-target="#main-menu-user" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                				<span class="hamb-top"></span>
	                            <span class="hamb-middle"></span>
	                            <span class="hamb-bottom"></span>
	                        </button>
	                        <nav class="navbar navbar-inverse navbar-fixed-top" id="main-menu" role="navigation">
	                            <div class="nav sidebar-nav col">
						         	<ul class="menu user-menu">
						         		<li class="username d-lg-none"><span class="a">
		                        			<i class="far fa-user-circle"></i>
		                        			Carolina	                        			
		                        		</span></li>
		                        		<li class="ayuda"><a href="#">Ayuda</a></li>
		                        		<li><a href="#" class="destacado">Solicitar limpieza de vidriera</a></li>
		                        		<li class="separator"></li>
		                        		<li class="user-item"><a href="#">Tus pedidos</a></li>
		                        		<li class="user-options dropdown closed">
		                        			<span class="a user-item">
		                        				<i class="far fa-user-circle"></i>
		                        				Carolina
		                        				<i class="far fa-chevron-down"></i>
		                        			</span>
		                        			<ul class="sub-menu">
		                        				<li><a href="#">Tus pedidos</a></li>
		                        				<li><a href="#">Configuración de cuenta</a></li>
		                        				<li><a href="#">Salir</a></li>
		                        			</ul>
		                        		</li>
		                        	</ul>
		                        </div>
		                    </nav>
	                    </div>
	                    <div class="col menu-col public-nav">
	                        <button class="navbar-toggler hamburger is-closed" type="button" data-toggle="offcanvas" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
	                            <span class="hamb-top"></span>
	                            <span class="hamb-middle"></span>
	                            <span class="hamb-bottom"></span>
	                        </button>
	                        
	                        <nav class="navbar navbar-inverse navbar-fixed-top" id="main-menu" role="navigation">
	                            <div class="nav sidebar-nav col">
	                            	<ul class="menu public-menu">
	                            		<li><a href="#">Ayuda</a></li>
	                            		<li><a href="#" class="destacado">Solicitar limpieza de vidriera</a></li>
	                            		<li class="separator"></li>
	                            		<li><a href="#" class="destacado">Iniciar sesión</a></li>
	                            	</ul>

	                            </div>
	                        </nav>
	                    </div>
	                </div>
	            </div>
	        </nav>
	    </header>
	    <div class="main-content">
	    	<div class="hero">
	    		<div class="container-fluid">
	    			<div class="row">
	    				<div class="col-lg-6 col-md-9 hero-content">
	    					<h1>Tus vidrieras siempre limpias</h1>		
	    					<p>Solicitá tu servicio, desde $50 la limpieza.</p>
	    					<div class="form form-rounded">
	    						<label for="direccion" class="form-label sr-only">Dirección de tu vidriera</label>
	    						<div class="input-group-btn">
	    							<input type="text" class="form-control" id="direccion" aria-describedby="direccionHelp" placeholder="Dirección de tu vidriera"/>
	    							<button class="btn btn-secondary btn-round" aria-label="Solicitar limpieza ya"><i class="far fa-arrow-right"></i></button>
	    						</div>
    							
    							<div id="direccionHelp" class="form-text">Servicio para Capital Federal únicamente. Pronto tendremos más cobertura.</div>
    							
	    					</div>
	    				</div>
	    			</div>
	    			
	    		</div>
	    	</div>
	    	<div class="home-steps section">
	    		<div class="container-fluid">
	    			<div class="row">
	    				<div class="col step">
		    					<div class="num">01</div>
		    					<div class="img-block"><img class="img-fluid" src="/img/step1.jpg" alt="Solicitá un vidrierista" width="80" height="67"/></div>
		    					<div class="text">
		    						<h4>Solicitá un vidrierista</h4>
		    						<p>indicando ubicación, tamaño de la vidriera.</p>
		    					</div>
	    				</div>
	    				<div class="col step">
		    					<div class="num">02</div>
		    					<div class="img-block"><img class="img-fluid" src="/img/step2.jpg" alt="Elegí día, horario y frecuencia" width="67" height="68"/></div>
		    					<div class="text">
		    						<h4>Vos elegís día, horario y frecuencia</h4>
		    						<p>Los días que quieras, a la hora que quieras.</p>
		    					</div>
	    				</div>
	    				<div class="col step">
		    					<div class="num">03</div>
		    					<div class="img-block"><img class="img-fluid" src="/img/step3.jpg" alt="Pago seguro" width="76" height="67"/></div>
		    					<div class="text">
		    						<h4>Pagá de forma segura</h4>
		    						<p>con tu tarjeta de crédito o adhieriéndote al débito automático.</p>
		    					</div>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    	<div class="mobile-video section video d-md-none">
				<div class="video-background container-fluid">
					<div class="video-container">
						<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/vFEXp9bi6Pg?rel=0&controls=0&showinfo=0&modestbranding=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowfullscreen ></iframe>
					</div>
				</div>
			</div>
	    	<div class="home-beneficios section">
	    		<div class="container-fluid">
		    		<div class="row">
		    			<div class="col-md-7 col-lg-6 beneficios">
		    				<h3>¿Por qué elegir Joya?</h3>
		    				<div class="row">
		    					<div class="beneficio col-6">
			    					<div class="img-block"><img class="img-fluid" src="/img/xq_01.jpg"  width="130" height="80" alt="Mejorá la exposición de tus productos"/></div>
			    					<div class="text">
			    						<h5 class="title">Mejorá la exposición de tus productos</h5>
			    						<p>Con tus vidrieras siempre limpias, tu local se luce.</p>
			    					</div>
		    					</div>
		    					<div class="beneficio col-6">
			    					<div class="img-block">
			    						<img class="img-fluid" src="/img/xq_02.jpg"  width="142" height="86" alt="Programá tus visitas y despreocupate"/>
			    					</div>
			    					<div class="text">
			    						<h5 class="title">Programá tus visitas y despreocupate</h5>
			    						<p>A la hora que digas, las veces que quieras, ahí estaremos.</p>
			    					</div>
		    					</div>
		    					<div class="beneficio col-6">
			    					<div class="img-block"><img class="img-fluid" src="/img/xq_03.jpg"  width="111" height="102" alt="Mantené tus empleados enfocados"/></div>
			    					<div class="text">
			    						<h5 class="title">Mantené tus empleados enfocados</h5>
			    						<p>Mientras hacen su trabajo, nuestros profesionales dejarán perfectas tus vidrieras. </p>
			    					</div>
		    					</div>
		    					<div class="beneficio col-6">
			    					<div class="img-block"><img class="img-fluid" src="/img/xq_04.jpg"  width="117" height="91" alt="Evitá movimientos confusos de caja"/></div>
			    					<div class="text">
			    						<h5 class="title">Evitá movimientos confusos de caja </h5>
			    						<p>Pagá con tarjeta de crédito y recibí factura A o C, según tu necesidad.</p>
			    					</div>
		    					</div>
		    					<div class="beneficio col-6">
			    					<div class="img-block"><img class="img-fluid" src="/img/xq_05.jpg"  width="119" height="106" alt="Evitá el trabajo informal"/></div>
			    					<div class="text">
			    						<h5 class="title">Evitá el trabajo informal</h5>
			    						<p>Evitá los riesgos del trabajo informal habitual en este tipo de servicio.</p>
			    					</div>
		    					</div>
		    					<div class="beneficio col-6">
			    					<div class="img-block"><img class="img-fluid" src="/img/xq_06.jpg"  width="130" height="112" alt="Cubrite ante urgencias"/></div>
			    					<div class="text">
			    						<h5 class="title">Cubrite ante urgencias</h5>
			    						<p>Ante un imprevisto solicitá que un vidrierista te visite en el acto.</p>
			    					</div>
		    					</div>
		    				</div>
		    			</div>
		    			<div class="col-md-5 offset-lg-1 miscelaneas">	    				
		    				<img class="img-fluid d-none d-md-block" src="/img/beneficios-side.jpg" width="495" height="784" alt="Joya se ocupa de que tu vidriera esté siempre limpia" />
		    			</div>
		    		</div>
	    		</div>
	    	</div>
	    	<div class="home-video section">
	    		<div class="container-fluid">
	    			<div class="row">
	    				<div class="col-12 col-lg-4 content">
	    					<h3>¡Solicitanos en minutos!</h3>
				    		<div class="form form-rounded">

				    			<label for="direccion2" class="form-label sr-only">Dirección de tu vidriera</label>
								<input type="text" class="form-control" id="direccion2" placeholder="Dirección de tu vidriera..."/>

								<label for="email" class="form-label sr-only">Tu email</label>
								<input type="email" class="form-control" id="email" placeholder="Tu email..."/>

								<button class="btn btn-primary btn-big">¡Comenzar!</button>
								
				    		</div>
	    				</div>
	    				<div class="col-12 col-lg-8 video d-none d-md-block order-md-first order-lg-last">
	    					<div class="video-background">
		    					<div class="video-container">
		    						<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/vFEXp9bi6Pg?rel=0&controls=0&showinfo=0&modestbranding=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowfullscreen ></iframe>
		    					</div>
	    					</div>
	    				</div>
	    			</div>
		    		
	    		</div>
	    	</div>
	    	<div class="home-cobertura section">
	    		<div class="container-fluid">
	    			<div class="row">
	    				<div class="content col-md-7 col-lg-6 col-xl-5">
			    			<h3>Cubrimos todos los barrios de la Capital Federal</h3>
			    			<p>Próximamente más barrios de GBA!</p>
			    		</div>		
	    			</div>
	    		</div>
	    		

	    	</div>
	    	<div class="home-vidrieristas section">
	    		<div class="container-fluid">
	    			<div class="row">
	    				<div class="offset-lg-1 col-md-4 misc col-12">
	    				   <img src="/img/vidrierista.jpg" alt="Podes ser vidrierista de Joya" class="img-fluid" width="302" height="220"/>	
	    				</div>
	    				<div class="col content">
	    					<h3>¿Querés ser vidrierista?</h3>
	    					<p>Registrate y generá las ganancias que vos quieras</p>
	    					<a href="#" class="btn btn-primary">Informate acá</a>
	    				</div>
	    			</div>

	    		</div>
	    	</div>
	    </div>
		<footer>
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-2 logo">
						<img src="/img/logo-small@2x.jpg" alt="Joya" class="img-fluid" width="85" height="31"/>
						<p class="copy">© 2021 Joya</p>
					</div>
					<div class="col-md-10 link-blocks">
						<div class="row">
							<div class="col col-lg-4 link-block">
								<p class="title">Servicio</p>
								<ul>
									<li><a href="#">Contratá JOYA</a></li>	
									<li><a href="#">Política de cancelación</a></li>
									<li><a href="#">Ayuda</a></li>
									<li><a href="#">Términos y condiciones</a></li>
									<li><a href="#">Política de privacidad</a></li>
								</ul>
					
							</div>
							<div class="col col-lg-4 link-block">
								<p class="title">Nosotros</p>
								<ul>
									<li><a href="#">Sobre nosotros</a></li>
									<li><a href="#">Convertite en vidrierista JOYA</a></li>
								</ul>
							
							</div>
							<div class="col col-lg-4 link-block">
								<p class="title">Contacto</p>
								<ul>
									<li>
										<i class="far fa-envelope"></i>
										<a href="mailto:ayuda@joya.com">ayuda@joya.com</a>
									</li>
									<li>
										<i class="far fa-phone"></i>
										<a href="tel:+5491145674568">011.4567.4568</a>
									</li>
									
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	</div>
    )
}