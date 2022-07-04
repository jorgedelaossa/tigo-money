import "./packages.css";

const Packages = (props) => {
  return (
    <div className="container d-flex justify-content-center container-packages">
      <div
        className="row col-10 d-flex align-items-center justify-content-center
"
      >
        {props.data.items.map((item, index) => {
          return (
            <div key={index} className="col-md-3 col-package d-flex justify-content-center">
              <div className="">
                <div className="col-12 package-label">PAQUETE</div>
                <div className="col-12 pt-2 title-package">{item.title}</div>
                <div className="col-12 pt-2 price-label">{item.price}</div>
                <div className="col-12 pt-3 task-label">Incluye impuestos</div>
                <div className="col-12 p-3 description-packge" dangerouslySetInnerHTML={{__html: item.description}}></div>
                <div className="col-12  pb-4 btn-bottom d-flex justify-content-center">
                  <a href={item.cta_btn} target="_blank" rel="noreferrer">
                    <button className="button-package" > { item.label_btn}</button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Packages;
