import { useContext } from 'react';
import { CartItem } from './CartItem'
import { ShopContext } from './context';

function CartList() {
    const {
         order = [],
         handleCartShow = Function.prototype,
    } = useContext(ShopContext)
 
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price.finalPrice * el.quantity
    }, 0);
    <x></x>
    return <ul className="collection">
        <i className="material-icons collection-clear" onClick={handleCartShow}>clear</i>
        {
            order.length ? order.map(item => (
                <CartItem key={item.mainId} {...item} />
            )) : <li className='collection-item'>Корзина пуста</li>
        }
        <div className="d-flex justify-between">
            <span className="summary-price">Общая стоимость: {totalPrice} руб.</span>
            <button className='oformit-zakaz btn m-10'>Оформить заказ</button>
        </div>
    </ul>
}

export { CartList }