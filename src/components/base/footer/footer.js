import "./footer.css";

const Footer = (props) => {
  return (
    <div className="container-fluid footer-container">
      <div className="container">
        <div className="row">
          <div className="col-footer  col-md-6  d-flex align-items-center justify-content-start">
            <span className="footer-text">{props.data.text}</span>
          </div>
          <div className="col-md-6 col-footer d-flex justify-content-end  align-items-center">
            <div className="row no-padding">
              {props.data.socialMedia?.footerMenu.map((icon, index) => {
                return (
                  <div key={index} className="col">
                    <a href={icon.img_cta} target="_blank" rel="noreferrer">
                      <img
                        className="social-media-icon"
                        src={icon.img_url}
                        alt={icon.img_url}
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
