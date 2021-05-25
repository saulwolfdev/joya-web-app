import FooterContact from "./footer-contact/footer-contact";
import FooterLogo from "./footer-logo/footer-logo";
import FooterService from "./footer-service/footer-service";
import FooterWe from "./footer-we/footer-we";

const Footer = () => {
    return (
        <footer>
			<div className="container-fluid">
				<div className="row">
					<FooterLogo></FooterLogo>
					<div className="col-md-10 link-blocks">
						<div className="row">
							<FooterService></FooterService>
							<FooterWe></FooterWe>
							<FooterContact></FooterContact>
						</div>
					</div>
				</div>
			</div>
		</footer>
    )
}

export default Footer;