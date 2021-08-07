import Container from '../../components/Container'
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Wizzard from "../../components/Wizzard";
import Head from 'next/head'
import { useRouter } from 'next/router'

const WizzardContainer = ({direction}) => {
    return (
        <div className="main-content">
	    	<div className="clean-wizard step1 localnuevo">
	    		<div className="container-fluid">
	    			<div className="row">
	    				<div className="col-12 col-lg-10 wizard-container card-page-container">
                            <Wizzard direction={direction}/>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    </div>
    );
}

export default function Apply() {
    const router = useRouter();
    const direction = router.query.direction;
    // const email = router.query.email; // At the moment it is not used

    return (
        <Container>
            <Head>
                <title>Joya - Aplicar</title>
            </Head>
            <Header glazier={false} admin={false}/>
            <WizzardContainer direction={direction}/>
            <Footer glazier={false} admin={false}/>
        </Container>
    );
}