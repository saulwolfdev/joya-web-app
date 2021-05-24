const Header = () => {
    return (
        <header className="fixed-top-scroll fixed-top">
	        <nav className="navbar">
	            <div className="container-fluid">
	                <div className="row">
	                    <div className="col-auto logo-div">
	                        <h1 className="site-title">
	                            <a className="navbar-brand main-logo" href="#" rel="home" style="background-image: url('/img/logo@2x.png');">Joya</a>
	                        </h1>
	                    </div>
	                   <div className="col menu-col user-nav">
	                    	<button className="navbar-toggler user-toggle hamburger is-closed" type="button" data-toggle="offcanvas" data-target="#main-menu-user" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
                				<span className="hamb-top"></span>
	                            <span className="hamb-middle"></span>
	                            <span className="hamb-bottom"></span>
	                        </button>
	                        <nav className="navbar navbar-inverse navbar-fixed-top" id="main-menu" role="navigation">
	                            <div className="nav sidebar-nav col">
						         	<ul className="menu user-menu">
						         		<li className="username d-lg-none"><span className="a">
		                        			<i className="far fa-user-circle"></i>
		                        			Carolina	                        			
		                        		</span></li>
		                        		<li className="ayuda"><a href="#">Ayuda</a></li>
		                        		<li><a href="#" className="destacado">Solicitar limpieza de vidriera</a></li>
		                        		<li className="separator"></li>
		                        		<li className="user-item"><a href="#">Tus pedidos</a></li>
		                        		<li className="user-options dropdown closed">
		                        			<span className="a user-item">
		                        				<i className="far fa-user-circle"></i>
		                        				Carolina
		                        				<i className="far fa-chevron-down"></i>
		                        			</span>
		                        			<ul className="sub-menu">
		                        				<li><a href="#">Tus pedidos</a></li>
		                        				<li><a href="#">Configuración de cuenta</a></li>
		                        				<li><a href="#">Salir</a></li>
		                        			</ul>
		                        		</li>
		                        	</ul>
		                        </div>
		                    </nav>
	                    </div>
	                    <div className="col menu-col public-nav">
	                        <button className="navbar-toggler hamburger is-closed" type="button" data-toggle="offcanvas" data-target="#main-menu" aria-controls="main-menu" aria-expanded="false" aria-label="Toggle navigation">
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
	                            		<li><a href="#" className="destacado">Iniciar sesión</a></li>
	                            	</ul>

	                            </div>
	                        </nav>
	                    </div>
	                </div>
	            </div>
	        </nav>
	    </header>
    );
}
 
export default Header;