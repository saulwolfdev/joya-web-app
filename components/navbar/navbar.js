import React,{useState} from 'react';
import SignInModal from "../signin-modal/signin-modal";

const NavBar = () => {
    const [show, setShow] = useState(false);
    const closeModalHandler = () => setShow(false);
    let logoImage={
        backgroundImage:"url(/logo@2x.png)"
    }
    return (<>
    
    <nav className="navbar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-auto logo-div">
                            <h1 className="site-title">
                            <a className="navbar-brand main-logo" href="#" rel="home" style={logoImage}>Joya</a>
                            </h1>
                        </div>
                              {/*CON LOGIN INICIO*/}
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
                          {/*CON LOGIN FIN*/}
                            {/* SIN LOGIN INICIO*/}
                        <div className="col menu-col public-nav">
                            <button className="navbar-toggler hamburger is-closed" 
                                    type="button" data-toggle="offcanvas" 
                                    data-target="#main-menu" 
                                    aria-controls="main-menu" 
                                    aria-expanded="false" 
                                    aria-label="Toggle navigation">
                                <span className="hamb-top"></span>
                                <span className="hamb-middle"></span>
                                <span className="hamb-bottom"></span>
                            </button>
                            <nav className="navbar navbar-inverse navbar-fixed-top" id="main-menu" role="navigation">
                                <div className="nav sidebar-nav col">
                                    <ul className="menu public-menu">
                                        <li><a href="#">Ayuda</a></li>
                                        <li><a href="#" className="destacado">Solicitar limpieza de vidriera</a></li>
                                        <li className="separator"></li>
                                        <li><a href="#" onClick={() => setShow(true)} className="destacado">Iniciar sesión</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div> 
                          {/* SIN LOGIN FIN*/}
                    </div>
                </div>
                <SignInModal show={show} close={closeModalHandler}/>
            </nav>
    </>);
}
 
export default NavBar;
