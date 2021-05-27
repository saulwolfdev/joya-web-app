const NavBarLogo = () => {
    let logoImage = {
        backgroundImage:"url(/logo@2x.png)"
    }
    return (
        <div className="col-auto logo-div">
            <h1 className="site-title">
            <a className="navbar-brand main-logo" href="#" rel="home" style={logoImage}>Joya</a>
            </h1>
        </div>
    )
}

export default NavBarLogo;