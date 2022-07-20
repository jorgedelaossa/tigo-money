import './twoColumnsTextImage.css'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {renderOptions} from "../../../utils/generals"

const TwoColumnsTextImage = (props) => {

    return(
        <div className="container-fluid container-two-col-text-image ">
            <div className="container cols-container d-flex align-items-center  justify-content-center p-2">
                <div className="row  row-cols  col-12">
                    <div className="col-md-6  col-img-two-col  " style={{ backgroundImage: `url(${props.data.image?.url})` }}>
                        
                    </div>
                    <div className=" text-col col-md-6  p-4"  >
                        { documentToReactComponents(props.data.rightText.json, renderOptions)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TwoColumnsTextImage;