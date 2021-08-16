import Container from "../../components/Container"
import Head from "next/dist/next-server/lib/head"
import Header from "../../components/Header"
import HomeClientAdmin from "../../components/HomeClientAdmin"
import Footer from "../../components/Footer"

export default function AdminClient() {
    return (
        <Container>
            <Head>
                <title>Admin - Cliente</title>
            </Head>
            <Header glazier={false} admin={true} />
            <HomeClientAdmin/>
            <Footer glazier={false} admin={true} />
        </Container>
    )
}