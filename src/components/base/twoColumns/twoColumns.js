import "./twoColumns.css";

const TwoColumns = (props) => {
  return (
    <div className="container-fluid two-columns-container p-4 d-flex justify-content-center align-items-center">
      <div className="two-columns col-7">
        <h1> {props.data.title}</h1>
        <div className="row mt-2 no-padding pt-2">
          <div className="col-md-6 divider  d-flex justify-content-center">
            <div className="column-container">
              <div className="col-12 d-flex justify-content-center">
                <img src={props.data.items[0].icon_url} alt="Tigo colum left" />
              </div>
              <div className="col-12 d-flex justify-content-center">
                <a
                  href={props.data.items[0].button_url}
                  className="two-col-btn"
                >
                  {props.data.items[0].button_label}
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6  d-flex justify-content-center">
            <div className="column-container">
              <div className="col-12 d-flex justify-content-center">
                <img src={props.data.items[1].icon_url} alt="Tigo colum left" />
              </div>
              <div className="col-12 d-flex justify-content-center">
                <a
                  href={props.data.items[1].button_url}
                  className="two-col-btn"
                >
                  {props.data.items[1].button_label}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoColumns;
