import {CartItem} from './CartItem'

function CartList(props) {
    const {order = [], handleCartShow} = props;

    return   <ul className="collection">

                {   
            order.length ? order.map(item => (
                <CartItem key={item.mainId} {...item} />
            )) : <li className='collection-item'>Корзина пуста</li>
        }
        
    <span>Общая стоимость:</span>

    <a href="!#" onClick={handleCartShow}><i className="material-icons">clear</i></a>
  </ul>
}

export {CartList}