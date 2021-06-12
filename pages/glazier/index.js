import Container from '../../components/Container'
import Header from '../../components/Header'
import HomeGlazier from '../../components/HomeGlazier'
import Footer from '../../components/Footer'
import Head from 'next/head'

export default function Glazier() {
  return (
    <Container>
      <Head>
        <title>Joya - Se vidrierista</title>
      </Head>
      <Header glazier={true} />
      <HomeGlazier/>
      <Footer glazier={true} />
    </Container>
  )
}