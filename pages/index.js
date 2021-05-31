import Container from '../components/Container'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../components/Home'
import Head from 'next/head'

export default function LadingPage() {
  return (
    <Container>
		<Head>
			<title>Joya</title>
		</Head>
		<Header glazier={false}/>
		<Home/>
		<Footer glazier={false}/>
	</Container>
  )
}