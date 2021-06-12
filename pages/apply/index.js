import Container from '../../components/Container'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Wizzard from "../../components/Wizzard";
import Head from 'next/head'

const WizzardContainer = () => {
    return (
        <div className="main-content">
	    	<div className="clean-wizard step1 localnuevo">
	    		<div className="container-fluid">
	    			<div className="row">
	    				<div className="col-12 col-lg-10 wizard-container card-page-container">
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
        <Container>
            <Head>
                <title>Joya - Aplicar</title>
            </Head>
            <Header glazier={false}/>
            <WizzardContainer/>
            <Footer glazier={false}/>
        </Container>
    );
}