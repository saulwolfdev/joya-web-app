import Container from "../../components/Container"
import Head from "next/dist/next-server/lib/head"
import Header from "../../components/Header"
import HomeDiscountAdmin from "../../components/HomeDiscountAdmin"
// import EditDiscount from "../../components/HomeDiscountAdmin/EditDiscount"
import CreateDiscount from "../../components/HomeDiscountAdmin/CreateDiscount"
import Footer from "../../components/Footer"
import { useState } from 'react'

export default function AdminsDiscounts() {

    const [editDiscount, setEditDiscount] = useState(false);
    const [discountId, setDiscountId] = useState("None");
    
    const handleEditDiscount = (edit) => {
        setEditDiscount(edit);
    }
    
    const handleDiscountId = (id) => {
        setDiscountId(id);
    }

    return (
         <Container>
            <Head>
                <title>Admin - Descuentos</title>
            </Head>
            <Header glazier={false} admin={true} /> {/** El boolean glazier es para el formato principal, aca es admin */}
            {
                editDiscount ? 
                //<EditDiscount discountId={discountId}/>
                <CreateDiscount/> // Pongo esto para problarlo
                :
                <HomeDiscountAdmin handleEditDiscount={handleEditDiscount} setDiscountId={handleDiscountId}/>
            }
            <Footer glazier={false} admin={true} />
        </Container>
    );
}