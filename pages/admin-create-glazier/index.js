import Container from "../../components/Container"
import Head from "next/dist/next-server/lib/head"
import Header from "../../components/Header"
import HomeCreateGlazierAdmin from "../../components/HomeCreateGlazierAdmin"
import Footer from "../../components/Footer"

export default function AdminCreateGlazier() {
    return (
         <Container>
            <Head>
                <title>Admin - Crear Vidrierista</title>
            </Head>
            <Header glazier={false} admin={true} />
            <HomeCreateGlazierAdmin/>
            <Footer glazier={false} admin={true} />
        </Container>
    );
}  