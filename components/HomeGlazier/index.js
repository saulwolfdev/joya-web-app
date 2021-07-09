import BeGlazier from './BeGlazier'
import GlazierProfits from './GlazierProfits'
import GlazierPostulate from './GlazierPostulate'
import GlazierFaq from './GlazierFaq'
import GlazierPostulateWithinForm from './GlazierPostulateWithinForm'

const HomeGlazier = () => {
    return (
        <div className="main-content vidrieristas-seccion-home">
            <BeGlazier/>
            <GlazierProfits/>
            <GlazierPostulate/>
            <GlazierFaq/>
            <GlazierPostulateWithinForm/>
        </div>
    );
}

export default HomeGlazier;