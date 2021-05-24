import Image from 'next/image'

export default function Home() {
  return (
    <div id="wrapper">
  <div className="overlay"></div>
  <div className="main-content">
      <div className="hero">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-9 hero-content">
              <h1>Tus vidrieras siempre limpias</h1>		
              <p>Solicitá tu servicio, desde $50 la limpieza.</p>
              <div className="form form-rounded">
                <label htmlFor="direccion" className="form-label sr-only">Dirección de tu vidriera</label>
                <div className="input-group-btn">
                  <input type="text" className="form-control" id="direccion" aria-describedby="direccionHelp" placeholder="Dirección de tu vidriera"/>
                  <button className="btn btn-secondary btn-round" aria-label="Solicitar limpieza ya"><i className="far fa-arrow-right"></i></button>
                </div>
                
                <div id="direccionHelp" className="form-text">Servicio para Capital Federal únicamente. Pronto tendremos más cobertura.</div>
                
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="home-steps section">
        <div className="container-fluid">
          <div className="row">
            <div className="col step">
                <div className="num">01</div>
                <div className="img-block">
                <img className="img-fluid" src="step1.jpg" alt="Solicitá un vidrierista" width="80" height="67"/>       
              </div>
                <div className="text">
                  <h4>Solicitá un vidrierista</h4>
                  <p>indicando ubicación, tamaño de la vidriera.</p>
                </div>
            </div>
            <div className="col step">
                <div className="num">02</div>
                <div className="img-block">
                <img className="img-fluid" src="/step2.jpg" alt="Elegí día, horario y frecuencia" width="67" height="68"/>
                  </div>
                <div className="text">
                  <h4>Vos elegís día, horario y frecuencia</h4>
                  <p>Los días que quieras, a la hora que quieras.</p>
                </div>
            </div>
            <div className="col step">
                <div className="num">03</div>
                <div className="img-block">
                <img className="img-fluid" src="/step3.jpg" alt="Pago seguro" width="76" height="67"/>
                </div>
                <div className="text">
                  <h4>Pagá de forma segura</h4>
                  <p>con tu tarjeta de crédito o adhieriéndote al débito automático.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-video section video d-md-none">
      <div className="video-background container-fluid">
        <div className="video-container">
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/vFEXp9bi6Pg?rel=0&controls=0&showinfo=0&modestbranding=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowFullScreen ></iframe>
        </div>
      </div>
    </div>
      <div className="home-beneficios section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7 col-lg-6 beneficios">
              <h3>¿Por qué elegir Joya?</h3>
              <div className="row">
                <div className="beneficio col-6">
                  <div className="img-block">
                   <img className="img-fluid" src="/xq_01.jpg"  width="142" height="86" alt="Programá tus visitas y despreocupate"/>         
                    </div>
                  <div className="text">
                    <h5 className="title">Mejorá la exposición de tus productos</h5>
                    <p>Con tus vidrieras siempre limpias, tu local se luce.</p>
                  </div>
                </div>
                <div className="beneficio col-6">
                  <div className="img-block">
                    <img className="img-fluid" src="/xq_02.jpg"  width="142" height="86" alt="Programá tus visitas y despreocupate"/>
                  </div>
                  <div className="text">
                    <h5 className="title">Programá tus visitas y despreocupate</h5>
                    <p>A la hora que digas, las veces que quieras, ahí estaremos.</p>
                  </div>
                </div>
                <div className="beneficio col-6">
                  <div className="img-block"><img className="img-fluid" src="/xq_03.jpg"  width="111" height="102" alt="Mantené tus empleados enfocados"/></div>
                  <div className="text">
                    <h5 className="title">Mantené tus empleados enfocados</h5>
                    <p>Mientras hacen su trabajo, nuestros profesionales dejarán perfectas tus vidrieras. </p>
                  </div>
                </div>
                <div className="beneficio col-6">
                  <div className="img-block"><img className="img-fluid" src="/xq_04.jpg"  width="117" height="91" alt="Evitá movimientos confusos de caja"/></div>
                  <div className="text">
                    <h5 className="title">Evitá movimientos confusos de caja </h5>
                    <p>Pagá con tarjeta de crédito y recibí factura A o C, según tu necesidad.</p>
                  </div>
                </div>
                <div className="beneficio col-6">
                  <div className="img-block"><img className="img-fluid" src="/xq_05.jpg"  width="119" height="106" alt="Evitá el trabajo informal"/></div>
                  <div className="text">
                    <h5 className="title">Evitá el trabajo informal</h5>
                    <p>Evitá los riesgos del trabajo informal habitual en este tipo de servicio.</p>
                  </div>
                </div>
                <div className="beneficio col-6">
                  <div className="img-block"><img className="img-fluid" src="/xq_06.jpg"  width="130" height="112" alt="Cubrite ante urgencias"/></div>
                  <div className="text">
                    <h5 className="title">Cubrite ante urgencias</h5>
                    <p>Ante un imprevisto solicitá que un vidrierista te visite en el acto.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 offset-lg-1 miscelaneas">
              <Image src="/beneficios-side.jpg" alt="Joya se ocupa de que tu vidriera esté siempre limpia" width={495} height={784} />          	    				
            </div>
          </div>
        </div>
      </div>
      <div className="home-video section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-lg-4 content">
              <h3>¡Solicitanos en minutos!</h3>
              <div className="form form-rounded">

                <label htmlFor="direccion2" className="form-label sr-only">Dirección de tu vidriera</label>
              <input type="text" className="form-control" id="direccion2" placeholder="Dirección de tu vidriera..."/>

              <label htmlFor="email" className="form-label sr-only">Tu email</label>
              <input type="email" className="form-control" id="email" placeholder="Tu email..."/>

              <button className="btn btn-primary btn-big">¡Comenzar!</button>
              
              </div>
            </div>
            <div className="col-12 col-lg-8 video d-none d-md-block order-md-first order-lg-last">
              <div className="video-background">
                <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/vFEXp9bi6Pg?rel=0&controls=0&showinfo=0&modestbranding=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowFullScreen ></iframe>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className="home-cobertura section">
        <div className="container-fluid">
          <div className="row">
            <div className="content col-md-7 col-lg-6 col-xl-5">
              <h3>Cubrimos todos los barrios de la Capital Federal</h3>
              <p>Próximamente más barrios de GBA!</p>
            </div>		
          </div>
        </div>
        

      </div>
      <div className="home-vidrieristas section">
        <div className="container-fluid">
          <div className="row">
            <div className="offset-lg-1 col-md-4 misc col-12">
              <Image src="/vidrierista.jpg" alt="Podes ser vidrierista de Joya" width={302} height={220} />       
            </div>
            <div className="col content">
              <h3>¿Querés ser vidrierista?</h3>
              <p>Registrate y generá las ganancias que vos quieras</p>
              <a href="#" className="btn btn-primary">Informate acá</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
  )
}