import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Wizzard from "../../components/Wizzard";

const Body = () => {
    return (
        <div className="main-content">
	    	<div className="clean-wizard step1">
	    		<div className="container-fluid">
	    			<div className="row">
	    				<div className="col-12 col-lg-10 wizard-container">
                            <Wizzard/>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    </div>
    );
}

export default function Apply() {
    return (
        <div id="wrapper">
            <Header glazier={false}/>
            <Body/>
            <Footer glazier={false}/>
        </div>
    );
}