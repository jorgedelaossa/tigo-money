import "./allies.css";

const Allies = (props) => {
  return (
    <div className="container allies-container  p-2 d-flex justify-content-center align-items-center ">
      <div className="allies col-12">
        <p className="h1-class">{props.title}</p>
        <div className="row no-padding d-flex justify-content-center pt-4">
          {props.data?.items.map((allie, index) => {
            return (
              <div key={index} className="col-md-3 allie-col no-padding  ">
                <a className=" link-image d-flex justify-content-center" href={allie.description} target="_blank" rel="noreferrer">
                    <img src={allie.url} alt={allie.title} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Allies;
