import Container from '../../components/Container'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HomeProfile from '../../components/HomeProfile'
import Head from 'next/head'

export default function Profile() {
  return (
    <Container>
        <Head>
            <title>Joya - Pedidos</title>
        </Head>
        <Header glazier={false} admin={false}/>
        <HomeProfile/>
        <Footer glazier={false} admin={false}/>
    </Container>
  )
}