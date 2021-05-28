import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div id="wrapper">
		<Header glazier={false}/>
		<Home/>
		<Footer/>
	</div>
  )
}