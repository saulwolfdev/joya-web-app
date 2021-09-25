import Container from "../../components/Container"
import Head from "next/dist/next-server/lib/head"
import Header from "../../components/Header"
import ProfileGlazier from "../../components/HomeGlazierAdmin/ProfileGlazier"
import Footer from "../../components/Footer"

export default function AdminGlaziers() {
    return (
         <Container>
            <Head>
                <title>Admin - Vidrieristas</title>
            </Head>
            <Header glazier={false} admin={true} /> {/** El boolean glazier es para el formato principal, aca es admin */}
            <ProfileGlazier/>
            <Footer glazier={false} admin={true} />
        </Container>
    );
}