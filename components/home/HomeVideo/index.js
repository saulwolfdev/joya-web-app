import RequestService from "../../RequestService";
import IPadVideo from '../../IPadVideo'

const HomeVideo = () => {
    return (
        <div className="home-video section">
            <div className="container-fluid">
                <div className="row">
                    <RequestService></RequestService>
                    <IPadVideo></IPadVideo>
                </div>
            </div>
        </div>
    )
}

export default HomeVideo;