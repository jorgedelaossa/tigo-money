import './twoColumnsLeftTextImage.css'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const TwoColumnsLeftTextImage = (props) => {
    return(
        <div className="container-fluid container-two-col-text-image ">
            <div className="container cols-container d-flex align-items-center  justify-content-center p-2">
                <div className="row  row-cols  col-12">
                    <div className=" text-col col-md-6  p-4">
                        { documentToReactComponents(props.data.leftText.json)}
                    </div>
                    <div className="col-md-6  col-img " style={{ backgroundImage: `url(${props.data.image?.url})` }}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TwoColumnsLeftTextImage;