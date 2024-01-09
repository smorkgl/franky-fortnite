import { CartItem } from './CartItem'

function CartList(props) {
    const { order = [], handleCartShow = Function.prototype, removeFromCart = Function.prototype, cartPlus = Function.prototype, cartMinus = Function.Prototype } = props;
    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price.finalPrice * el.quantity
    }, 0);
    <x></x>
    return <ul className="collection">
        <i className="material-icons collection-clear" onClick={handleCartShow}>clear</i>
        {
            order.length ? order.map(item => (
                <CartItem key={item.mainId} {...item} removeFromCart={removeFromCart} cartPlus={cartPlus} cartMinus={cartMinus} />
            )) : <li className='collection-item'>Корзина пуста</li>
        }
        <div className="d-flex justify-between">
            <span className="summary-price">Общая стоимость: {totalPrice} руб.</span>
            <button className='oformit-zakaz btn m-10'>Оформить заказ</button>
        </div>
    </ul>
}

export { CartList }