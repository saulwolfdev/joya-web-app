import Navbar from '../NavBar'

const Header = ({glazier}) => {
 

    return (
        <>
        <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@500;600;700&amp;family=Source+Sans+Pro:ital,wght@0,400;0,600;1,400&amp;display=swap" rel="stylesheet"></link>
            <div className="overlay"/>
            <header className="fixed-top-scroll fixed-top">
                <Navbar glazier={glazier}/>
            </header>
        </>
    );
};

export default Header;