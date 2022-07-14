import "./cta.css";

const Cta = (props) => {
  return (
    <div className="container  cta-container">
      <div className="  cta-col">
        <div className="row ">
          <div className="col-2  icon-container no-padding d-flex align-items-center">
            <img className="img-cta" src={props.data.icon?.url} alt="CTA" />
          </div>
          <div className="col-6 p-4  text-container d-flex align-items-center">
            {props.data.text}
          </div>
          <div className="col-4   cta-col d-flex justify-content-end align-items-center p-2">
            <a href={props.data.ctaButton}>
              <button className="cta-button">{props.data.labelButton} </button>
            </a>
          </div>
        </div>
      </div>
      {/* <div className="col-4 debug cta-col d-flex justify-content-end align-items-center p-2">
           
        </div> */}
    </div>
  );
};

export default Cta;
