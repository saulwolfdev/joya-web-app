import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import GlazierInfo from '../components/glazier-info/glazier-info'
import HomeVideo from '../components/home/home-video/home-video'
import HomeZone from '../components/home/home-zone/home-zone'
import HomeProfits from '../components/home/home-profits/home-profits'
import HomeSteps from '../components/home/home-steps/home-steps'
import HomeSearch from '../components/home/home-search/home-search'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons"; 

export default function Home() {
  return (
    <div id="wrapper">
		<div className="overlay"></div>
		<Header></Header>
		<div className="main-content">
			<HomeSearch></HomeSearch>
			<HomeSteps></HomeSteps>
			{/*<div className="mobile-video section video d-md-none">
			<div className="video-background container-fluid">
				<div className="video-container">
				<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/vFEXp9bi6Pg?rel=0&controls=0&showinfo=0&modestbranding=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowFullScreen ></iframe>
				</div>
			</div>
			</div>*/}
			<HomeProfits></HomeProfits>
			<HomeVideo></HomeVideo>
			<HomeZone></HomeZone>
			<GlazierInfo></GlazierInfo>
		</div>
		<Footer></Footer>
	</div>
  )
}