import Container from '../../components/Container'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HomeAllLocalsAdmin from '../../components/HomeAllLocalsAdmin'
import Head from 'next/head'

export default function AdminLocal() {
  return (
    <Container>
        <Head>
            <title>Admin - Locales</title>
        </Head>
        <Header glazier={false} admin={true}/>
        <HomeAllLocalsAdmin/>
        <Footer glazier={false} admin={true}/>
    </Container>
  )
}