import Container from '../../components/Container'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HomePaymentsAdmin from '../../components/HomePaymentsAdmin'
import Head from 'next/head'

export default function AdminPayments() {
  return (
    <Container>
        <Head>
            <title>Admin - Pagos</title>
        </Head>
        <Header glazier={false} admin={true}/>
        <HomePaymentsAdmin/>
        <Footer glazier={false} admin={true}/>
    </Container>
  )
}