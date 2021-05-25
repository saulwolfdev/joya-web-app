import RequestService from "../../request-service/request-service";
import IPadVideo from '../../ipad-video/ipad-video'

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