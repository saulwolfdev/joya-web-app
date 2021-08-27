import Container from '../../components/Container'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HomeToursAdmin from '../../components/HomeToursAdmin'
import Head from 'next/head'

export default function Schedule() {
  return (
    <Container>
        <Head>
            <title>Admin - Recorridos</title>
        </Head>
        <Header glazier={false} admin={true}/>
        <HomeToursAdmin/>
        <Footer glazier={false} admin={true}/>
    </Container>
  )
}