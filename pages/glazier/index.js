import Header from '../../components/Header'
import BeGlazier from '../../components/HomeGlazier/BeGlazier'
import Footer from '../../components/Footer'
import GlazierProfits from '../../components/HomeGlazier/GlazierProfits'
import GlazierPostulate from '../../components/HomeGlazier/GlazierPostulate'
import GlazierFaq from '../../components/HomeGlazier/GlazierFaq'
import GlazierPostulateWithinForm from '../../components/HomeGlazier/GlazierPostulateWithinForm'

export default function Glazier() {
    return (
        <div id="wrapper">
		    <Header glazier={true}/>
			<div className="main-content">
				<BeGlazier/>
				<GlazierProfits/>
				<GlazierPostulate/>
				<GlazierFaq/>
				<GlazierPostulateWithinForm/>
			</div>
		 <Footer glazier={true}/>
	</div>
    )
  }