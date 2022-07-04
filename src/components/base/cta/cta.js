import "./cta.css";

const Cta = (props) => {
  return (
    <div className="container cta-container">
      <div className="row ">
        <div className="col-8  cta-col">
          <div className="row ">
            <div className="col-2 icon-container d-flex align-items-center">
              <img src={props.data.icon?.url} alt="CTA" />
            </div>
            <div className="col-10 text-container d-flex align-items-center">
              {props.data.text} 
            </div>
          </div>
        </div>
        <div className="col-4 cta-col d-flex justify-content-end align-items-center p-2">
            <a href={props.data.ctaButton}>
              <button className="cta-button">{props.data.labelButton} </button>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Cta;
