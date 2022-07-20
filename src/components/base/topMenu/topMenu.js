import "./topMenu.css"

const TopMenu =(props)=> {

    return(
        <div className="top-menu d-flex justify-content-end">
        <div className="col-6 col-md-2 account-btn  d-flex justify-content-center align-items-center">
            <a className="" href={props.urlAccount} target="_blank" rel="noreferrer">
              Tu cuenta Tigo Money
            </a>
        </div>
      </div>
    )
}

export default TopMenu;