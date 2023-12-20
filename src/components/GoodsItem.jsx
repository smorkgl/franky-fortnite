function GoodsItem(props) {
    const {
        mainId,
        displayName, 
        displayDescription,
        displayType,
        finalPrice,
        full_background,
        price,
    } = props;
    
    

    return (
        
  <div className="row">
    <div className="col s12 m6">
      <div className="card" id={mainId}>
        <div className="card-image">
          <img src={full_background} alt={displayName} />
          <span className="card-title">{displayName}</span>
          <span>{displayType}</span>
          <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a> 
        </div>
        <div className="card-content">
          <p>{displayDescription}</p>
          <p>{price}</p>
        </div>
      </div>
    </div>
  </div>
            
    )
}


export {GoodsItem};