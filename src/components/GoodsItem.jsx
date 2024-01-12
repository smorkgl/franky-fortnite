import {useContext} from 'react';
import {ShopContext} from '../components/context'

function GoodsItem(props) {
 
  const {
    mainId,
    displayName,
    displayDescription,
    displayType,
    displayAssets: [{
      background
    }],
    price: {
      finalPrice
    },
  } = props;

  const {addToCart} = useContext(ShopContext)

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
            <a onClick={() => addToCart({ mainId, displayName, price: { finalPrice }, displayType, displayAssets: [{background}], displayDescription })} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
          </div>
        </div>
      </div>
    </div>

  )
}


export { GoodsItem };  