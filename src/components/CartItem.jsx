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
    removeFromCart = Function.prototype,
    cartPlus = Function.prototype,
    cartMinus = Function.Prototype
  } = props;


  return <li className="collection-item avatar active">
    <img src={background} alt="" className="circle imgincircle" />
    <span className="title">{displayName}</span>
    <p>
      {displayDescription &&
        <>{displayDescription}
          <br />
        </>
      }

      Тип:  {displayType}
      <br />
      <div className="quantity-list">
        Количество: {quantity}<i className="material-icons minusplus" onClick={() => cartPlus(mainId)}>exposure_plus_1</i><i className="material-icons minusplus" onClick={() => cartMinus(mainId)}>exposure_minus_1</i>
      </div>
      Цена:  {finalPrice}
    </p>
    <a href="#!" className="secondary-content" onClick={() => removeFromCart(mainId)}><i className="material-icons">remove</i></a>
  </li>
}

export { CartItem }