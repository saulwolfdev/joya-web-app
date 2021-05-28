import Header from '../../components/Header'
import BeGlazier from '../../components/HomeGlazier/BeGlazier'
import Footer from '../../components/Footer'
import GlazierProfits from '../../components/HomeGlazier/GlazierProfits'

export default function Glazier() {
    return (
        <div id="wrapper">
		    <Header glazier={true}/>
			<div className="main-content">
				<BeGlazier/>
				<GlazierProfits/>
			</div>
	    {/* 
	    	
	    	<div class="home-simple section">
	    		<div class="container-fluid">
		    		<div class="row">
		    			<div class="col-auto d-none d-md-block pe-5 pe-lg-3 col-lg-5 col-xl-6 miscelaneas">	    				
		    				<img class="img-fluid d-none d-lg-block" src="../assets/img/ciclista.jpg" width="560" height="505" alt="Joya se ocupa de que tu vidriera esté siempre limpia" />
		    				<div class="celular">
		    					<img class="img-fluid d-none d-md-block" src="../assets/img/celu-sample.png" width="217" height="443" alt="Joya se ocupa de que tu vidriera esté siempre limpia" />
		    				</div>
		    			</div>
		    			<div class="col col-lg-5  offset-lg-1 main-content">
		    				<h3>¡Sólo necesitás tu bicicleta y celular!</h3>
		    				<p>Postulate como vidrierista Joya. Dejanos tus datos y nos pondremos en contacto con vos en la brevedad.</p>
		    				<!-- Este código se repite tal cual más arriba en esta página -->
	    						<div class="subscription-form form">
						        	<div class="form-element">
										<label for="email" class="form-label sr-only">Email</label>
										<div class="input-group">
											<span class="input-group-text"><i class="fal fa-envelope"></i></span>
											<input type="email" class="form-control" name="email" placeholder="Mail">
										</div>
										
									</div>
						        	<div class="row">
						        		<div class="col pe-0 form-element">
											<label for="nombre" class="form-label sr-only">Nombre</label>
											<div class="input-group">
												<span class="input-group-text"><i class="fal fa-user-circle"></i></span>
												<input type="text" class="form-control" name="nombre" placeholder="Nombre">
											</div>
											
										</div>
										<div class="col ps-0  form-element">
											<label for="apellido" class="form-label sr-only">Apellido</label>
											<input type="text" class="form-control" name="apellido" placeholder="Apellido">
										</div>
						        	</div>
						        	<div class="form-element">
										<label for="celular" class="form-label sr-only">Número de celular</label>
										<div class="input-group">
											<span class="input-group-text"><i class="fal fa-mobile-android-alt"></i></span>
											<input type="text" class="form-control" name="celular" placeholder="Número de celular">
										</div>
									</div>
									<div class="form-element">
										<p>Al continuar, aceptás nuestra <a href="#">política de privacidad</a>.</p>
									</div>
									<div class="btn-set">
										<button class="btn btn-primary">Enviar</button>
									</div>
								</div>
		    			</div>
		    			
		    		</div>
	    		</div>
	    	</div>
			<div class="home-faq section">
	    		<div class="container-fluid">
		    		<div class="row">
		    			<div class="col-md-12 col-lg-9 preguntas-frecuentes">
		    				<div class="faq-container">
		    					<h3>Preguntas frecuentes</h3>
			    				<div class="accordion accordion-flush" id="accordionFaq">
									<div class="accordion-item">
										<h2 class="accordion-header" id="headingOne">
											<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
												¿Qué es un vidrierista?
											</button>
										</h2>
										<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionFaq">
											<div class="accordion-body">
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla dui justo, volutpat mollis ex iaculis eget. Phasellus metus est, vulputate in ultrices quis, volutpat ut ex. Aliquam erat volutpat. Aenean tincidunt vehicula malesuada. </p><p>Vestibulum sollicitudin enim et elit dapibus tristique. Proin pharetra, metus ut tempus rhoncus, enim leo elementum ex, eget eleifend nibh purus quis tortor. Proin aliquet commodo lobortis. Sed hendrerit massa mi, posuere blandit ex mollis in. Etiam ex ligula, pretium nec pharetra vel, pretium ac sem. Pellentesque tincidunt facilisis ligula.</p>
											</div>
										</div>
									</div>
									
									<div class="accordion-item">
										<h2 class="accordion-header" id="headingTwo">
											<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
												¿Qué es un vidrierista?
											</button>
										</h2>
										<div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionFaq">
											<div class="accordion-body">
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla dui justo, volutpat mollis ex iaculis eget. Phasellus metus est, vulputate in ultrices quis, volutpat ut ex. Aliquam erat volutpat. Aenean tincidunt vehicula malesuada. </p><p>Vestibulum sollicitudin enim et elit dapibus tristique. Proin pharetra, metus ut tempus rhoncus, enim leo elementum ex, eget eleifend nibh purus quis tortor. Proin aliquet commodo lobortis. Sed hendrerit massa mi, posuere blandit ex mollis in. Etiam ex ligula, pretium nec pharetra vel, pretium ac sem. Pellentesque tincidunt facilisis ligula.</p>
											</div>
										</div>
									</div>
									<div class="accordion-item">
										<h2 class="accordion-header" id="headingThree">
											<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
												¿Qué es un vidrierista?
											</button>
										</h2>
										<div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionFaq">
											<div class="accordion-body">
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fringilla dui justo, volutpat mollis ex iaculis eget. Phasellus metus est, vulputate in ultrices quis, volutpat ut ex. Aliquam erat volutpat. Aenean tincidunt vehicula malesuada. </p><p>Vestibulum sollicitudin enim et elit dapibus tristique. Proin pharetra, metus ut tempus rhoncus, enim leo elementum ex, eget eleifend nibh purus quis tortor. Proin aliquet commodo lobortis. Sed hendrerit massa mi, posuere blandit ex mollis in. Etiam ex ligula, pretium nec pharetra vel, pretium ac sem. Pellentesque tincidunt facilisis ligula.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
		    		</div>
	    		</div>
	    	</div>
	    	<div class="home-vidrieristas section">
	    		<div class="container-fluid">
	    			<div class="row">
	    				<div class="offset-lg-1 col-md-4 misc col-12">
	    				   <img src="../assets/img/vidrierista-end.jpg" alt="Podes ser vidrierista de Joya" class="img-fluid" width="302" height="220">	
	    				</div>
	    				<div class="col content">
	    					<h3>Comenzá a gestionar tus ingresos!</h3>
	    					<p>Dejanos tus datos de contacto para empezar.</p>
	    					<a href="#" class="btn btn-primary">Postulate</a>
	    				</div>
	    			</div>

	    		</div>
	    	</div>
		 */}
		 <Footer glazier={true}/>
	</div>
    )
  }