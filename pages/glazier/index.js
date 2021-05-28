import Header from '../../components/Header'
import HomeGlazier from '../../components/HomeGlazier'
import Footer from '../../components/Footer'

export default function Glazier() {
    return (
        <div id="wrapper">
		    <Header glazier={true}/>
			<HomeGlazier/>
			<Footer glazier={true}/>
		</div>
    )
  }