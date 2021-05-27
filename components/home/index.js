import HomeSearch from './HomeSearch'
import HomeSteps from './HomeSteps'
import HomeProfits from './HomeProfits'
import HomeVideo from './HomeVideo'
import HomeZone from './HomeZone'
import HomeGlazierInfo from './HomeGlazierInfo'

export default Home = () => {
    return (
        <div className="main-content">
			<HomeSearch/>
			<HomeSteps/>
			{/*<div className="mobile-video section video d-md-none">
			<div className="video-background container-fluid">
				<div className="video-container">
				<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/vFEXp9bi6Pg?rel=0&controls=0&showinfo=0&modestbranding=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowFullScreen ></iframe>
				</div>
			</div>
			</div>*/}
			<HomeProfits/>
			<HomeVideo/>
			<HomeZone/>
			<HomeGlazierInfo/>
		</div>
    )
}