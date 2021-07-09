import Container from '../../components/Container'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HomeAllLocals from '../../components/HomeAllLocals'
import Head from 'next/head'

export default function AllLocals() {
  return (
    <Container>
        <Head>
            <title>Joya - Pedidos</title>
        </Head>
        <Header glazier={false} />
        <HomeAllLocals/>
        <Footer glazier={false} />
    </Container>
  )
}