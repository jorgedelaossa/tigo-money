import "./carousel.css";
import Carousel from "react-material-ui-carousel";

const CarouselHome = (props) => {
  
    
  return (
    <div className="container-fluid carousel-container   no-padding">
      <Carousel  navButtonsAlwaysVisible 
      className="" > 
        {props.data.items.map((item, i) => {
          return (
            <a href={item.description} target="_blank" rel="noreferrer">
                {/* <div key={i} className="main-carousel  " style={{ backgroundImage: `url(${item.url})` }} >
                      
                </div> */}
                <div key={i} className="main-carousel d-flex align-items-center "  >
                      <img className="img-carousel" alt={item.title} src={item.url} />
                </div>
            </a>
            
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselHome;
