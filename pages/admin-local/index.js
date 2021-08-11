import Container from '../../components/Container'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import HomeAllLocalsAdmin from '../../components/HomeAllLocalsAdmin'
import Head from 'next/head'
import EditLocal from '../../components/HomeAllLocals/EditLocal' // TODO move to other folder
import { useState } from 'react'

export default function AdminLocal() {

  const [editLocal, setEditLocal] = useState(false);
  const [localId, setLocalId] = useState("None");
  
  const handleEditLocal = (edit) => {
    setEditLocal(edit);
  }
  
  const handleLocalId = (id) => {
    setLocalId(id);
  }

  return (
    <Container>
        <Head>
            <title>Admin - Locales</title>
        </Head>
        <Header glazier={false} admin={true}/>
        {
          editLocal ? 
          <EditLocal localId={localId} admin={true}/>
          :
          <HomeAllLocalsAdmin handleEditLocal={handleEditLocal} setLocalId={handleLocalId}/>
        }
        <Footer glazier={false} admin={true}/>
    </Container>
  )
}