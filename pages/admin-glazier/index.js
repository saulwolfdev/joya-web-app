import Container from "../../components/Container"
import Head from "next/dist/next-server/lib/head"
import Header from "../../components/Header"
import HomeGlazierAdmin from "../../components/HomeGlazierAdmin"
import Footer from "../../components/Footer"

export default function AdminGlaziers() {
    return (
         <Container>
            <Head>
                <title>Admin - Vidrieristas</title>
            </Head>
            <Header glazier={false} admin={true} /> {/** El boolean glazier es para el formato principal, aca es admin */}
            <HomeGlazierAdmin/>
            <Footer glazier={false} admin={true} />
        </Container>
        );
}