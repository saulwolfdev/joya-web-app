import Navbar from './NavBar'

const Header = ({glazier}) => {
    return (
        <>
            <div className="overlay"/>
            <header className="fixed-top-scroll fixed-top">
                <Navbar glazier={glazier}/>
            </header>
        </>
    );
};

export default Header;