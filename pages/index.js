import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div id="wrapper">
		<div className="overlay"></div>
		<Header/>
		<Home/>
		<Footer/>
	</div>
  )
}