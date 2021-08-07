import Container from '../../components/Container'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HomeSchedule from '../../components/HomeSchedule'
import Head from 'next/head'

export default function Schedule() {
  return (
    <Container>
        <Head>
            <title>Admin - Agenda</title>
        </Head>
        <Header glazier={false} admin={true}/>
        <HomeSchedule/>
        <Footer glazier={false} admin={true}/>
    </Container>
  )
}