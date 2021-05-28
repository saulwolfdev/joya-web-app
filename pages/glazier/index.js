import Header from '../../components/Header'
import BeGlazier from '../../components/HomeGlazier/BeGlazier'
import Footer from '../../components/Footer'
import GlazierProfits from '../../components/HomeGlazier/GlazierProfits'
import GlazierPostulate from '../../components/HomeGlazier/GlazierPostulate'

export default function Glazier() {
    return (
        <div id="wrapper">
		    <Header glazier={true}/>
			<div className="main-content">
				<BeGlazier/>
				<GlazierProfits/>
				<GlazierPostulate/>
			</div>
	    {/* 
	    	
	    	
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