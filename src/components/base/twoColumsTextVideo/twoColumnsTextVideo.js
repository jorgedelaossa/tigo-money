import './twoColumnsTextVideo.css'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const TwoColumnsTextVideo = (props) => {
    return(
        <div className="container-fluid container-two-col-text-video  ">
            <div className="container  cols-container d-flex align-items-center justify-content-center p-2">
                <div className="row  row-cols-video  col-12">
                    <div className="col-md-6 text-col d-flex align-items-center ">
                        <div>
                            { documentToReactComponents(props.data.leftText.json)}
                        </div>
                    </div>
                    <div  className="col-img col-md-6  p-4 d-flex align-items-center" >
                        <video controls width="100%" height="80%"  >
                            <source src={props.data.video.url} type="video/mp4"></source>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TwoColumnsTextVideo;