import Container from "../../components/Container"
import Head from "next/dist/next-server/lib/head"
import Header from "../../components/Header"
import HomeDiscountAdmin from "../../components/HomeDiscountAdmin"
import Footer from "../../components/Footer"

export default function AdminsDiscounts() {
    return (
         <Container>
            <Head>
                <title>Admin - Descuentos</title>
            </Head>
            <Header glazier={false} admin={true} /> {/** El boolean glazier es para el formato principal, aca es admin */}
            <HomeDiscountAdmin/>
            <Footer glazier={false} admin={true} />
        </Container>
    );
}