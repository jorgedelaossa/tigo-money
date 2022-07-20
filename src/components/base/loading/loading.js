import "./loading.css"
import CircularProgress from '@mui/material/CircularProgress';


const Loading = () => {
    return(
        <div className="container-fluid loading-container d-flex justify-content-center align-items-center">
            <CircularProgress size={80} />
        </div>
    )
}

export default Loading;