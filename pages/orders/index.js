import Container from '../../components/Container'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HomeOrders from '../../components/HomeOrders'
import Head from 'next/head'

export default function Order() {
  return (
    <Container>
        <Head>
            <title>Joya - Pedidos</title>
        </Head>
        <Header glazier={false} />
        <HomeOrders/>
        <Footer glazier={false} />
    </Container>
  )
}