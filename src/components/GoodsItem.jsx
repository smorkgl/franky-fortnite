function GoodsItem(props, addToCart) {
    const {
        mainId,
        displayName, 
        displayDescription,
        displayType,
        displayAssets: [ {
          background
        }],
        price: {
          finalPrice
        }
    } = props;
    
    return (
        
  <div className="row">
    <div className="col s12 m6">
      <div className="card" id={mainId}>
        <div className="card-image">
          <img src={background} alt={displayName} />
          <span className="card-title">{displayName}</span>
          <br />
          <span>{displayType}</span>
          <br />
        </div>
        <div className="card-content">
          <p>{displayDescription}</p>
          <p class="price">{finalPrice} руб</p>
          <a onClick = {addToCart} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a> 
        </div>
      </div>
    </div>
  </div>
            
    )
}


export {GoodsItem};