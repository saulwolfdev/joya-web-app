import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../components/Home'

export default function LandingPage() {
  return (
    <div id="wrapper">
		<Header glazier={false}/>
		<Home/>
		<Footer glazier={false}/>
	</div>
  )
}