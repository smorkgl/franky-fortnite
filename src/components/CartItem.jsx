function CartItem(props) {
    const {
        mainId,
        displayName,
        displayType,
        price: {
            finalPrice
        },
        quantity,
        displayDescription,
        displayAssets: [{
            background
          }],
    } = props;


    return <li className="collection-item avatar active">
    <img src={background} alt="" className="circle" />
    <span className="title">{displayName}</span>
    <p>
        {finalPrice}
        <br />
       {quantity}
       <br />
       {displayType}
       <br />
       {displayDescription}
    </p>
    <a href="#!" className="secondary-content"><i className="material-icons">clear</i></a>
  </li>
}

export {CartItem}